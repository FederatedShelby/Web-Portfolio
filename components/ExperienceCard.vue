<template>
  <div class="card-main">
    <!-- top of card -->
    <div class="card-top">
      <span class="title">{{ title }}</span>
      <span class="date-range">{{ startDate }} ~ {{ endDate }}</span>
    </div>
    <!-- employer info -->
    <div class="card-middle">
      <div class="employer">- {{ employer }}</div>
      <button @click="onClickExpandBtn">
        <p>{{ isExpanded ? 'OPEN' : 'SHUT' }}</p>
      </button>
    </div>
    <!-- bottom of card (expandable) -->
    <div v-show="isExpanded" class="card-bottom">
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
export default {
  name: 'ExperienceCard',
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
    };
  },
  methods: {
    onClickExpandBtn() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~/styles/_ExperienceCard.sass'
</style>