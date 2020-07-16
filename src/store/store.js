import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { moduleA } from './moduels/moduleA';
import { moduleB } from './moduels/moduleB';


Vue.use(Vuex);

// plugin ex1
// const myPlugin = store => {
//   store.subscribe((mutation, state) => {

//   });
// }

// plugin ex2
// function createWebSocketPlugin (socket) {
//   return store => {
//     socket.on('data', data => {
//       store.commit('receiveData', data);
//     });
//     store.subscribe(mutation => {
//       if (mutation.type === 'UPDATE_DATA') {
//         socket.emit('update', mutation.payload);
//       }
//     });
//   }
// }

// plugin ex3
// const myPluginWithSnapshot = store => {
//   let prevState = _.cloneDeep(store.state)
//   store.subscribe((mutation, state) => {
//     let nextState = _.cloneDeep(state);

//     prevState = nextState;
//   });
// }

// plugin ex4
// import createLogger from 'vuex/dist/logger';

// const logger = createLogger({
//   collapsed: false,
//   filter (mutation, stateBefore, stateAfter) {
//     return mutation.type !== 'aBlacklistedMutation';
//   },
//   transformer (state) {
//     return state.subTree;
//   },
//   mutationTransformer (mutation) {
//     return mutation.type;
//   },
//   logger: console,
// });

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
  // plugins: [myPlugin],
  // plugins: ProcessingInstruction.env.NODE_ENV !== 'production'
  //   ? [myPluginWithSnapshot]
  //   : []
  // plugins: [createLogger()]
});
  