<script setup lang="ts">
import Icon from './UiIcon.vue'

const principles = ['Free to use', 'No account needed', 'Made for sharing']
</script>

<template>
  <ul
    class="mx-auto mt-7 mb-[51px] flex max-w-[1248px] flex-wrap items-center justify-center gap-x-7 gap-y-3"
  >
    <li v-for="principle in principles" :key="principle" class="flex items-center gap-2">
      <Icon name="check" :size="14" class="text-stone-900" />
      <span class="text-label text-stone-900">{{ principle }}</span>
    </li>
  </ul>
</template>
