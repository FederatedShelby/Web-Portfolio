<template>
  <nav class="navbar">
    <div class="navbar__content">
      <!-- left content area of navbar -->
      <div class="navbar__container">
        <span class="navbar__profile-text">{{ profileText }}</span>
      </div>
      <!-- right content area of navbar for desktop-->
      <div class="navbar__container--right">
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
      <!-- right content clickable menu dropdown icon (mobile) -->
      <div class="navbar__container--right-mobile">
        <button @click.exact="toggleMenu">
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <!-- dropdown menu (mobile) -->
      <div v-if="isDropdownMenuOpen" class="navbar__dropdown">
        <a
          v-for="category in categories"
          :key="category.id"
          :href="category.href"
          class="navbar__dropdown-item"
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
      isDropdownMenuOpen: false,
    };
  },
  methods: {
    scrollTo(target) {
      VueScrollTo.scrollTo(target, 500, {
        easing: 'ease-in-out',
        offset: -44,
      });
      if (this.isDropdownMenuOpen) this.toggleMenu();
    },
    toggleMenu() {
      this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_Navbar.sass'
</style>
