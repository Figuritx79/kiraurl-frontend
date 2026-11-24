<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import Icon from './UiIcon.vue'
import { EXAMPLE_ORIGINAL, EXAMPLE_SHORT, useShortenerStore } from '@/stores/shortener'

const store = useShortenerStore()
const { url, status, shortUrl, errorMessage } = storeToRefs(store)

const displayedShort = computed(() => shortUrl.value || EXAMPLE_SHORT)
const isBusy = computed(() => status.value === 'loading')
</script>

<template>
  <section id="shorten" class="mx-auto max-w-[1248px]">
    <div class="rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 class="text-lead font-semibold text-stone-900">Make room for a shorter link.</h2>
        <p class="flex items-center gap-2 text-label text-stone-500">
          <span class="size-1.5 rounded-full bg-stone-900" aria-hidden="true" />
          No sign-up. Just a link.
        </p>
      </div>

      <form class="mt-[22px] flex flex-col gap-3 sm:flex-row" @submit.prevent="store.submit()">
        <div
          class="flex h-16 flex-1 items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 px-5"
        >
          <Icon name="link" :size="20" class="shrink-0 text-stone-900" />
          <input
            v-model="url"
            type="text"
            name="url"
            autocomplete="url"
            spellcheck="false"
            placeholder="Paste your long URL here"
            aria-label="Long URL to shorten"
            class="w-full min-w-0 bg-transparent text-input text-stone-900 placeholder:text-stone-500 focus:outline-none"
          />
          <span v-if="!url" class="hidden shrink-0 font-mono text-code text-stone-500 sm:block">
            https://
          </span>
        </div>

        <button
          type="submit"
          :disabled="isBusy"
          class="inline-flex h-16 shrink-0 items-center justify-center gap-3 rounded-lg bg-lime-200 px-9 text-base font-semibold text-stone-900 transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 disabled:opacity-60"
        >
          {{ isBusy ? 'Shortening…' : 'Shorten link' }}
          <Icon name="arrow-right" :size="20" />
        </button>
      </form>

      <p v-if="errorMessage" class="mt-4 text-label text-stone-900" role="alert">
        {{ errorMessage }}
      </p>

      <div class="mt-[22px] flex flex-wrap items-center gap-x-4 gap-y-2">
        <span class="font-mono text-eyebrow uppercase text-stone-500">For example</span>
        <span class="font-mono text-code text-stone-900">{{ EXAMPLE_ORIGINAL }}</span>
        <Icon name="arrow-right" :size="16" class="text-stone-900" />
        <span class="font-mono text-code text-stone-900">{{ displayedShort }}</span>
      </div>
    </div>
  </section>
</template>
