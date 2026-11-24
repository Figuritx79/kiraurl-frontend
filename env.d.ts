/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the shortening API. Defaults to http://localhost:3000 */
  readonly VITE_API_BASE_URL?: string
  /** Path of the shortening endpoint. Defaults to /api/links */
  readonly VITE_API_SHORTEN_PATH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
