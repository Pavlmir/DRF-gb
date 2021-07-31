<template>
  <div>
    <h1>Список заметок</h1>
    <button type="button" name="button" @click="getTodo">
      Обновить список заметок
    </button>
    <table>
      <thead>
        <tr>
          <th>Проект</th>
          <th>Пользователь</th>
          <th>Сообщение</th>
          <th>Дата создания</th>
          <th>Дата обновления</th>       
          <th>Активна</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todo_all" v-bind:key="todo.id">
          <td>{{ todo.project }}</td>
          <td>{{ todo.user }}</td>
          <td>{{ todo.text }}</td>
          <td>{{ todo.created }}</td>
          <td>{{ todo.updated }}</td>
          <td>{{ todo.is_active }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { TodoApi } from "../api/todo_all";

export default {
  name: "todo-list",
  data() {
    return {
      todo_all: [],
    };
  },
  mounted() {
    // Получение списка 
    this.todo_all = this.getTodo();
  },
  methods: {
    getTodo() {
      TodoApi.list().then((results) => (this.todo_all = results));
    },
  },
};
</script>

<style>
header {
  margin-top: 50px;
}
</style>
