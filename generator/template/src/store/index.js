import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import getters from "./getters";
import Users from "./modules/users";

export default new Vuex.Store({
  modules: {
    Users
  },
  state: {},
  mutations: {},
  actions: {},
  getters
});
