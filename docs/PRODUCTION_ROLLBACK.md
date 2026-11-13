# Happy Idol Marketing — Production Rollback

This document describes the rollback design prepared during Production Readiness Stage 1. It does **not** activate Production, DNS, Nginx, services, or symlinks.

## Release layout

Production deployment should use immutable directories:

```text
happy-idol-marketing-releases/
  releases/<timestamp>/application/
  current -> releases/<active timestamp>
  previous -> releases/<previous timestamp>
```

The `current` and `previous` symlinks are intentionally not created or changed during Stage 1.

## Preconditions

Before any future Production cutover:

1. Preserve the existing Story Portal files, environment, service definition, and proxy configuration independently.
2. Verify the intended `current` and `previous` release directories and their manifests.
3. Confirm that the previous release passes a local health check.
4. Record the Production service name and proxy configuration path approved by the Founder.

## Exact rollback procedure

1. Point `current` back to the verified `previous` release using an atomic symlink replacement.
2. Restart the approved Happy Idol Marketing Production service.
3. Run a local health check against the loopback origin and verify `/`, all required routes, static CSS, JavaScript, images, `sitemap.xml`, and `robots.txt`.
4. Reload the reverse proxy only if required by a proxy configuration or upstream change; validate the proxy configuration before reload.
5. Verify the public HTTPS homepage and one secondary route.
6. If the Story Portal migration was part of the failed change, use its independent rollback plan to restore the prior Portal service/vhost without modifying Marketing release files.

## Safety rules

- Never edit an immutable release in place.
- Never delete `previous` until the new release has passed the agreed observation window.
- Never treat a Marketing rollback as authorization to alter Story Portal, Google Apps Script, DNS, firewall, or Cloudflare configuration.
- Keep the source snapshot, release manifest, and built application together for every approved release.
