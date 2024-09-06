<template>
  <section class="min-h-screen flex flex-col items-center justify-center">
    <!-- background image -->
    <ThreeBackground />
    <!-- center typed text component -->
    <TypedText />
    <!-- left slide component -->
    <!-- TODO: create component that slides up and displays github/linkedin/email icons -->
    <!-- right slide component -->
    <!-- TODO: create component  -->
    <!-- bottom caret component -->
    <!-- TODO: create delayed clickable caret to automatically scroll to About Me -->
  </section>
</template>

<script>
// components
import ThreeBackground from '~/components/ThreeBackground.vue';
import TypedText from '~/components/TypedText.vue';

export default {
  name: 'HomeComponent',
  components: {
    ThreeBackground,
    TypedText,
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_HomeSection.sass'
</style>
