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
            class="w-6 h-6"
            :class="{
              'text-grey-600': !isNavbarAtTop,
              'text-white': isNavbarAtTop,
            }"
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
// libraries
import VueScrollTo from 'vue-scrollto';

// data variables
import { navbarData } from '~/data/navbar';

export default {
  name: 'NavbarComponent',
  data() {
    return {
      profileText: navbarData.profileText,
      categories: navbarData.categories,
      isDropdownMenuOpen: false,
      // minimum window.scrollY value when navbar is at the top of the page
      scrollThreshold: 724,
      // true if navbar is at the top of the page, based on scrollThreshold value
      isNavbarAtTop: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
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
      if (this.isNavbarAtTop) {
        this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
      }
    },
    handleScroll() {
      this.isNavbarAtTop = window.scrollY >= this.scrollThreshold;
      if (!this.isNavbarAtTop) {
        this.isDropdownMenuOpen = false;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_Navbar.sass'
</style>
