<template>
  <div id="Main">
    <!-- landing page -->
    <Home />
    <!-- navbar component -->
    <Navbar />
    <!-- sections -->
    <AboutMe />
    <Experience />
    <Certifications />
    <Projects />
    <Contact />
    <!-- caret to scroll to home section -->
    <CaretUp />
    <!-- footer -->
    <FooterComponent />
  </div>
</template>

<script>
// libraries
import Vue from 'vue';
import AOS from 'aos';

// components
import Navbar from '~/components/Navbar.vue';
import CaretUp from '~/components/CaretUp.vue';
import FooterComponent from '~/components/Footer.vue';

// page sections
import Home from '~/components/sections/HomeSection.vue';
import AboutMe from '~/components/sections/AboutMeSection.vue';
import Experience from '~/components/sections/ExperienceSection.vue';
import Certifications from '~/components/sections/CertificationsSection.vue';
import Projects from '~/components/sections/ProjectsSection.vue';
import Contact from '~/components/sections/ContactSection.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
    CaretUp,
    FooterComponent,
    Home,
    AboutMe,
    Experience,
    Certifications,
    Projects,
    Contact,
  },
  mounted() {
    AOS.init();
  },
});
</script>

<style lang="css">
@import 'aos/dist/aos.css';
</style>
