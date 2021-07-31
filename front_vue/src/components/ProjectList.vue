<template>
  <div>
    <h1>Список проектов</h1>
    <button type="button" name="button" @click="getProject">
      Обновить список проектов
    </button>
    <table>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Ссылка</th>
          <th>Пользователь</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" v-bind:key="project.id">
          <td>{{ project.name }}</td>
          <td>{{ project.link }}</td>
          <td>{{ project.users }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ProjectApi } from "../api/projects";

export default {
  name: "todo-list",
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    // Получение списка 
    this.projects = this.getProject();
  },
  methods: {
    getProject() {
      ProjectApi.list().then((results) => (this.projects = results));
    },
  },
};
</script>

<style>
header {
  margin-top: 50px;
}
</style>
