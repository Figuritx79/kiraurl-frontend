import { ref } from 'vue'
import { defineStore } from 'pinia'

import { createHttpShortener, normalizeUrl } from '@/services/shortener-api'

export type ShortenerStatus = 'idle' | 'loading' | 'success' | 'error'

export const EXAMPLE_ORIGINAL = 'your-website.com/a-very-long-link?ref=hello'
export const EXAMPLE_SHORT = 'kira.url/hello'

export const useShortenerStore = defineStore('shortener', () => {
  const client = createHttpShortener()

  const url = ref('')
  const status = ref<ShortenerStatus>('idle')
  const shortUrl = ref('')
  const errorMessage = ref('')

  async function submit(): Promise<void> {
    const normalized = normalizeUrl(url.value)

    if (!normalized) {
      status.value = 'error'
      errorMessage.value = 'That does not look like a valid URL.'
      shortUrl.value = ''
      return
    }

    status.value = 'loading'
    errorMessage.value = ''

    try {
      const result = await client.shorten(normalized)
      shortUrl.value = result.shortUrl
      status.value = 'success'
    } catch (error) {
      shortUrl.value = ''
      status.value = 'error'
      errorMessage.value = error instanceof Error ? error.message : 'Something went wrong.'
    }
  }

  function reset(): void {
    url.value = ''
    status.value = 'idle'
    shortUrl.value = ''
    errorMessage.value = ''
  }

  return { url, status, shortUrl, errorMessage, submit, reset }
})
