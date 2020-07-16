import { mapState } from 'vuex';
<template>
  <div id="app">
    <Count></Count>
    <Todo></Todo>
  </div>
</template>

<script>
import Count from './components/Count';
import Todo from './components/Todo';

export default {
  name: 'App',
  components: {
    Count,
    Todo,
  },
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
