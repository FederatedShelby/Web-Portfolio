// Data used to populate Home section contents
export const homeData: any = Object.freeze({
  // PATH:  components > sections > HomeSection.vue
  // USAGE: "Home" content

  // PATH: components > TypedText.vue
  // USAGE: props for vue-typer library components
  typedText: {
    topFixed: {
      text: "Hello there, I'm Samuel!",
      preTypeDelay: 1000,
    },
    bottomFixed: {
      text: 'Passionate developer of ',
      preTypeDelay: 3000,
    },
    bottomRepeat: {
      text: ['AI.', 'UI.', 'MLOps.'],
      preTypeDelay: 5000,
      eraseDelay: 100,
    },
  },
});
