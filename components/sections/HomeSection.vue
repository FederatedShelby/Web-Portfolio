<template>
  <section id="home" class="home">
    <!-- background image -->
    <ThreeBackground />
    <!-- center typed text component -->
    <TypedText />
    <!-- caret to scroll to first section component -->
    <CaretDown />
  </section>
</template>

<script>
// components
import ThreeBackground from '~/components/ThreeBackground.vue';
import TypedText from '~/components/TypedText.vue';
import CaretDown from '~/components/CaretDown.vue';

export default {
  name: 'HomeComponent',
  components: {
    ThreeBackground,
    TypedText,
    CaretDown,
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_HomeSection.sass'
</style>
