<script setup lang="ts">
import Icon from './UiIcon.vue'

const steps = [
  {
    number: '01',
    label: 'Paste',
    icon: 'clipboard',
    title: 'Start with the long version.',
    description:
      'A new project, a favorite article, that perfect playlist. Grab the URL you want to share.',
    example: 'https://your-website.com/something-great',
    exampleIcon: 'clipboard',
  },
  {
    number: '02',
    label: 'Shorten',
    icon: 'link',
    title: 'Give it a little less length.',
    description:
      'One click turns your long URL into a compact link. Same destination, a much cleaner look.',
    example: 'kira.url/something-great',
    exampleIcon: 'link',
  },
  {
    number: '03',
    label: 'Share',
    icon: 'send',
    title: 'Send it out into the world.',
    description:
      'Copy your new link into a message, your bio, or your next big idea. Good things travel light.',
    example: 'Copied. Ready for wherever comes next.',
    exampleIcon: 'send',
  },
]
</script>

<template>
  <section id="how-it-works" class="bg-stone-100 py-[76px]">
    <div class="mx-auto max-w-[1248px]">
      <div class="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div class="max-w-[670px]">
          <p class="font-mono text-eyebrow uppercase text-stone-500">How it works</p>
          <h2 class="mt-4 text-section text-stone-900">Three steps. Zero fuss.</h2>
        </div>
        <p class="max-w-[320px] text-body text-stone-500 lg:pt-[36px]">
          Built for the simple joy of sharing something worth a click.
        </p>
      </div>

      <ol class="mt-12 grid gap-10 lg:grid-cols-3">
        <li v-for="step in steps" :key="step.number">
          <div class="flex items-center justify-between">
            <span class="font-mono text-eyebrow uppercase text-stone-500">
              {{ step.number }} / {{ step.label }}
            </span>
            <Icon :name="step.icon" :size="22" class="text-stone-900" />
          </div>

          <hr class="mt-[22px] border-stone-200" />

          <div class="mt-[22px]">
            <h3 class="text-title text-stone-900">{{ step.title }}</h3>
            <p class="mt-3 text-body text-stone-500">{{ step.description }}</p>
          </div>

          <div class="mt-[22px] flex items-center gap-2 rounded-lg bg-white px-4 py-[15px]">
            <Icon :name="step.exampleIcon" :size="14" class="shrink-0 text-stone-900" />
            <span class="truncate font-mono text-chip text-stone-900">{{ step.example }}</span>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
