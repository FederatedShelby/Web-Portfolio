<template>
  <div
    class="click-area"
    data-aos="fade-down"
    data-aos-delay="3000"
    data-aos-duration="2000"
    @click="handleClick"
  >
    <div class="caret-container">
      <img
        src="caret-down.svg"
        width="24"
        height="24"
        class="caret-img"
        alt="caret-down"
      />
    </div>
  </div>
</template>

<script>
// libraries
import VueScrollTo from 'vue-scrollto';
// data variables
import { navbarData } from '~/data/navbar';

export default {
  name: 'CaretDown',
  data() {
    return {
      firstSectionHref: navbarData.categories[0].href || '',
    };
  },
  methods: {
    handleClick() {
      VueScrollTo.scrollTo(this.firstSectionHref, 500, {
        easing: 'ease-in-out',
        offset: -44,
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_CaretDown.sass'
</style>
