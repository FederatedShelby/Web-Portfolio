<template>
  <img
    :src="getImgSrcPath"
    width="18"
    height="18"
    alt="lock-icon"
    loading="lazy"
  />
</template>

<script>
// libraries
import { mapState } from 'vuex';

export default {
  name: 'IconLock',
  props: {
    isLocked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      isDarkMode: (state) => state.isDarkMode,
    }),
    getImgSrcPath() {
      if (this.isLocked) {
        return this.isDarkMode ? 'icon-lock__dark.svg' : 'icon-lock__light.svg';
      }
      return this.isDarkMode
        ? 'icon-unlock__dark.svg'
        : 'icon-unlock__light.svg';
    },
  },
};
</script>
