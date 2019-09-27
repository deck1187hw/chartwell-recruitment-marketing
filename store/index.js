import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Cookies from "js-cookie";
import cookie from "cookie";

export const state = () => ({
  language: 'en-gb'
});

export const getters = {
    language: state => {
        return state.language
    }
};

export const mutations = {
    SET_LANGUAGE(state, data) {
    state.language = data;
  },
};

export const actions = {
    async nuxtServerInit({ commit }, { req }) {


    },
    changeLang ({ commit, state }, payload) {
        Cookies.set("language", payload);
        commit('SET_LANGUAGE', payload)
      }
};