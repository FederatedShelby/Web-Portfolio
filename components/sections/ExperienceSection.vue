<template>
  <section id="experience" class="experience">
    <!-- section title -->
    <h2 class="title">
      {{ sectionTitle }}
      <div class="title-decoration" />
    </h2>
    <!-- experience area -->
    <div class="experience-cards-list">
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
export default {
  name: 'ExperienceComponent',
  data() {
    return {
      sectionTitle: 'Experience',
      experienceList: [
        {
          id: 1,
          roleTitle: 'Intern',
          employerName: 'Pulzze Systems, Inc',
          startDate: 'March 2018',
          endDate: 'August 2018',
          responsibilitiesList: [],
        },
        {
          id: 2,
          roleTitle: 'Product Engineer',
          employerName: 'Pulzze Systems, Inc',
          startDate: 'August 2018',
          endDate: 'December 2019',
          responsibilitiesList: [],
        },
        {
          id: 3,
          roleTitle: 'Frontend Developer',
          employerName: 'Alchera',
          startDate: 'January 2020',
          endDate: 'July 2023',
          responsibilitiesList: [],
        },
        {
          id: 4,
          roleTitle: 'Product Engineer',
          employerName: 'Alchera',
          startDate: 'January 2020',
          endDate: 'July 2023',
          responsibilitiesList: [],
        },
        {
          id: 5,
          roleTitle: 'MLOps Engineer',
          employerName: 'Alchera',
          startDate: 'August 2023',
          endDate: 'May 2024',
          responsibilitiesList: [],
        },
      ],
    };
  },
  computed: {
    reversedExperienceList() {
      return this.experienceList.slice().reverse();
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_ExperienceSection.sass'
</style>
