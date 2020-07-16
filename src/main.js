import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');

console.log(store.getters.doneTodos);       // { id: 1, text: '...', done: true }
console.log(store.getters.doneTodosCount);  // 1
console.log(store.getters.getTodoById(1)); // { id: 1, text: '...', done: true }
console.log(store.getters.getTodoById(48)); // undefined (null)