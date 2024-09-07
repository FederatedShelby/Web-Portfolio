<template>
  <div class="toggle-container" @click="toggleDarkMode">
    <!-- icon -->
    <img
      v-if="isDarkMode"
      :src="darkModeIconSrc"
      height="18"
      width="18"
      alt="dark mode icon"
      loading="lazy"
      class="toggle-icon__dark-mode"
    />
    <img
      v-else
      :src="lightModeIconSrc"
      height="18"
      width="18"
      alt="light mode icon"
      loading="lazy"
      class="toggle-icon__light-mode"
    />
    <!-- text -->
    <span class="toggle-text">{{ toggleText }}</span>
  </div>
</template>

<script>
// libraries
import { mapState, mapActions } from 'vuex';

export default {
  name: 'DarkModeToggle',
  data() {
    return {
      darkModeIconSrc: 'icon-moon.svg',
      lightModeIconSrc: 'icon-sun.svg',
    };
  },
  computed: {
    ...mapState({
      isDarkMode: (state) => state.isDarkMode,
    }),
    toggleText() {
      return this.isDarkMode ? 'Dark' : 'Light';
    },
  },
  watch: {
    isDarkMode: {
      handler() {
        this.applyDarkClass();
      },
      immediate: true,
    },
  },
  mounted() {
    this.applyDarkClass();
  },
  methods: {
    ...mapActions(['toggleDarkMode']),
    applyDarkClass() {
      const mainElement = document.getElementById('Main');
      if (this.isDarkMode) {
        mainElement?.classList.add('dark');
      } else {
        mainElement?.classList.remove('dark');
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_DarkModeToggle.sass'
</style>
