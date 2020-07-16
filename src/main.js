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

// store.commit('moduleB/login');
// store.dispatch('moduleB/login');
// store.getters['moduleB/login'];

// store.commit('moduleB/subModule/login');
// store.dispatch('moduleB/subModule/login');
// store.getters['moduleB/subModule/login'];

// test code
// import mocha from 'mocha';
// import chai from 'chai';

// mocha.setup('bdd');
// // let assert = chai.assert;
// let expect = chai.expect;

// mocha.describe('mutations', () => {
//     mocha.it('INCREMENT', () => {
//         store.commit('increment');
//         expect(store.state.count).to.equal(1);
//     });
// });

// mocha.run();