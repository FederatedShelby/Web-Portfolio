<template>
  <section
    id="projects"
    class="w-full flex flex-col items-center justify-around bg-transparent"
  >
    <!-- section title -->
    <h2 class="text-5xl text-white m-4">
      Projects
      <div class="h-[4px] w-full bg-blue-200" />
    </h2>
    <!-- projects area -->
    <div class="w-full p-4 flex flex-col">
      <!-- projects base component -->
      <div v-for="project in projectsList" :key="project.id" class="w-full p-4 flex flex-col gap-1">
        <!-- project image container -->
        <div class="h-[400px] bg-slate-100">
          <img :src="project.imgSrc" class="h-full" />
        </div>
        <!-- project title -->
        <div class="text-4xl text-white">{{ project.title }}</div>
        <!-- project skills list -->
        <div class="row flex gap-2">
          <div
            v-for="skill in project.skillsList"
            :key="skill"
            class="text-2xl text-white"
          >
            {{ skill }}
          </div>
        </div>
        <!-- deployment, code source links -->
        <div class="row flex gap-2">
          <a
            :href="project.deploymentLink"
            target="_blank"
            class="px-1 text-white border border-lime-400 hover:text-blue-100"
          >View Project</a>
          <a
            :href="project.codeSourceLink"
            target="_blank"
            class="px-1 text-white border border-lime-400 hover:text-blue-100"
          >View Code</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceComponent',
  data() {
    return {
      projectsList: [
        {
          id: 1,
          title: 'Web Portfolio',
          imgSrc: 'logo-html.svg',
          deploymentLink: 'https://www.google.com/',
          codeSourceLink: 'https://www.github.com/',
          skillsList: ['HTML', 'CSS', 'ThreeJS'],
        },
        {
          id: 2,
          title: 'Machine Learning Pipeline',
          imgSrc: 'logo-gcp.svg',
          deploymentLink: 'https://www.google.com/',
          codeSourceLink: 'https://www.github.com/',
          skillsList: ['GCP', 'Python'],
        },
      ],
    };
  },
};
</script>
