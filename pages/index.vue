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
    <!-- footer -->
    <FooterComponent />
  </div>
</template>

<script>
import Vue from 'vue';

// components
import Navbar from '~/components/Navbar.vue';
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
    FooterComponent,
    Home,
    AboutMe,
    Experience,
    Certifications,
    Projects,
    Contact,
  },
});
</script>
