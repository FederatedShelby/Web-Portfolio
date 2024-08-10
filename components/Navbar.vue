<template>
  <nav class="sticky top-0 w-full bg-[#E9F2F4]">
    <div class="container mx-auto px-4 py-2 flex justify-between">
      <div class="container-md flex justify-between items-center">
        <img src="Shelby_profile_image.jpeg" class="rounded-full h-[50px]" />
        <span class="text-xl">Seong Kyu Sohn | Portfolio</span>
      </div>
      <div class="container-lg flex justify-between">
        <a
          v-for="category in categories"
          :key="category.id"
          :href="category.href"
          class="px-3 py-2 text-gray-800 border-2 hover:bg-lime-400"
          @click="scrollTo(category.href)"
        >
          {{ category.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  name: 'NavbarComponent',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    scrollTo(target) {
      VueScrollTo.scrollTo(target, 500, {
        easing: 'ease-in-out',
        // offset: -66, // Adjust the offset value to account for fixed navbar
      });
    },
  },
};
</script>
