const currentDate: Date = new Date();
// 2 years removed from dates' difference to account for correct calculation
const yoeBuffer: number = 2;

// Data used to populate About Me section contents
export const aboutmeData: any = Object.freeze({
  // PATH:  components > sections > AboutMeSection.vue
  // USAGE: "About Me" content
  subsectionTitle: 'Real-world Capabilities',
  // weight 0 = default
  // weight 1 = font-weight: bold
  introTopTextList: [
    {
      id: 1,
      text: 'I am a ',
      weight: 0,
    },
    {
      id: 2,
      text: ' frontend developer',
      weight: 1,
    },
    {
      id: 3,
      text: ' aiming to transition into',
      weight: 0,
    },
    {
      id: 4,
      text: ' MLOps',
      weight: 1,
    },
    {
      id: 5,
      text: ". I'm passionate about merging my frontend expertise with",
      weight: 0,
    },
    {
      id: 6,
      text: ' AI',
      weight: 1,
    },
    {
      id: 7,
      text: ' and',
      weight: 0,
    },
    {
      id: 8,
      text: ' DevOps',
      weight: 1,
    },
    {
      id: 9,
      text: ' to build innovative, scalable solutions that create impact in the real world.',
      weight: 0,
    },
  ],
  subsectionTextList: [
    {
      id: 1,
      text: 'I excel at building products that leverage AI',
      weight: 0,
    },
    {
      id: 2,
      text: ' to further human interest and understanding',
      weight: 1,
    },
    {
      id: 3,
      text: '. My skills lie in crafting intuitive and well-designed interfaces and I am currently',
      weight: 0,
    },

    {
      id: 4,
      text: ' cultivating new and existing skills',
      weight: 1,
    },
    {
      id: 5,
      text: ' to better automate and visualize the production pipeline of AI models.',
      weight: 0,
    },
  ],
  buttonResumeText: 'View Resumé',
  resumeGoogleDocsLink:
    'https://docs.google.com/document/d/1GN6Ip5lOVVcvWyrBQSZdS6mzpYP9y0INtjZ0abHtg3s/edit?usp=sharing',
  skillsTitle: 'Skills',
  categoriesList: [
    {
      id: 1,
      name: 'Languages',
      skillsList: [
        'JavaScript (ES6)',
        'TypeScript',
        'HTML',
        'CSS / SASS',
        'Python',
        'SQL',
      ],
    },
    {
      id: 2,
      name: 'Frameworks',
      skillsList: ['Vue.js', 'Nuxt', 'React', 'WordPress', 'Jest', 'JMeter'],
    },
    {
      id: 3,
      name: 'Tools',
      skillsList: [
        'Git & GitHub',
        'AWS Console',
        'Chrome DevTools',
        'Postman',
        'ArcGIS',
        'MongoDB',
      ],
    },
    {
      id: 4,
      name: 'Design & Documentation',
      skillsList: [
        'UML',
        'Figma',
        'LucidChart',
        'Storybook',
        'Notion',
        'Prototyping',
      ],
    },
  ],
});
