<script setup lang="ts">
import BrandMark from './BrandMark.vue'
import Icon from './UiIcon.vue'
</script>

<template>
  <nav class="border-b border-stone-200" aria-label="Main">
    <div class="mx-auto flex max-w-[1248px] items-center justify-between py-[36px]">
      <a href="#" class="shrink-0" aria-label="Kira URL, home">
        <BrandMark />
      </a>

      <ul class="flex items-center gap-9">
        <li>
          <a
            href="#how-it-works"
            class="text-label text-stone-900 transition-colors hover:text-stone-500"
          >
            How it works
          </a>
        </li>
        <li>
          <a href="#faqs" class="text-label text-stone-900 transition-colors hover:text-stone-500">
            FAQs
          </a>
        </li>
        <li>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-label text-stone-900 transition-colors hover:text-stone-500"
          >
            <Icon name="github" :size="17" class="text-stone-900" />
            <span>View project</span>
            <Icon name="arrow-up-right" :size="16" class="text-stone-900" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
