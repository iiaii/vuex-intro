<template>
    <div>
        <h1>Count</h1>
        <div>count = {{ count }}
            <button @click='increment'>+</button> 
             : 
            <button @click='decrement'>-</button>
        </div>
        <div>localCount = {{ localCount }}</div>
        <div>count+localCount = {{ countPlusLocalState }}</div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

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
    }
}
</script>

<style>

</style>