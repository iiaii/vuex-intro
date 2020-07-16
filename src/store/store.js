import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './moduels/state';
import { getters } from './moduels/getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  getters,
});
  