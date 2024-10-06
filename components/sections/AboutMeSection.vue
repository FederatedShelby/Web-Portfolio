<template>
  <section id="aboutme" class="aboutme">
    <!-- section contents -->
    <div class="aboutme__contents">
      <!-- intro text content -->
      <div class="intro-container">
        <!-- profile image -->
        <div
          class="intro__profile-picture"
          style="background-image: url('Shelby_profile_image.svg')"
          data-aos="fade-up"
          data-aos-once="true"
        />
        <!-- introduction text -->
        <div class="intro__text" data-aos="fade-up" data-aos-once="true">
          <span
            v-for="textObj in introTextList"
            :key="textObj.id"
            :class="textObj.weight === 1 ? 'font-normal' : 'font-thin'"
            >{{ textObj.text }}</span
          >
        </div>
        <div
          class="intro__buttons"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <button class="button-resume" @click="onClickViewResume">
            {{ buttonResumeText }}
          </button>
          <button class="button-talk" @click="onClickLetsTalk">
            {{ buttonTalkText }}
          </button>
        </div>
      </div>
    </div>
    <!-- TODO: socials (email, linkedin, github) -->
  </section>
</template>

<script>
// data variables
import { aboutmeData } from '~/data/sections/aboutme';

export default {
  name: 'AboutMeComponent',
  data() {
    return {
      introTextList: aboutmeData.introTextList,
      buttonResumeText: aboutmeData.buttonResumeText,
      buttonTalkText: aboutmeData.buttonTalkText,
      resumeGoogleDocsLink: aboutmeData.resumeGoogleDocsLink,
    };
  },
  methods: {
    onClickViewResume() {
      window.open(this.resumeGoogleDocsLink, '_blank', 'noopener noreferrer');
    },
    onClickLetsTalk() {
      window.location.href = 'mailto:nullterra180@gmail.com';
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_AboutMeSection.sass'
</style>
