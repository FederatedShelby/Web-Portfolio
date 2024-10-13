<template>
  <section id="experience" class="experience">
    <!-- section contents -->
    <div class="experience_contents">
      <div class="label_main" data-aos="fade-up" data-aos-once="true">
        {{ sectionTitle }}
      </div>
      <!-- cards area -->
      <div class="cards-area">
        <ExperienceCard
          v-for="(exp, eIndex) in reversedExperienceList"
          :key="exp.id"
          data-aos="fade-up"
          data-aos-once="true"
          :data-aos-delay="eIndex * 100"
          :title="exp.roleTitle"
          :employer="exp.employerName"
          :start-date="exp.startDate"
          :end-date="exp.endDate"
          :responsibilities="exp.responsibilitiesList"
          class="mb-3"
        />
      </div>
    </div>
  </section>
</template>

<script>
// data variables
import { navbarData, CATEGORIES_INDEX_EXPERIENCE } from '~/data/navbar';
import { experienceData } from '~/data/sections/experience';

// components
import ExperienceCard from '~/components/ExperienceCard.vue';

export default {
  name: 'ExperienceComponent',
  components: {
    ExperienceCard,
  },
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
