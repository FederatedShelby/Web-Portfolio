<template>
  <section id="certifications" class="certifications">
    <!-- section title -->
    <h2 class="title">
      {{ sectionTitle }}
      <div class="title-decoration" />
    </h2>
    <!-- certifications area -->
    <div class="certifications-cards-list">
      <!-- certification cards -->
      <div
        v-for="cert in certificationsList"
        :key="cert.id"
        class="certifications-card"
        @click="onClickCertificationCard(cert.certificationLink)"
      >
        <!-- image container -->
        <div class="card__image-container">
          <img
            :src="cert.imageSrc"
            class="card__image"
            height="200"
            width="200"
            loading="lazy"
          />
        </div>
        <!-- certification text info -->
        <div class="card__text-container">
          <div class="card-text--cert-name">
            {{ cert.certificationName }}
          </div>
          <div class="card-text--date-range">
            {{ cert.startDate + ' ~ ' + cert.endDate }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// data variables
import { navbarData, CATEGORIES_INDEX_CERTIFICATIONS } from '~/data/navbar';
import { certificationsData } from '~/data/sections/certifications';

export default {
  name: 'CertificationsComponent',
  data() {
    return {
      sectionTitle: navbarData.categories[CATEGORIES_INDEX_CERTIFICATIONS].name,
      certificationsList: certificationsData.certificationsList,
    };
  },
  methods: {
    onClickCertificationCard(certificationLink) {
      window.open(certificationLink, '_blank', 'noopener noreferrer');
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_CertificationsSection.sass'
</style>
