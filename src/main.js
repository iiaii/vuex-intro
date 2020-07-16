import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');


// console.log(store.state.moduleA.count);
// store.commit('moduleA/incrementA');
// console.log(store.state.moduleA.count);


// namespaced: false
// store.commit('login');
// store.dispatch('login');
// store.getters.login;

store.commit('moduleB/login');
store.dispatch('moduleB/login');
store.getters['moduleB/login'];

// store.commit('moduleB/subModule/login');
// store.dispatch('moduleB/subModule/login');
// store.getters['moduleB/subModule/login'];