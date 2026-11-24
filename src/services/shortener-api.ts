/**
 * HTTP client for the Kira URL shortening API.
 *
 * The contract is intentionally narrow and configurable, because the backend
 * endpoint was not part of this repository:
 *
 *   POST  <VITE_API_BASE_URL><VITE_API_SHORTEN_PATH>
 *   body  { "url": "https://example.com/very/long" }
 *   200   { "shortUrl": "kira.url/hello" }   (or `short_url`)
 *
 * Both environment variables fall back to a local development default.
 */

export interface ShortenResult {
  shortUrl: string
}

export class ShortenerError extends Error {
  constructor(
    message: string,
    readonly cause?: unknown,
  ) {
    super(message)
    this.name = 'ShortenerError'
  }
}

export interface ShortenerClient {
  shorten(url: string): Promise<ShortenResult>
}

export interface HttpShortenerOptions {
  baseUrl?: string
  shortenPath?: string
  fetchImpl?: typeof fetch
}

const DEFAULT_BASE_URL = 'http://localhost:3000'
const DEFAULT_SHORTEN_PATH = '/api/links'

export function createHttpShortener(options: HttpShortenerOptions = {}): ShortenerClient {
  const baseUrl = options.baseUrl ?? import.meta.env.VITE_API_BASE_URL ?? DEFAULT_BASE_URL
  const shortenPath =
    options.shortenPath ?? import.meta.env.VITE_API_SHORTEN_PATH ?? DEFAULT_SHORTEN_PATH
  const doFetch = options.fetchImpl ?? globalThis.fetch

  return {
    async shorten(url: string): Promise<ShortenResult> {
      let response: Response
      try {
        response = await doFetch(`${baseUrl}${shortenPath}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url }),
        })
      } catch (error) {
        throw new ShortenerError('Could not reach the shortener service.', error)
      }

      if (!response.ok) {
        throw new ShortenerError(`The shortener service answered with ${response.status}.`)
      }

      const payload = (await response.json()) as { shortUrl?: string; short_url?: string } | null
      const shortUrl = payload?.shortUrl ?? payload?.short_url

      if (!shortUrl) {
        throw new ShortenerError('The shortener service did not return a short link.')
      }

      return { shortUrl }
    },
  }
}

/** Adds a protocol when the visitor typed a bare domain, then validates it. */
export function normalizeUrl(input: string): string | null {
  const trimmed = input.trim()
  if (!trimmed) return null

  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`

  try {
    const parsed = new URL(candidate)
    if (!parsed.hostname.includes('.')) return null
    return parsed.toString()
  } catch {
    return null
  }
}
