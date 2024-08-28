<template>
  <section id="aboutme" class="aboutme">
    <!-- section title -->
    <h2 class="title">
      {{ sectionTitle }}
      <div class="title-decoration" />
    </h2>
    <!-- section contents -->
    <div class="aboutme__contents">
      <!-- intro text content (left side in non-mobile) -->
      <div class="intro-container">
        <!-- main introduction content -->
        <!-- TODO: replace img src -->
        <img src="Shelby_profile_image.jpeg" class="intro__profile-picture" />
        <div class="intro__text-top">{{ introTextTop }}</div>
        <!-- real world capabilities content -->
        <div class="intro__subsection-title">
          {{ subsectionTitle }}
        </div>
        <div class="intro__subsection-text">{{ subsectionText }}</div>
        <!-- button to open resumé Google Docs link in new tab -->
        <button class="button-resume" @click="onClickViewResume">
          {{ buttonResumeText }}
        </button>
      </div>
      <!-- skills content (right side in non-mobile) -->
      <div class="skills-container">
        <div class="skills-title">{{ skillsTitle }}</div>
        <div class="skills-cards-list">
          <div v-for="skill in skills" :key="skill.id" class="skills-card">
            <div class="skills-card__image-container">
              <img :src="skill.src" class="skills-card__image" />
            </div>
            <div class="skills-card__text-container">
              <div class="skills-card__skill-name">
                {{ skill.text }}
              </div>
              <div class="skills-card__skill-yoe">
                <span class="text-blue-400">{{
                  skill.yearsOfExperience.toString()
                }}</span>
                {{ yearsOfExperienceText }}
              </div>
            </div>
          </div>
        </div>
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
      introTextTop: aboutmeData.introTextTop,
      subsectionText: aboutmeData.subsectionText,
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
