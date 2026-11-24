<script setup lang="ts">
import illustration from '@/assets/link-illustration.png'
</script>

<template>
  <section class="mx-auto max-w-[1248px] pt-[74px] pb-[58px]">
    <div class="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
      <div class="flex flex-col gap-6 lg:mt-[25px] lg:w-[700px]">
        <p class="flex items-center gap-2 font-mono text-eyebrow uppercase text-stone-500">
          <span class="size-[7px] rounded-full bg-stone-900" aria-hidden="true" />
          A little less link. A little more you.
        </p>

        <h1 class="text-hero text-stone-900">
          Long story.<br />
          Short link.
        </h1>

        <p class="max-w-[500px] text-body text-stone-500">
          Turn unwieldy URLs into neat little links. Easy to share, nice to look at, and ready to go
          wherever you do.
        </p>
      </div>

      <figure class="relative h-[350px] w-full max-w-[500px] lg:ml-auto">
        <img
          :src="illustration"
          alt="A sculptural chain link next to Kira's portrait"
          class="block w-full"
          width="500"
          height="308"
        />
        <figcaption
          class="absolute bottom-[21px] left-6 flex items-center gap-2 font-mono text-eyebrow uppercase text-stone-500"
        >
          <span class="h-px w-7 bg-stone-500" aria-hidden="true" />
          Less, but better.
        </figcaption>
      </figure>
    </div>
  </section>
</template>
