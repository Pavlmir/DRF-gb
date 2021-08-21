<template lang="ru">
<form class="todo-create-form" @submit.prevent="createTodo">
    <h3>Создать To-Do</h3>
    <label for="text_todo">Текст:</label>      
    <textarea id="text_todo" v-model="text_todo" placeholder="Текст заметки..."></textarea>

    <label for="user">Пользователь:</label>
    <select id="user" v-model="user">
      <option v-for="user in users" v-bind:key="user.id">
          {{ user.id}}
        </option>
    </select>

    <label for="project">Проект:</label>
    <select id="project" v-model="project">
      <option v-for="project in projects" v-bind:key="project.id">
          {{ project.id}} 
      </option>
    </select>

    <input type="checkbox" id="checkbox" v-model="isActive" />

    <input class="button" type="submit" value="Создать">  
</form>
</template>

<script>
import { ProjectApi } from "../api/projects";
import { UserApi } from "../api/users";
import { TodoApi } from "../api/todo_all";

export default {
  data() {
    return {
      project: "",
      user: "",
      text_todo: "",
      users: UserApi.list().then((results) => (this.users = results)),
      projects: ProjectApi.list().then((results) => (this.projects = results)),
      isActive: true
    };
  },
  methods: {
    createTodo() {
      let config = {
        text: this.text_todo,
        user: parseInt(this.user),
        project: parseInt(this.project),
        isActive: this.isActive,
      };
      TodoApi.create(config);
      this.project = [];
      this.user = [];
      this.text_todo = "";
    },
  },
};
</script>

<style>
</style>