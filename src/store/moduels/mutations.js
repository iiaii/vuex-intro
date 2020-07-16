export const mutations = {
    increment (state) {
        state.count++;
    },
    incrementBy (state, payload) {
        state.count += payload.amount;
    }
}