<template>
  <div class="footer">
    <div class="navlinks-container">
      <img
        v-for="link in navLinks"
        :key="link.id"
        height="20"
        width="20"
        :src="isDarkMode ? link.iconSrcDark : link.iconSrcLight"
        loading="lazy"
        class="navlink"
        @click="onClickNavLink(link)"
      />
    </div>
    <a class="copyright-txt" :href="portfolioLink" target="_blank">{{
      copyrightText
    }}</a>
  </div>
</template>

<script>
// libraries
import { mapState } from 'vuex';
// data variables
import { footerData } from '~/data/footer';

export default {
  name: 'FooterComponent',
  data() {
    return {
      navLinks: footerData.navLinks,
      copyrightText: footerData.copyrightText,
      portfolioLink: footerData.portfolioLink,
    };
  },
  computed: {
    ...mapState({
      isDarkMode: (state) => state.isDarkMode,
    }),
  },
  methods: {
    onClickNavLink(navlink) {
      if (navlink.name === 'email') {
        window.location.href = navlink.redirectLink;
      } else {
        window.open(navlink.redirectLink, '_blank', 'noopener noreferrer');
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/_Footer.sass'
</style>
