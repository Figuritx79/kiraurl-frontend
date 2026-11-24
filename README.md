# kiraurl-frontend

Landing page for **Kira URL**, a URL shortener. The visual design lives in Figma
(file `tPbwZyr9m7hIJzhIzcbjGR`); this app implements it.

## Stack

- Vue 3 + Vite + Pinia
- Tailwind CSS v4 — CSS-first `@theme` in `src/assets/main.css`, no `tailwind.config.js`
- Inter + IBM Plex Mono, self-hosted through `@fontsource`

The color palette is Tailwind's native `stone` scale plus `lime-200` for the accent.
The same values are bound to a `Tailwind` variable collection in the Figma file, so
design and code share one source of truth.

## Project setup

```sh
pnpm install
```

### Compile and hot-reload for development

```sh
pnpm dev
```

### Type-check, compile and minify for production

```sh
pnpm build
```

### Run unit tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Format with [oxfmt](https://oxc.rs/docs/formatter.html)

```sh
pnpm format
```

## Environment

The shortening backend is not part of this repository. The client reads two
variables, both optional:

| Variable | Default | Purpose |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `http://localhost:3000` | Base URL of the shortening API |
| `VITE_API_SHORTEN_PATH` | `/api/links` | Path of the shortening endpoint |

Create `.env.local` to point the app at your backend:

```sh
VITE_API_BASE_URL=https://api.kira.url
VITE_API_SHORTEN_PATH=/api/links
```

### API contract

```sh
POST <VITE_API_BASE_URL><VITE_API_SHORTEN_PATH>
Content-Type: application/json

{ "url": "https://example.com/a-very-long-link" }
```

```sh
200 OK

{ "shortUrl": "kira.url/hello" }
```

`short_url` is accepted as an alternative field name. A bare domain typed by the
visitor is normalized to `https://` before it is sent.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.): [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) and [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/debugging-formatting).
- Firefox: [Vue.js devtools](https://addons.mozilla.org/firefox/addon/vue-devtools/) and [Turn on Custom Object Formatter in Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_the_Debugger).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we use [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to get type information for `.vue` imports.
