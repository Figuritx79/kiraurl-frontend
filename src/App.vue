<script setup lang="ts">
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ShortenerCard from './components/ShortenerCard.vue'
import PrinciplesRow from './components/PrinciplesRow.vue'
import HowItWorks from './components/HowItWorks.vue'
import FaqSection from './components/FaqSection.vue'
import ClosingFooter from './components/ClosingFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-stone-50 text-stone-900">
    <SiteNav />

    <main>
      <HeroSection />
      <ShortenerCard />
      <PrinciplesRow />
      <HowItWorks />
      <FaqSection />
    </main>

    <ClosingFooter />
  </div>
</template>
