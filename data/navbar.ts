// Data used to populate Navbar component
export const CATEGORIES_INDEX_ABOUTME: number = 0;
export const CATEGORIES_INDEX_SKILLS: number = 1;
export const CATEGORIES_INDEX_EXPERIENCE: number = 2;
export const CATEGORIES_INDEX_CERTIFICATIONS: number = 3;
export const CATEGORIES_INDEX_PROJECTS: number = 4;
export const CATEGORIES_INDEX_CONTACT: number = 5;

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
      name: 'Skills',
      href: '#skills',
      scrollToId: 'skills',
    },
    {
      id: 3,
      name: 'Experience',
      href: '#experience',
      scrollToId: 'experience',
    },
    {
      id: 4,
      name: 'Certifications',
      href: '#certifications',
      scrollToId: 'certifications',
    },
    {
      id: 5,
      name: 'Projects',
      href: '#projects',
      scrollToId: 'projects',
    },
    {
      id: 6,
      name: 'Contact',
      href: '#contact',
      scrollToId: 'contact',
    },
  ],
});
