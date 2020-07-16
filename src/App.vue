import { mapState } from 'vuex';
<template>
  <div id="app">
    {{ message }}<br>
    <input v-model="message" />
    <br>
    {{ message }}<br>
    <input :value="message" @input="updateMessage" />
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
  computed: {
    message: {
      get () {
        return this.$store.state.message;
      },
      set (value) {
        this.$store.commit('updateMessage', value);
      }
    }
  },
  methods: {
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target.value);
    }
  }
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
