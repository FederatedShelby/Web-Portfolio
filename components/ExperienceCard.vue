<template>
  <div class="card-main" @mouseenter="onCardMouseEnter" @mouseleave="onCardMouseLeave">
    <!-- top of card -->
    <div class="card-top">
      <span class="title">{{ title }}</span>
      <span class="date-range">{{ startDate }} ~ {{ endDate }}</span>
    </div>
    <!-- employer info -->
    <div class="card-middle">
      <div class="employer">- {{ employer }}</div>
      <div class="expand-lock-btn" @click="onClickExpandBtn">
        <IconLock :is-locked="keepExpanded" />
      </div>
    </div>
    <!-- bottom of card (expandable) -->
    <div
      class="card-bottom"
      :class="`${ isExpanded ? 'expanded' : '' }`">
      <ul class="responsibilities-textlist">
        <li
          v-for="item in responsibilities"
          :key="item"
        >{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// components
import IconLock from '~/components/IconLock.vue';

export default {
  name: 'ExperienceCard',
  components: {
    IconLock,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    employer: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    responsibilities: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      isExpanded: false,
      keepExpanded: false,
    };
  },
  methods: {
    onCardMouseEnter() {
      this.isExpanded = true;
    },
    onCardMouseLeave() {
      if (!this.keepExpanded) {
        this.isExpanded = false;
      }
    },
    onClickExpandBtn() {
      this.keepExpanded = !this.keepExpanded;
    },
  }
};
</script>

<style lang="sass" scoped>
@import '~/styles/_ExperienceCard.sass'
</style>