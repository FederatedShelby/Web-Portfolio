<template>
  <section id="skills" class="skills">
    <!-- section contents -->
    <div class="skills_contents">
      <div class="label_main">Skills</div>
      <div class="area-categories">
        <div
          v-for="category in categories"
          :key="category.id"
          class="area-category"
        >
          <span class="label_category">{{ category.name }}</span>
          <span
            v-for="skill in category.skillsList"
            :key="skill"
            class="label_skill"
            >{{ skill }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// data variables
import { skillsData } from '~/data/sections/skills';

export default {
  name: 'SkillsComponent',
  data() {
    return {
      categories: skillsData.categoriesList,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_SkillsSection.sass'
</style>
