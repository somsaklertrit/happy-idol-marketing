"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "./LocaleProvider";

const TARGET_VOLUME = 0.22;
const FADE_MS = 1800;
const LOOP_FADE_SECONDS = 2;
const SESSION_USER_MUTED_KEY = "happy-idol-user-muted";
const SESSION_WAS_PLAYING_KEY = "happy-idol-music-was-playing-before-external";
const SESSION_RESUME_PENDING_KEY = "happy-idol-resume-pending";
const SESSION_POSITION_KEY = "happy-idol-music-position";
const LEGACY_SOUND_KEY = "happy-idol-sound";
const AUDIO_DEBUG = process.env.NEXT_PUBLIC_HAPPY_IDOL_AUDIO_DEBUG === "true";
const FIRST_INTERACTION_EVENTS = ["pointerdown", "pointerup", "touchend", "click", "keydown", "wheel"] as const;

type FadeOptions = { pauseAfter?: boolean };
type StartReason = "autoplay" | "interaction" | "resume" | "manual";
type DebugEvent = "youtube-click" | "document-hidden" | "document-visible" | "window-focus" | "pageshow" | "play-success" | "play-failed";

function isYouTubeTarget(target: EventTarget | null) {
  const anchor = target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;
  if (!anchor) return false;
  try {
    const host = new URL(anchor.href).hostname.toLowerCase();
    return host === "youtu.be" || host === "youtube.com" || host.endsWith(".youtube.com");
  } catch {
    return false;
  }
}

function readSessionBoolean(key: string) {
  try { return sessionStorage.getItem(key) === "true"; } catch { return false; }
}

function writeSessionBoolean(key: string, value: boolean) {
  try { sessionStorage.setItem(key, String(value)); } catch { /* Storage can be unavailable. */ }
}

