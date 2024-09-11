// Data used to populate Navbar component
export const CATEGORIES_INDEX_ABOUTME: number = 0;
export const CATEGORIES_INDEX_EXPERIENCE: number = 1;
export const CATEGORIES_INDEX_CERTIFICATIONS: number = 2;
export const CATEGORIES_INDEX_PROJECTS: number = 3;
export const CATEGORIES_INDEX_CONTACT: number = 4;

export const navbarData: any = Object.freeze({
  // PATH:  components > Navbar.vue
  // USAGE: populating navbar text (left)
  profileText: 'Samuel Sohn',
  // USAGE: populating navbar section buttons
  categories: [
    {
      id: 1,
      name: 'About Me',
      href: '#aboutme',
      scrollToId: 'aboutme',
    },
    {
      id: 2,
      name: 'Experience',
      href: '#experience',
      scrollToId: 'experience',
    },
    {
      id: 3,
      name: 'Certifications',
      href: '#certifications',
      scrollToId: 'certifications',
    },
    {
      id: 4,
      name: 'Projects',
      href: '#projects',
      scrollToId: 'projects',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
      scrollToId: 'contact',
    },
  ],
});
