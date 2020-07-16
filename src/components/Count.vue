<template>
    <div>
        <h1>Count</h1>
        <div>count = {{ count }}</div>
        <div>count+localCount = {{ countPlusLocalState }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

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
        
    }
}
</script>

<style>

</style>