export const moduleB = {
    namespaced: true,
    modules: {
        subModule: {
            state: {

            },
            mutations: {
                login() {}
            },
            getters: {
                login() {}
            },
            actions: {
                login() {}
            }
        },
    },
    state: {
        count: 8,
    },
    mutations: {

    },
    getters: {
        someGetter(state, getters, rootState, rootGetters) {
            rootState.count;
            state.count;

            getters.someOtherGetter;
            rootGetters.someOtherGetter;
        }
    },
    actions: {
        someAction({ dispatch, commit, getters, rootGetters }) {
            getters.someGetter;
            rootGetters.someGetter;

            dispatch('someOtherAction');
            dispatch('someOtherAction', null, { root: true });

            commit('someMutation');
            commit('someMutation', null, { root: true });
        }
    }
};