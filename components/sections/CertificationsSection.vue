<template>
  <section
    id="certifications"
    class="w-full flex flex-col items-center justify-around bg-transparent"
  >
    <!-- section title -->
    <h2 class="text-5xl text-white m-4">
      Certifications
      <div class="h-[4px] w-full bg-blue-200" />
    </h2>
    <!-- certifications area -->
    <div class="w-full p-4 flex justify-center">
      <!-- certification base component -->
      <div
        v-for="cert in certificationsList"
        :key="cert.id"
        class="flex p-2 rounded-md bg-white bg-opacity-30 cursor-pointer"
      >
        <!-- image container -->
        <div class="h-[120px] w-[120px] flex items-center justify-center">
          <img :src="cert.imageSrc" class="h-full" />
        </div>
        <!-- certification text info -->
        <div class="flex flex-col p-2 text-white">
          <div class="text-2xl">{{ cert.certificationName }}</div>
          <div class="text-xl text-slate-100 italic">
            {{ cert.startDate + ' ~ ' + cert.endDate }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CertificationsComponent',
  data() {
    return {
      certificationsList: [
        {
          id: 1,
          certificationName: 'Google Professional Machine Learning Engineer',
          certificationLink: 'https://www.google.com',
          imageSrc: 'logo-gcp.svg',
          startDate: 'August 2024',
          endDate: 'August 2026',
        },
      ],
    };
  },
};
</script>
