<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'light' | 'dark' }>(), { tone: 'light' })
</script>

<template>
  <span class="flex items-center gap-2.5">
    <img
      src="@/assets/kira-mascot.png"
      alt=""
      class="h-8 w-auto"
      :class="tone === 'dark' ? 'opacity-95' : ''"
    />
    <span
      class="text-wordmark leading-none"
      :class="tone === 'dark' ? 'text-white' : 'text-stone-900'"
    >
      kira
    </span>
    <span
      class="text-label font-semibold leading-none"
      :class="tone === 'dark' ? 'text-stone-400' : 'text-stone-500'"
    >
      URL
    </span>
  </span>
</template>
