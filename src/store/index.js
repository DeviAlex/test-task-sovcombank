import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import { safeApi } from '../helpers/safeApi';
import getPayments from '../mocks/getPayments';

Vue.use(Vuex);

export default new Vuex.Store({

  state: () => ({
    data: [],
    isLoading: false,
    isCached: false,
  }),

  mutations: {
    setState(state, value) {
      Object.entries(value).forEach(([key, data]) => {
        if (!Array.isArray(state[key]) && state[key] && typeof state[key] === 'object') {
          state[key] = {
            ...state[key],
            ...data,
          };
        } else {
          state[key] = data;
        }
      });
    },
  },

  actions: {
    async load({ commit }, params = {}) {
      commit('setState', { isLoading: true });

      try {
        const { data } = await api.getPayments(params);

        if (Array.isArray(data)) {
          commit('setState', { data, isCached: true });
        }
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e?.message);
      } finally {
        commit('setState', { isLoading: false });
      }
    },
    async clearCacheAndReload({ commit, dispatch }, params = {}) {
      commit('setState', { data: [], isCached: false });

      dispatch('load');
    },
  },
});
