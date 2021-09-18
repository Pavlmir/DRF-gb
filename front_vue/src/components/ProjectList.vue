<template>
  <div>
    <h1>Список проектов</h1>
    <router-link :to="{ name: 'CreateProject' }">
      <button class="btn btn-success">Создать</button>
    </router-link>
    <button
      class="btn btn-primary"
      type="button"
      name="button"
      @click="getProject"
    >
      Обновить список проектов
    </button>
    <table>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Ссылка</th>
          <th>Пользователь</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="renderComponent">
        <tr v-for="project in projects" v-bind:key="project.id">
          <td>{{ project.name }}</td>
          <td>{{ project.link }}</td>
          <td>{{ project.users }}</td>
          <td>
            <button
              class="btn btn-danger"
              type="button"
              name="button"
              @click="delProject(project.id)"
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
import { ProjectApi } from "../api/projects";

export default {
  name: "todo-list",
  data() {
    return {
      projects: [],
      renderComponent: true,
    };
  },
  mounted() {
    // Получение списка
    this.getProject();
  },
  methods: {
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    async getProject() {
      let response = ProjectApi.list();
      this.projects = await response;
    },
    async delProject(id) {
      await ProjectApi.delete(id);
      this.forceRerender();
      this.getProject();
    },
  },
};
</script>

<style>
header {
  margin-top: 50px;
}
</style>
