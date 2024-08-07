<template>
  <nav class="fixed w-full bg-white shadow">
    <div class="container mx-auto px-4 py-2 flex justify-between">
      <a
        href="#"
        class="px-3 py-2 text-gray-800 bg-red-500"
        @click.prevent="scrollTo('home')"
        >Home</a
      >
      <a
        href="#"
        class="px-3 py-2 text-gray-800 bg-blue-500"
        @click.prevent="scrollTo('projects')"
        >Projects</a
      >
      <a
        href="#"
        class="px-3 py-2 text-gray-800 bg-green-500"
        @click.prevent="scrollTo('skills')"
        >Skills</a
      >
      <a
        href="#"
        class="px-3 py-2 text-gray-800 bg-yellow-500"
        @click.prevent="scrollTo('contact')"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  name: 'NavbarComponent',
  methods: {
    scrollTo(target) {
      VueScrollTo.scrollTo(`#${target}`, 500, {
        easing: 'ease-in-out',
        offset: -50, // Adjust the offset value to account for fixed navbar
      });
    },
  },
};
</script>
