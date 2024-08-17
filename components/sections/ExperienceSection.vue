<template>
  <section
    id="experience"
    class="w-full flex flex-col items-center justify-around bg-transparent"
  >
    <!-- section title -->
    <h2 class="text-5xl text-white m-4">
      Experience
      <div class="h-[4px] w-full bg-blue-200" />
    </h2>
    <!-- experience area -->
    <div class="p-4 flex flex-col relative">
      <!-- experience base component -->
      <div
        v-for="exp in reversedExperienceList"
        :key="exp.id"
        class="flex before:h-[20px] before:w-[20px] before:absolute before:left-[7px] before:rounded-full before:border-2 before:border-blue-400 before:bg-black after:h-[20px] after:w-[20px] after:absolute after:left-[7px] after:bottom-[0px] after:rounded-full after:border-2 after:border-blue-400 after:bg-black"
      >
        <!-- experience container -->
        <div
          class="flex flex-col p-4 pl-8 text-white border-l-2 border-blue-400"
        >
          <div class="text-3xl text-blue-400">{{ exp.roleTitle }}</div>
          <div class="text-2xl">{{ '@ ' + exp.employerName }}</div>
          <div class="text-xl italics text-slate-200">
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
