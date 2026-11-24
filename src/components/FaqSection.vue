<script setup lang="ts">
import { ref } from 'vue'

import Icon from './UiIcon.vue'

const questions = [
  {
    question: 'What is Kira URL?',
    answer:
      'A small tool for making long URLs shorter and easier to share. Paste a link, shorten it, and take it wherever you like. That’s the whole idea.',
  },
  {
    question: 'Do I need to create an account?',
    answer:
      'No. Paste a link and you get a short one straight away. There is no sign-up and nothing to install.',
  },
  {
    question: 'Does my link still go to the same place?',
    answer:
      'Yes. A Kira URL is just a shorter name for the destination you already had. Nothing about the original address changes.',
  },
  {
    question: 'What’s the story behind this project?',
    answer:
      'A personal project, made with a little curiosity, for anyone who has ever pasted an unreadable link into a chat and regretted it.',
  },
]

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faqs" class="py-[88px]">
    <div class="mx-auto grid max-w-[1248px] gap-12 lg:grid-cols-[400px_1fr] lg:gap-[110px]">
      <div>
        <p class="font-mono text-eyebrow uppercase text-stone-500">A few small details</p>
        <h2 class="mt-4 text-section text-stone-900">
          Short answers.<br />
          Of course.
        </h2>
        <p class="mt-5 max-w-[320px] text-body text-stone-500">
          A little clarity before your next click.
        </p>
      </div>

      <div>
        <div
          v-for="(item, index) in questions"
          :key="item.question"
          class="border-b border-stone-200"
        >
          <h3>
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 py-[23px] text-left text-question font-medium text-stone-900 transition-colors hover:text-stone-500"
              :aria-expanded="openIndex === index"
              @click="toggle(index)"
            >
              <span>{{ item.question }}</span>
              <Icon
                :name="openIndex === index ? 'minus' : 'plus'"
                :size="18"
                class="shrink-0 text-stone-900"
              />
            </button>
          </h3>
          <p v-if="openIndex === index" class="pb-[23px] text-body text-stone-500">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
