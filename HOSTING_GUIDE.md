# Hosting Guide

This site is hosted on **GitHub Pages** and served at **https://srinik.me**.

## How it works

- **Source:** the `main` branch, `/ (root)` folder
- **Custom domain:** `srinik.me`, stored in the `CNAME` file at the repo root — **do not delete that file**
- Every push to `main` triggers a `pages-build-deployment` workflow run. The live site updates about 1–3 minutes later.

## Updating the site

1. Edit `index.html`, `css/styles.css`, `js/script.js`, or anything in `assets/`.
2. Commit to `main` (directly, or via a pull request you merge).
3. Watch the run under the repo's **Actions** tab.
4. When it goes green, hard-refresh the site: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).

To swap the resume PDF, upload the new file over `assets/resume.pdf` — the Resume button in the navbar points there.

## DNS configuration

Set at the registrar where `srinik.me` is managed:

| Type  | Name | Value                 |
| ----- | ---- | --------------------- |
| A     | @    | `185.199.108.153`     |
| A     | @    | `185.199.109.153`     |
| A     | @    | `185.199.110.153`     |
| A     | @    | `185.199.111.153`     |
| CNAME | www  | `srini2727.github.io` |

Optional IPv6 — add as `AAAA` records on `@`:

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

A CNAME on `www` is preferred over A records, because it keeps working if GitHub ever changes those IPs.

## HTTPS

Under **Settings → Pages**, **Enforce HTTPS** should stay checked.

GitHub issues the TLS certificate automatically. After the custom domain is first set — or changed — the checkbox is greyed out until the certificate finishes being issued. That usually takes a few minutes, occasionally a few hours. During that window `https://www.srinik.me` may show a certificate warning; it clears on its own.

## Settings reference

Repo → **Settings** → **Pages**:

- **Source:** Deploy from a branch
- **Branch:** `main`, folder `/ (root)`
- **Custom domain:** `srinik.me`
- **Enforce HTTPS:** on

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| "Site not found · GitHub Pages" | Build still running. Check **Actions**. |
| Certificate warning on `www` | Certificate not yet issued or reissued. Wait it out. |
| Changes not showing | Build finished but the browser cached the old page — hard-refresh. |
| Custom domain field went empty | The `CNAME` file was deleted. Re-enter `srinik.me` under Settings → Pages. |
| DNS check fails | A records no longer match the four IPs above. |

Do not point `srinik.me` at a second host (Netlify, Vercel, etc.) while GitHub Pages is serving it — pick one.
