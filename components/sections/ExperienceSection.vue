<template>
  <section id="experience" class="experience">
    <!-- section title -->
    <h2 class="title" data-aos="flip-up">
      {{ sectionTitle }}
      <div class="title-decoration" />
    </h2>
    <!-- experience area -->
    <div class="experience-cards-list" data-aos="fade-up" data-aos-once="true">
      <!-- experience cards -->
      <div
        v-for="exp in reversedExperienceList"
        :key="exp.id"
        class="experience-card"
      >
        <!-- experience card text container -->
        <div class="card__text-container">
          <div class="card-text--role-title">{{ exp.roleTitle }}</div>
          <div class="card-text--employer-name">
            {{ '@ ' + exp.employerName }}
          </div>
          <div class="card-text--date-range">
            {{ exp.startDate + ' ~ ' + exp.endDate }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// data variables
import { navbarData, CATEGORIES_INDEX_EXPERIENCE } from '~/data/navbar';
import { experienceData } from '~/data/sections/experience';

export default {
  name: 'ExperienceComponent',
  data() {
    return {
      sectionTitle: navbarData.categories[CATEGORIES_INDEX_EXPERIENCE].name,
    };
  },
  computed: {
    reversedExperienceList() {
      return experienceData.experienceList.slice().reverse();
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_ExperienceSection.sass'
</style>
