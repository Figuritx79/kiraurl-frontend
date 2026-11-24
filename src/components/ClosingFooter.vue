<script setup lang="ts">
import BrandMark from './BrandMark.vue'
import Icon from './UiIcon.vue'
</script>

<template>
  <footer class="bg-stone-900 text-white">
    <div class="mx-auto max-w-[1248px] py-16">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="font-mono text-eyebrow uppercase text-stone-400">
            Less to type. More to share.
          </p>
          <h2 class="mt-3 text-display text-white">Your next link, a little lighter.</h2>
        </div>

        <a
          href="#shorten"
          class="inline-flex h-[50px] shrink-0 items-center gap-3 rounded-lg bg-lime-200 px-6 text-label font-semibold text-stone-900 transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
        >
          Make a short link
          <Icon name="arrow-up-right" :size="20" />
        </a>
      </div>

      <hr class="mt-[52px] border-white/20" />

      <div class="mt-[52px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <BrandMark tone="dark" />
        <p class="font-mono text-code text-stone-400">
          A personal project, made with a little curiosity.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 font-mono text-code text-stone-400 transition-colors hover:text-white"
        >
          Explore on GitHub
          <Icon name="arrow-up-right" :size="15" />
        </a>
      </div>
    </div>
  </footer>
</template>
