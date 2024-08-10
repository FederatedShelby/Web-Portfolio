<template>
  <div>
    <section class="min-h-screen flex items-center justify-center">
      <h1 class="text-4xl">MAIN</h1>
    </section>

    <Navbar :categories="categories" />

    <!-- <div class="h-screen fixed top-0 bg-blue-700"></div> -->

    <section
      v-for="category in categories"
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
import Navbar from '~/components/Navbar.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
  },
  data() {
    return {
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
