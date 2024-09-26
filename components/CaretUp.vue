<template>
  <div class="caret-bg">
    <div class="click-area" data-aos="zoom-in" @click="handleClick">
      <div class="caret-container">
        <img
          :src="isDarkMode ? 'caret-down__dark.svg' : 'caret-down__light.svg'"
          width="24"
          height="24"
          class="caret-img"
          alt="caret-up"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
// libraries
import VueScrollTo from 'vue-scrollto';
import { mapState } from 'vuex';

export default {
  name: 'CaretUp',
  computed: {
    ...mapState({
      isDarkMode: (state) => state.isDarkMode,
    }),
  },
  methods: {
    handleClick() {
      VueScrollTo.scrollTo('#home', 500, {
        easing: 'ease-in-out',
        offset: -44,
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_CaretUp.sass'
</style>
