<template>
  <div>
    <h1>Список заметок</h1>
    <router-link :to="{ name: 'CreateTodo' }">
      <button class="btn btn-success">Создать</button>
    </router-link>
    <button
      class="btn btn-primary"
      type="button"
      name="button"
      @click="getTodo"
    >
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todo_all" v-bind:key="todo.id">
          <td>{{ todo.project }}</td>
          <td>{{ todo.user }}</td>
          <td>{{ todo.text }}</td>
          <td>{{ todo.created }}</td>
          <td>{{ todo.updated }}</td>
          <!-- свойства превращаются в другой стиль is_active - isActive -->
          <td>{{ todo.isActive }}</td> 
          <td>
            <button
              class="btn btn-danger"
              type="button"
              name="button"
              @click="delTodo(todo.id)"
            >
              Удалить
            </button>
          </td>
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
    this.getTodo();
  },
  methods: {
    getTodo() {
      TodoApi.list().then((results) => (this.todo_all = results));
    },
    delTodo(id) {
      TodoApi.delete(id);
      this.getTodo();
    },
  },
};
</script>

<style>
header {
  margin-top: 50px;
}
</style>
