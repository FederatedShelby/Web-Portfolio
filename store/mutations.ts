import { MutationTree } from 'vuex';
import { RootState } from './state';

export const mutations: MutationTree<RootState> = {
  toggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode;
  },
};

export default mutations;
