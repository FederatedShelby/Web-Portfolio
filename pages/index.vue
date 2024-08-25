<template>
  <div>
    <section class="min-h-screen flex flex-col items-center justify-center">
      <div class="text-5xl flex flex-col items-center">
        <span class="text-white"
          >{{ mainTextIntroTop }}
          <span class="text-blue-400">{{ mainTextName }}</span
          >.
        </span>
        <span class="text-white mt-3">{{ mainTextIntroBottom }}</span>
      </div>
    </section>

    <ThreeBackground />

    <Navbar :categories="categories" />

    <AboutMe />

    <Experience />

    <Certifications />

    <Projects />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import Navbar from '~/components/Navbar.vue';
import ThreeBackground from '~/components/ThreeBackground.vue';

// page sections
import AboutMe from '~/components/sections/AboutMeSection.vue';
import Experience from '~/components/sections/ExperienceSection.vue';
import Certifications from '~/components/sections/CertificationsSection.vue';
import Projects from '~/components/sections/ProjectsSection.vue';

// data variables
import { appData } from '~/data/app';
import { navbarData } from '~/data/navbar';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
    ThreeBackground,
    AboutMe,
    Experience,
    Certifications,
    Projects,
  },
  data() {
    return {
      mainTextIntroTop: appData.mainTextIntroTop,
      mainTextName: appData.mainTextName,
      mainTextIntroBottom: appData.mainTextIntroBottom,
      categories: navbarData.categories,
    };
  },
});
</script>
