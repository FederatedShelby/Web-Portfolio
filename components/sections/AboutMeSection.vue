<template>
  <section id="aboutme" class="aboutme">
    <!-- section title -->
    <h2 class="aboutme__title">
      {{ sectionTitle }}
      <div class="aboutme__title__decoration" />
    </h2>
    <!-- section contents -->
    <div class="aboutme__contents">
      <!-- intro text content (left side in non-mobile) -->
      <div class="aboutme__intro-container">
        <!-- main introduction content -->
        <!-- TODO: replace img src -->
        <img
          src="Shelby_profile_image.jpeg"
          class="aboutme__intro__profile-picture"
        />
        <div class="aboutme__intro__text-top">{{ introTextTop }}</div>
        <!-- real world capabilities content -->
        <div class="aboutme__intro__subsection-title">
          {{ subsectionTitle }}
        </div>
        <div class="aboutme__intro__subsection-text">{{ subsectionText }}</div>
        <!-- button to open resumé Google Docs link in new tab -->
        <button class="aboutme__button-resume" @click="onClickViewResume">
          {{ buttonResumeText }}
        </button>
      </div>
      <!-- skills content (right side in non-mobile) -->
      <div class="aboutme__skills-container">
        <div class="aboutme__skills-title">{{ skillsTitle }}</div>
        <div class="aboutme__skills-cards-list">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="aboutme__skills-card"
          >
            <div class="aboutme__skills-card__image-container">
              <img :src="skill.src" class="aboutme__skills-card__image" />
            </div>
            <div class="aboutme__skills-card__text-container">
              <div class="aboutme__skills-card__skill-name">
                {{ skill.text }}
              </div>
              <div class="aboutme__skills-card__skill-yoe">
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
export default {
  name: 'AboutMeComponent',
  data() {
    return {
      sectionTitle: 'About Me',
      subsectionTitle: 'Real-world Capabilities',
      introTextTop:
        "Greetings, my name is Samuel Sohn, a frontend web developer transitioning into an MLOps role. I'm passionate about merging my frontend expertise with AI and DevOps to build innovative, scalable solutions.",
      subsectionText:
        'I excel at building products that leverage AI to further human interest. My skills lie in crafting intuitive and well-designed interfaces and I am currently cultivating skills to automate the production pipeline of AI models.',
      buttonResumeText: 'View Resumé',
      resumeGoogleDocsLink:
        'https://docs.google.com/document/d/1GN6Ip5lOVVcvWyrBQSZdS6mzpYP9y0INtjZ0abHtg3s/edit?usp=sharing',
      skillsTitle: 'Frontend Skills',
      yearsOfExperienceText: 'Years of Exp.',
      skills: [
        {
          id: 1,
          text: 'HTML',
          src: 'logo-html.svg',
          yearsOfExperience: 5,
        },
        {
          id: 2,
          text: 'CSS',
          src: 'logo-css.svg',
          yearsOfExperience: 5,
        },
        {
          id: 3,
          text: 'Vue.js',
          src: 'logo-vue.svg',
          yearsOfExperience: 5,
        },
        {
          id: 4,
          text: 'JavaScript',
          src: 'logo-javascript.svg',
          yearsOfExperience: 5,
        },
        {
          id: 5,
          text: 'SASS',
          src: 'logo-sass.svg',
          yearsOfExperience: 3,
        },
      ],
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
