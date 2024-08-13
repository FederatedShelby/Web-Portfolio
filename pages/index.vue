<template>
  <div>
    <section class="min-h-screen flex flex-col items-center justify-center">
      <div class="text-5xl flex flex-col items-center">
        <span class="text-white"
          >{{ mainTextIntroTop }}
          <span class="text-blue-400">{{ mainTextName }}</span
          >.
        </span>
        <span class="text-white mt-3">{{ mainTextIntroBottom }}</span>
      </div>
    </section>

    <ThreeBackground />

    <Navbar :categories="categories" />

    <AboutMe />

    <section
      v-for="category in categories.slice(1)"
      :id="category.scrollToId"
      :key="category.id"
      class="min-h-screen flex items-center justify-center"
    >
      <h1 class="text-4xl">{{ category.name }}</h1>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import Navbar from '~/components/Navbar.vue';
import ThreeBackground from '~/components/ThreeBackground.vue';
// page sections
import AboutMe from '~/components/sections/AboutMeSection.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
    ThreeBackground,
    AboutMe,
  },
  data() {
    return {
      mainTextIntroTop: "Hello there, I'm",
      mainTextName: 'Samuel',
      mainTextIntroBottom: 'I can fulfill your AI needs.',
      categories: [
        {
          id: 1,
          name: 'About Me',
          href: '#aboutme',
          scrollToId: 'aboutme',
        },
        {
          id: 2,
          name: 'Experience',
          href: '#experience',
          scrollToId: 'experience',
        },
        {
          id: 3,
          name: 'Projects',
          href: '#projects',
          scrollToId: 'projects',
        },
      ],
    };
  },
});
</script>
