<template>
  <section id="skills" class="skills">
    <!-- section contents -->
    <div class="skills_contents">
      <div class="label_main" data-aos="fade-up" data-aos-once="true">
        {{ sectionTitle }}
      </div>
      <div class="area-categories">
        <div
          v-for="(category, cIndex) in categories"
          :key="category.id"
          class="area-category"
          data-aos="fade-right"
          data-aos-once="true"
          :data-aos-delay="cIndex * 100"
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
import { navbarData, CATEGORIES_INDEX_SKILLS } from '~/data/navbar';
import { skillsData } from '~/data/sections/skills';

export default {
  name: 'SkillsComponent',
  data() {
    return {
      sectionTitle: navbarData.categories[CATEGORIES_INDEX_SKILLS].name,
      categories: skillsData.categoriesList,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_SkillsSection.sass'
</style>
