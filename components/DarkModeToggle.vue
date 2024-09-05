<template>
  <div class="toggle-container" @click="toggleDarkMode">
    <span v-if="isDarkMode" class="w-6 h-6"> DARK </span>
    <span v-else class="w-6 h-6"> DAY </span>
  </div>
</template>

<script lang="ts">
// libraries
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: 'DarkModeToggle',
  computed: {
    ...mapState({
      isDarkMode: (state: any) => state.isDarkMode,
    }),
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
      const mainElement: HTMLElement | null = document.getElementById('Main');
      if (this.isDarkMode) {
        mainElement?.classList.add('dark');
      } else {
        mainElement?.classList.remove('dark');
      }
    },
  },
});
</script>

<style lang="sass" scoped>
@import '~/styles/_DarkModeToggle.sass'
</style>