export default function BackgroundMusic() {
  const { t } = useLocale();
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number | null>(null);
  const fadingRef = useRef(false);
  const lastTimeRef = useRef(0);
  const enabledRef = useRef(false);
  const userMutedRef = useRef(false);
  const musicWasPlayingBeforeExternalRef = useRef(false);
  const resumePendingRef = useRef(false);
  const leftForExternalRef = useRef(false);
  const autoplayAttemptedRef = useRef(false);
  const playAttemptRef = useRef<Promise<boolean> | null>(null);
  const playSequenceRef = useRef(0);
  const lastResumeAttemptAtRef = useRef(0);
  const removeInteractionListenersRef = useRef<(() => void) | null>(null);
  const [enabled, setEnabled] = useState(false);

  const setPlaybackEnabled = useCallback((value: boolean) => {
    enabledRef.current = value;
    setEnabled(value);
  }, []);

  const debugAudioState = useCallback((event: DebugEvent) => {
    if (!AUDIO_DEBUG) return;
    const audio = audioRef.current;
    console.debug(`[Happy Idol audio] ${event}`, {
      userMuted: userMutedRef.current,
      musicWasPlayingBeforeExternal: musicWasPlayingBeforeExternalRef.current,
      resumePending: resumePendingRef.current,
      paused: audio?.paused ?? true,
      currentTime: audio?.currentTime ?? 0
    });
  }, []);

  const cancelFade = useCallback(() => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
    fadingRef.current = false;
  }, []);

  const fadeTo = useCallback((target: number, duration = FADE_MS, options: FadeOptions = {}) => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelFade();
    fadingRef.current = true;
    const startVolume = audio.volume;
    const startedAt = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      audio.volume = startVolume + (target - startVolume) * progress;
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
        return;
      }
      audio.volume = target;
      animationRef.current = null;
      fadingRef.current = false;
      if (options.pauseAfter) audio.pause();
    };
    animationRef.current = requestAnimationFrame(step);
  }, [cancelFade]);

  const pauseImmediately = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    playSequenceRef.current++;
    cancelFade();
    audio.volume = 0;
    audio.pause();
    setPlaybackEnabled(false);
  }, [cancelFade, setPlaybackEnabled]);

  const pauseWithFade = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    fadeTo(0, FADE_MS, { pauseAfter: true });
  }, [fadeTo]);

  const startPlayback = useCallback(async (reason: StartReason) => {
    const audio = audioRef.current;
    if (!audio || userMutedRef.current) return false;
    if (!audio.paused) {
      fadeTo(TARGET_VOLUME);
      setPlaybackEnabled(true);
      debugAudioState("play-success");
      return true;
    }
    if (playAttemptRef.current && (reason === "autoplay" || reason === "resume")) return playAttemptRef.current;
    const sequence = ++playSequenceRef.current;

    const attempt = (async () => {
      cancelFade();
      audio.muted = false;
      audio.volume = reason === "autoplay" ? 0.01 : 0;
      try {
        await audio.play();
        if (sequence !== playSequenceRef.current || userMutedRef.current) return false;
        lastTimeRef.current = audio.currentTime;
        setPlaybackEnabled(true);
        fadeTo(TARGET_VOLUME);
        debugAudioState("play-success");
        return true;
      } catch (error) {
        console.log("Audio Error:", error);
        if (sequence !== playSequenceRef.current) return false;
        audio.pause();
        setPlaybackEnabled(false);
        debugAudioState("play-failed");
        return false;
      }
    })();

    playAttemptRef.current = attempt;
    const started = await attempt;
    if (playAttemptRef.current === attempt) playAttemptRef.current = null;
    return started;
  }, [cancelFade, debugAudioState, fadeTo, setPlaybackEnabled]);

  const clearFirstInteractionFallback = useCallback(() => {
    removeInteractionListenersRef.current?.();
    removeInteractionListenersRef.current = null;
  }, []);

  const setResumeState = useCallback((musicWasPlaying: boolean, resumePending: boolean) => {
    musicWasPlayingBeforeExternalRef.current = musicWasPlaying;
    resumePendingRef.current = resumePending;
    writeSessionBoolean(SESSION_WAS_PLAYING_KEY, musicWasPlaying);
    writeSessionBoolean(SESSION_RESUME_PENDING_KEY, resumePending);
    if (!resumePending) {
      leftForExternalRef.current = false;
      lastResumeAttemptAtRef.current = 0;
      try { sessionStorage.removeItem(SESSION_POSITION_KEY); } catch { /* Storage can be unavailable. */ }
    }
  }, []);

  const savePlaybackPosition = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.currentTime)) return;
    try { sessionStorage.setItem(SESSION_POSITION_KEY, String(audio.currentTime)); } catch { /* Storage can be unavailable. */ }
  }, []);

  const restorePlaybackPosition = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let position = Number.NaN;
    try { position = Number(sessionStorage.getItem(SESSION_POSITION_KEY)); } catch { return; }
    if (!Number.isFinite(position) || position <= 0) return;
    const applyPosition = () => {
      const upperBound = Number.isFinite(audio.duration) ? Math.max(0, audio.duration - 0.25) : position;
      try { audio.currentTime = Math.min(position, upperBound); } catch { /* A pending seek is optional. */ }
    };
    if (audio.readyState >= 1) applyPosition();
    else audio.addEventListener("loadedmetadata", applyPosition, { once: true });
  }, []);

  const markTemporaryPause = useCallback((event: DebugEvent) => {
    const audio = audioRef.current;
    if (!audio || audio.paused || !enabledRef.current || userMutedRef.current) {
      debugAudioState(event);
      return false;
    }
    userMutedRef.current = false;
    writeSessionBoolean(SESSION_USER_MUTED_KEY, false);
    setResumeState(true, true);
    leftForExternalRef.current = false;
    savePlaybackPosition();
    debugAudioState(event);
    return true;
  }, [debugAudioState, savePlaybackPosition, setResumeState]);

  const armFirstInteractionFallback = useCallback(() => {
    if (removeInteractionListenersRef.current || userMutedRef.current) return;
    const onFirstInteraction = (event: Event) => {
      if (isYouTubeTarget(event.target)) return;
      if (event.target instanceof Element && event.target.closest(".sound-control")) return;
      if (resumePendingRef.current) restorePlaybackPosition();
      void startPlayback("interaction").then((started) => {
        if (!started) return;
        setResumeState(false, false);
        clearFirstInteractionFallback();
      });
    };
    for (const eventName of FIRST_INTERACTION_EVENTS) {
      document.body.addEventListener(eventName, onFirstInteraction, { capture: true, passive: true });
    }
    removeInteractionListenersRef.current = () => {
      for (const eventName of FIRST_INTERACTION_EVENTS) document.body.removeEventListener(eventName, onFirstInteraction, true);
    };
  }, [clearFirstInteractionFallback, restorePlaybackPosition, setResumeState, startPlayback]);

  const resumePendingPlayback = useCallback(async () => {
    if (!resumePendingRef.current || userMutedRef.current) return false;
    const now = Date.now();
    if (now - lastResumeAttemptAtRef.current < 500) return false;
    lastResumeAttemptAtRef.current = now;
    restorePlaybackPosition();
    const started = await startPlayback("resume");
    if (started) {
      setResumeState(false, false);
      clearFirstInteractionFallback();
    } else {
      armFirstInteractionFallback();
    }
    return started;
  }, [armFirstInteractionFallback, clearFirstInteractionFallback, restorePlaybackPosition, setResumeState, startPlayback]);

  const handleToggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFirstInteractionFallback();
    if (!audio.paused) {
      userMutedRef.current = true;
      writeSessionBoolean(SESSION_USER_MUTED_KEY, true);
      try { sessionStorage.setItem(LEGACY_SOUND_KEY, "off"); } catch { /* Storage can be unavailable. */ }
      setResumeState(false, false);
      clearFirstInteractionFallback();
      pauseImmediately();
      return;
    }

    userMutedRef.current = false;
    writeSessionBoolean(SESSION_USER_MUTED_KEY, false);
    try { sessionStorage.removeItem(LEGACY_SOUND_KEY); } catch { /* Storage can be unavailable. */ }
    setResumeState(false, false);
    void startPlayback("manual").then((started) => {
      if (started) clearFirstInteractionFallback();
    });
  }, [clearFirstInteractionFallback, pauseImmediately, setResumeState, startPlayback]);

  const syncPlaybackState = useCallback(() => {
    const audio = audioRef.current;
    setPlaybackEnabled(!!audio && !audio.paused && !audio.ended && !audio.error);
  }, [setPlaybackEnabled]);

  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !enabledRef.current || !Number.isFinite(audio.duration)) return;
    const current = audio.currentTime;
    if (current + 1 < lastTimeRef.current) {
      audio.volume = 0;
      fadeTo(TARGET_VOLUME);
    } else if (!fadingRef.current && audio.duration - current <= LOOP_FADE_SECONDS) {
      const remaining = Math.max(0, audio.duration - current);
      audio.volume = TARGET_VOLUME * (remaining / LOOP_FADE_SECONDS);
    }
    lastTimeRef.current = current;
  }, [fadeTo]);

  useEffect(() => {
    if (autoplayAttemptedRef.current) {
      armFirstInteractionFallback();
      return clearFirstInteractionFallback;
    }
    autoplayAttemptedRef.current = true;
    // A new page visit tries autoplay again. Manual OFF applies to this visit.
    userMutedRef.current = false;
    writeSessionBoolean(SESSION_USER_MUTED_KEY, false);
    try { sessionStorage.removeItem(LEGACY_SOUND_KEY); } catch { /* Storage can be unavailable. */ }
    musicWasPlayingBeforeExternalRef.current = readSessionBoolean(SESSION_WAS_PLAYING_KEY);
    resumePendingRef.current = readSessionBoolean(SESSION_RESUME_PENDING_KEY);
    armFirstInteractionFallback();

    void (async () => {
      const returning = resumePendingRef.current && musicWasPlayingBeforeExternalRef.current;
      if (returning) restorePlaybackPosition();
      const started = await startPlayback(returning ? "resume" : "autoplay");
      if (started) {
        setResumeState(false, false);
        clearFirstInteractionFallback();
      }
    })();
    return clearFirstInteractionFallback;
  }, [armFirstInteractionFallback, clearFirstInteractionFallback, restorePlaybackPosition, setResumeState, startPlayback]);

  useEffect(() => {
    const onVisibilityChange = () => {
      const audio = audioRef.current;
      if (document.hidden) {
        if (audio && !audio.paused && enabledRef.current && !userMutedRef.current) markTemporaryPause("document-hidden");
        else debugAudioState("document-hidden");
        if (resumePendingRef.current) leftForExternalRef.current = true;
        if (audio && !audio.paused) pauseImmediately();
        return;
      }
      debugAudioState("document-visible");
      if (resumePendingRef.current && !userMutedRef.current) void resumePendingPlayback();
    };
    const onWindowFocus = () => {
      debugAudioState("window-focus");
      if (!document.hidden && leftForExternalRef.current && resumePendingRef.current && !userMutedRef.current) void resumePendingPlayback();
    };
    const onWindowBlur = () => {
      if (resumePendingRef.current) leftForExternalRef.current = true;
    };
    const onPageHide = () => {
      if (resumePendingRef.current) leftForExternalRef.current = true;
    };
    const onPageShow = () => {
      userMutedRef.current = readSessionBoolean(SESSION_USER_MUTED_KEY) || (() => { try { return sessionStorage.getItem(LEGACY_SOUND_KEY) === "off"; } catch { return false; } })();
      musicWasPlayingBeforeExternalRef.current = readSessionBoolean(SESSION_WAS_PLAYING_KEY);
      resumePendingRef.current = readSessionBoolean(SESSION_RESUME_PENDING_KEY);
      debugAudioState("pageshow");
      if (!resumePendingRef.current || userMutedRef.current) return;
      leftForExternalRef.current = true;
      void resumePendingPlayback();
    };
    const onDocumentClick = (event: MouseEvent) => {
      if (!isYouTubeTarget(event.target)) return;
      if (markTemporaryPause("youtube-click")) {
        armFirstInteractionFallback();
        pauseWithFade();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    document.addEventListener("click", onDocumentClick, true);
    window.addEventListener("focus", onWindowFocus);
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("click", onDocumentClick, true);
      window.removeEventListener("focus", onWindowFocus);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("pageshow", onPageShow);
      clearFirstInteractionFallback();
      cancelFade();
    };
  }, [armFirstInteractionFallback, cancelFade, clearFirstInteractionFallback, debugAudioState, markTemporaryPause, pauseImmediately, pauseWithFade, resumePendingPlayback]);

  return <div className="background-music" data-active={enabled ? "true" : "false"}>
    <audio ref={audioRef} src="/audio/family-motif.mp3" preload="auto" loop playsInline onTimeUpdate={handleTimeUpdate} onPlay={syncPlaybackState} onPlaying={syncPlaybackState} onPause={syncPlaybackState} onEnded={syncPlaybackState} onError={syncPlaybackState} onEmptied={syncPlaybackState} aria-label={t("Background music")}/>
    <button type="button" className="sound-control" aria-pressed={enabled} aria-label={t(enabled ? "Turn background music off" : "Turn background music on")} onClick={handleToggle}>
      <span aria-hidden="true">♪</span> {t(enabled ? "Sound On" : "Sound Off")}
    </button>
  </div>;
}
