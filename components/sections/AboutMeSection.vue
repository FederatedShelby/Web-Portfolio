<template>
  <section id="aboutme" class="aboutme">
    <!-- section title -->
    <h2 class="title" data-aos="flip-up">
      {{ sectionTitle }}
      <div class="title-decoration" />
    </h2>
    <!-- section contents -->
    <div class="aboutme__contents">
      <!-- intro text content (left side in non-mobile) -->
      <div class="intro-container" data-aos="fade-right" data-aos-once="true">
        <!-- main introduction content -->
        <div class="intro__text-top">
          <span
          v-for="textObj in introTopTextList"
          :key="textObj.id"
          :class="textObj.weight === 1 ? 'font-normal' : 'font-thin'"
          >{{ textObj.text }}</span>
        </div>
        <!-- real world capabilities content -->
        <div class="intro__subsection-title">
          {{ subsectionTitle }}
        </div>
        <div class="intro__subsection-text">
          <span
          v-for="textObj in subsectionTextList"
          :key="textObj.id"
          :class="textObj.weight === 1 ? 'font-normal' : 'font-thin'"
          >{{ textObj.text }}</span>
        </div>
        <!-- button to open resumé Google Docs link in new tab -->
        <button class="button-resume" @click="onClickViewResume">
          {{ buttonResumeText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// data variables
import { navbarData, CATEGORIES_INDEX_ABOUTME } from '~/data/navbar';
import { aboutmeData } from '~/data/sections/aboutme';

export default {
  name: 'AboutMeComponent',
  data() {
    return {
      sectionTitle: navbarData.categories[CATEGORIES_INDEX_ABOUTME].name,
      subsectionTitle: aboutmeData.subsectionTitle,
      introTopTextList: aboutmeData.introTopTextList,
      subsectionTextList: aboutmeData.subsectionTextList,
      buttonResumeText: aboutmeData.buttonResumeText,
      resumeGoogleDocsLink: aboutmeData.resumeGoogleDocsLink,
      skillsTitle: aboutmeData.skillsTitle,
      yearsOfExperienceText: aboutmeData.yearsOfExperienceText,
      skills: aboutmeData.skills,
    };
  },
  methods: {
    onClickViewResume() {
      window.open(this.resumeGoogleDocsLink, '_blank', 'noopener noreferrer');
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_AboutMeSection.sass'
</style>
