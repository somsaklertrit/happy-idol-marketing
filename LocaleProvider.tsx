"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { defaultLocale, localeStorageKey, supportedLocales, translate, type Locale } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (source: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const localeChangeEvent = "happy-idol-locale-change";

function readLocale(): Locale {
  const saved = window.localStorage.getItem(localeStorageKey);
  return saved && supportedLocales.includes(saved as Locale) ? saved as Locale : defaultLocale;
}

function subscribeLocale(callback: () => void) {
  const onStorage = (event: StorageEvent) => { if (event.key === localeStorageKey) callback(); };
  window.addEventListener("storage", onStorage);
  window.addEventListener(localeChangeEvent, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(localeChangeEvent, callback);
  };
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, readLocale, () => defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(localeStorageKey, next);
    window.dispatchEvent(new Event(localeChangeEvent));
  }, []);
  const toggleLocale = useCallback(() => setLocale(locale === "en" ? "th" : "en"), [locale, setLocale]);
  const t = useCallback((source: string) => translate(locale, source), [locale]);
  const value = useMemo(() => ({ locale, setLocale, toggleLocale, t }), [locale, setLocale, toggleLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}

export function LocalizedSkipLink() {
  const { t } = useLocale();
  return <a className="skip-link" href="#main">{t("Skip to content")}</a>;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  return (
    <div className={`language-switcher ${className}`.trim()} role="group" aria-label="Language / ภาษา">
      <button type="button" className={locale === "en" ? "active" : ""} aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
      <span aria-hidden="true">/</span>
      <button type="button" className={locale === "th" ? "active" : ""} aria-pressed={locale === "th"} onClick={() => setLocale("th")}>TH</button>
    </div>
  );
}
