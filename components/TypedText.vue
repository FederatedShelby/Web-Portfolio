<template>
  <div class="typed-text-container">
    <!-- Top line text rendering -->
    <VueTyper
      id="TypedTextTop"
      :text="topText"
      :pre-type-delay="topDelay"
      :repeat="0"
      caret-animation="blink"
    />
    <!-- Bottom line text rendering -->
    <div class="text-bottom">
      <!-- Fixed text -->
      <VueTyper
        id="TypedTextBottomFixed"
        :text="bottomFixedText"
        :pre-type-delay="bottomFixedDelay"
        :repeat="0"
        caret-animation="blink"
      />
      <!-- Repeated text -->
      <VueTyper
        id="TypedTextBottomRepeat"
        :text="bottomRepeatText"
        :pre-type-delay="preTypeDelayRepeat"
        caret-animation="blink"
        erase-style="backspace"
        :erase-delay="bottomEraseDelay"
        @typed="onTyped"
      />
    </div>
  </div>
</template>

<script>
// libraries
// DOCS: https://www.npmjs.com/package/vue-typer#props
import { VueTyper } from 'vue-typer';

// data variables
import { homeData } from '~/data/sections/home';

export default {
  name: 'TypedText',
  components: {
    VueTyper,
  },
  data() {
    return {
      // top typed text
      topText: homeData.typedText.topFixed.text,
      topDelay: homeData.typedText.topFixed.preTypeDelay,
      // bottom fixed text
      bottomFixedText: homeData.typedText.bottomFixed.text,
      bottomFixedDelay: homeData.typedText.bottomFixed.preTypeDelay,
      // bottom repeated text
      bottomRepeatText: homeData.typedText.bottomRepeat.text,
      bottomRepeatDelay: homeData.typedText.bottomRepeat.preTypeDelay,
      bottomEraseDelay: homeData.typedText.bottomRepeat.eraseDelay,
      isTypingFirstRepeatString: true,
    };
  },
  computed: {
    preTypeDelayRepeat() {
      return this.isTypingFirstRepeatString ? this.bottomRepeatDelay : 0;
    },
  },
  methods: {
    onTyped() {
      if (this.isTypingFirstRepeatString)
        this.isTypingFirstRepeatString = false;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_TypedText.sass'
</style>
