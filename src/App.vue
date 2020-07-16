<template>
  <div id="app">
    {{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      localCount: 4,
    }
  },
  computed: mapState([
    'count'
  ]),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


//  computed: mapState({
//     count: state => state.count,
//     countAlias: 'count',
//     countPlusLocalState(state) {       // this 사용하기 위해 이런 구조
//       return state.count + this.localCount;
//     },
//  })