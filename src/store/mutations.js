export const mutations = {
    increment (state) {
        state.count++;
    },
    incrementBy (state, payload) {
        state.count += payload.amount;
    },
    decrement (state) {
        state.count--;
    },
    updateMessage (state, message) {
        state.message = message
    },
};