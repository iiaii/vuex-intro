import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { moduleA } from './moduels/moduleA';
import { moduleB } from './moduels/moduleB';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    moduleA,  // a: moduleA // a로 부름
    moduleB,
  },
  state,
  getters,
  mutations,
  actions,
});
  