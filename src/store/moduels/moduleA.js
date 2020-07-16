export const moduleA = {
    namespaced: true,   // true 면 moduleA/incrementA 로 표기해야함
    state: {
        count: 3,
    },
    mutations: {
        incrementA (state) {
            state.count++;
        }
    },
    getters: {
        doubleCountA (state) {
            return state.count * 2;
        }
    },
    actions: {
        incrementIfOddA({state, commit}) {
            if(state.count % 2 == 1) {
                commit('increment');
            }
        }
    }
};