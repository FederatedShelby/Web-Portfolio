<template>
  <section id="certifications" class="certifications">
    <!-- section title -->
    <h2 class="certifications__title">
      {{ sectionTitle }}
      <div class="certifications__title__decoration" />
    </h2>
    <!-- certifications area -->
    <div class="certifications__certifications-cards-list">
      <!-- certification cards -->
      <div
        v-for="cert in certificationsList"
        :key="cert.id"
        class="certifications__certifications-card"
      >
        <!-- image container -->
        <div class="certifications__certifications-card__image-container">
          <img
            :src="cert.imageSrc"
            class="certifications__certifications-card__image"
          />
        </div>
        <!-- certification text info -->
        <div class="certifications__certifications-card__text-container">
          <div class="certifications__certifications-card__text-cert-name">
            {{ cert.certificationName }}
          </div>
          <div
            class="certifications__certifications-card__text-cert-date-range"
          >
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
      sectionTitle: 'Certifications',
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

<style lang="sass" scoped>
@import '~/styles/sections/_CertificationsSection.sass'
</style>
