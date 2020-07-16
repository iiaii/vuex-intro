<template>
  <div>
      <h1>Todos</h1>
      <h5>All items : {{ todos.length }}</h5>
      <li v-for="todo in todos" v-bind:key="'Todo-'+todo.id">
        <span>{{ todo }}</span>
      </li>
      <h5>Done items : {{ doneTodosCount }}</h5>
      <li v-for="doneTodo in doneTodos" v-bind:key="'doneTodo-'+doneTodo.id">
        <span>{{ doneTodo }}</span>
      </li>
      <div>get 2 from todos : {{ getTodoById(1) }}</div>
      <div>get 10 from todos : {{ getTodoById(10) === undefined ? "nothing" : getTodoById(10) }}</div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';


export default {
    computed: {
        ...mapState([
            'todos',
        ]),
        ...mapGetters([
            'doneTodos',
            'doneTodosCount',
            'getTodoById',
        ]),
    }
}
</script>

<style>

</style>