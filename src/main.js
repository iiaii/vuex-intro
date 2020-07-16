import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  // vue's data upgrade version == state
  state:{
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ]
  },
  // vue's computed upgrade version == state
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    }
  },
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');


console.log(store.getters.doneTodos);       // { id: 1, text: '...', done: true }
console.log(store.getters.doneTodosCount);  // 1
console.log(store.getters.getTodoById(1)); // { id: 1, text: '...', done: true }
console.log(store.getters.getTodoById(48)); // undefined (null)