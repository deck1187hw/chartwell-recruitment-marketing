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
      if(req){
    let { language } = cookie.parse(req.headers.cookie);
    commit("SET_LANGUAGE", language);
  }

    },
    changeLang ({ commit, state }, payload) {
        localStorage.setItem("language", payload);
        Cookies.set("language", payload);
        commit('SET_LANGUAGE', payload)
        location.reload();
      }
};