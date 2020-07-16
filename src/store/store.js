import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './moduels/state';
import { getters } from './moduels/getters';
import { mutations } from './moduels/mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
});
  