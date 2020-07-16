<template>
    <div>
        <h1>Count</h1>
        <div>count = {{ count }}
            <button @click='increment'>+</button> 
             : 
            <button @click='decrement'>-</button>
             : 
            <button @click='incrementAsync'>+(after 1 sec)</button>
        </div>
        <div>localCount = {{ localCount }}</div>
        <div>count+localCount = {{ countPlusLocalState }}</div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    data() {
        return {
            localCount: 4,
        }
    },
    computed: {
        ...mapState([
            'count',
        ]),
        countPlusLocalState() {       
            return this.count + this.localCount;
        },
    },
    methods: {
        ...mapMutations([
            'increment',
            'incrementBy',
            'decrement'
        ]),
        ...mapActions([
            'incrementAsync'
        ]),
        testAction() {
            this.$store.dispatch('actionA')
            .then(() => {
                // 동기 처리 가능
            });
        }
    }
}
</script>

<style>

</style>