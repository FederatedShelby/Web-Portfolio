<template>
  <section
    id="aboutme"
    class="min-h-screen w-full flex flex-col items-center justify-around bg-transparent border-b-black border-b-2"
  >
    <!-- section title -->
    <h2 class="text-5xl text-white m-4">
      About Me
      <div class="h-[4px] w-full bg-blue-200" />
    </h2>
    <!-- section contents -->
    <div class="w-full grid grid-cols-1 p-4 gap-1 md:grid-cols-12">
      <!-- intro text content (left side in non-mobile) -->
      <div
        class="flex flex-col px-5 items-center text-white md:col-start-3 md:col-end-7"
      >
        <!-- main introduction content -->
        <!-- TODO: replace img src -->
        <img src="Shelby_profile_image.jpeg" class="rounded-full h-40 mb-4" />
        <div class="text-2xl mx-auto mb-4">{{ mainIntroText }}</div>
        <!-- real world capabilities content -->
        <div class="text-4xl mx-auto mb-3">Real-world Capabilities</div>
        <div class="text-2xl mx-auto">{{ realWorldCapabilitiesText }}</div>
        <!-- button to open resumé Google Docs link in new tab -->
        <button
          class="my-3 px-2 rounded-full bg-lime-300 text-xl text-slate-500"
          @click="onClickViewResume"
        >
          View Resumé
        </button>
      </div>
      <!-- skills content (right side in non-mobile) -->
      <div
        class="text-2xl flex flex-col justify-center items-center md:col-start-8 md:col-end-11"
      >
        <div class="my-3 text-slate-200 text-4xl italic">Frontend Skills</div>
        <div class="flex flex-col">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="m-2 p-2 flex items-center text-white"
          >
            <div class="h-[80px] w-[80px] p-2 items-center">
              <img :src="skill.src" class="h-full" />
            </div>
            <div class="flex flex-col p-2">
              <div class="text-2xl">{{ skill.text }}</div>
              <div class="text-xl whitespace-nowrap">
                <span class="text-blue-400">{{
                  skill.yearsOfExperience.toString()
                }}</span>
                Years of Experience
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
      mainIntroText:
        "Greetings, my name is Samuel Sohn, a frontend web developer transitioning into an MLOps role. I'm passionate about merging my frontend expertise with AI and DevOps to build innovative, scalable solutions.",
      realWorldCapabilitiesText:
        'I excel at building products that leverage AI to further human interest. My skills lie in crafting intuitive and well-designed interfaces and I am currently cultivating skills to automate the production pipeline of AI models.',
      resumeGoogleDocsLink:
        'https://docs.google.com/document/d/1GN6Ip5lOVVcvWyrBQSZdS6mzpYP9y0INtjZ0abHtg3s/edit?usp=sharing',
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
