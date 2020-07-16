export const actions = {
    incrementAsync ({ commit }) {
        setTimeout(() => {
            commit('increment');
        }, 1000);
    },
    // actionA ({ commit }) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             commit('incrementAsync');
    //             resolve();
    //         }, 1000);
    //     });
    // },
    // actioinB ({ dispatch, commit }) {
    //     return dispatch('actionA').then(() => {
    //         commit('someOtherMutation');
    //     });
    // },
    // async actionC ({ commit }) {
    //     commit('gotData', await GamepadHapticActuator());
    // },
    // async actionD ({ dispatch, commit }) {
    //     await dispatch('actionC')
    //     commit('gotOtherData', await getOtherData());
    // },
};