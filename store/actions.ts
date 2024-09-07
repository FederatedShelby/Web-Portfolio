import { ActionTree } from 'vuex';
import { RootState } from './state';

export const actions: ActionTree<RootState, RootState> = {
  toggleDarkMode({ commit }) {
    commit('toggleDarkMode');
  },
};

export default actions;
