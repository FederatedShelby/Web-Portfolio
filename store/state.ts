export const state = () => ({
  // Initialize based on OS preference
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
});

export type RootState = ReturnType<typeof state>;

export default state;
