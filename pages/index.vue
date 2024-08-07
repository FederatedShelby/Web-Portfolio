<template>
  <div>
    <Navbar />

    <section
      id="home"
      class="min-h-screen flex items-center justify-center bg-red-500"
    >
      <h1 class="text-4xl">Home Section</h1>
    </section>

    <section
      id="projects"
      class="min-h-screen flex items-center justify-center bg-blue-500"
    >
      <h1 class="text-4xl">Projects Section</h1>
    </section>

    <section
      id="skills"
      class="min-h-screen flex items-center justify-center bg-green-500"
    >
      <h1 class="text-4xl">Skills Section</h1>
    </section>

    <section
      id="contact"
      class="min-h-screen flex items-center justify-center bg-yellow-500"
    >
      <h1 class="text-4xl">Contact Section</h1>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '~/components/Navbar.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
  },
});
</script>
