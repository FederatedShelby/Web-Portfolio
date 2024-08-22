<template>
  <nav class="navbar">
    <div class="navbar__content">
      <!-- left content area of navbar -->
      <div class="navbar__container">
        <img :src="profilePictureSrc" class="navbar__profile-picture" />
        <span class="navbar__profile-text">{{ profileText }}</span>
      </div>
      <!-- right content area of navbar -->
      <div class="navbar__container">
        <a
          v-for="category in categories"
          :key="category.id"
          :href="category.href"
          class="navbar__button"
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
  data() {
    return {
      profilePictureSrc: 'Shelby_profile_image.jpeg',
      profileText: 'Samuel Sohn',
    };
  },
  methods: {
    scrollTo(target) {
      VueScrollTo.scrollTo(target, 500, {
        easing: 'ease-in-out',
        offset: -66,
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_Navbar.sass'
</style>
