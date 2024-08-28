<template>
  <section id="projects" class="projects">
    <!-- section title -->
    <h2 class="title">
      {{ sectionTitle }}
      <div class="title-decoration" />
    </h2>
    <!-- projects area -->
    <div class="projects-cards-list">
      <!-- projects base component -->
      <div
        v-for="project in projectsList"
        :key="project.id"
        class="project-card"
      >
        <!-- project image container -->
        <div class="card__image-container">
          <img :src="project.imgSrc" class="card__image" />
        </div>
        <!-- project title -->
        <div class="card__title">{{ project.title }}</div>
        <!-- project skills list -->
        <div class="card__skills-list">
          <div
            v-for="skill in project.skillsList"
            :key="skill"
            class="card__skill"
          >
            {{ skill }}
          </div>
        </div>
        <!-- deployment, code source links -->
        <div class="card__links-list">
          <a :href="project.deploymentLink" target="_blank" class="card__link"
            >View Project</a
          >
          <a :href="project.codeSourceLink" target="_blank" class="card__link"
            >View Code</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// data variables
import { navbarData, CATEGORIES_INDEX_PROJECTS } from '~/data/navbar';
import { projectsData } from '~/data/sections/projects';

export default {
  name: 'ExperienceComponent',
  data() {
    return {
      sectionTitle: navbarData.categories[CATEGORIES_INDEX_PROJECTS].name,
      projectsList: projectsData.projectsList,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_ProjectsSection.sass'
</style>
