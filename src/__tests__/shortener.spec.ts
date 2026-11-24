import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useShortenerStore } from '@/stores/shortener'

function jsonResponse(body: unknown, { ok = true, status = 200 } = {}) {
  return { ok, status, json: async () => body } as unknown as Response
}

describe('shortener store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.restoreAllMocks()
  })

  it('rejects a malformed URL without calling the API', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    const store = useShortenerStore()

    store.url = 'not a url'
    await store.submit()

    expect(store.status).toBe('error')
    expect(store.errorMessage).toContain('valid URL')
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('adds the protocol to a bare domain and posts it', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(jsonResponse({ shortUrl: 'kira.url/hello' }))

    const store = useShortenerStore()
    store.url = 'your-website.com/a-very-long-link'
    await store.submit()

    expect(store.status).toBe('success')
    expect(store.shortUrl).toBe('kira.url/hello')

    const [calledUrl, requestInit] = fetchSpy.mock.calls[0] as [string, RequestInit]
    expect(calledUrl).toContain('/api/links')
    expect(requestInit.method).toBe('POST')
    expect(JSON.parse(requestInit.body as string)).toEqual({
      url: 'https://your-website.com/a-very-long-link',
    })
  })

  it('keeps an explicit protocol untouched', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(jsonResponse({ short_url: 'kira.url/hello' }))

    const store = useShortenerStore()
    store.url = 'http://example.com/thing'
    await store.submit()

    const [, requestInit] = fetchSpy.mock.calls[0] as [string, RequestInit]
    expect(JSON.parse(requestInit.body as string)).toEqual({ url: 'http://example.com/thing' })
    expect(store.status).toBe('success')
    expect(store.shortUrl).toBe('kira.url/hello')
  })

  it('surfaces a failing API as an error', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(jsonResponse({}, { ok: false, status: 500 }))

    const store = useShortenerStore()
    store.url = 'example.com'
    await store.submit()

    expect(store.status).toBe('error')
    expect(store.errorMessage).toContain('500')
    expect(store.shortUrl).toBe('')
  })

  it('surfaces an unreachable API as an error', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('offline'))

    const store = useShortenerStore()
    store.url = 'example.com'
    await store.submit()

    expect(store.status).toBe('error')
    expect(store.errorMessage).toContain('Could not reach')
  })
})
