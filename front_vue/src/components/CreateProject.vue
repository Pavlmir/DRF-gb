<template lang="ru">
<form  @submit.prevent="createProject">
    <h3>Создать проект</h3>
    <label for="name">Название проекта:</label>
    <input id="name" v-model="name" type="text" placeholder="Название проекта...">

    <label for="link">Ссылка на репозиторий проекта:</label>
    <input id="link" v-model="link" type="text" placeholder="Ссылка на репозиторий проекта...">

    <label for="users">Пользователи:</label>
    <select id="users" v-model="users" class="form-select" multiple>
      <!--  v-bind:value - выбранные значения и зобъекта,  v-bind:key - из тега option -->
      <option v-for="user in all_users" v-bind:value="user">
          {{ user.id}} - {{ user.username}}
        </option>
    </select>
  
    <input class="button" type="submit" value="Создать">  
</form>
</template>

<script>
import { ProjectApi } from "../api/projects";
import { UserApi } from "../api/users";

export default {
  data() {
    return {
      name: "",
      link: "",
      users: [],
      all_users: UserApi.list().then((results) => (this.all_users = results)),
    };
  },
  methods: {
    createProject() {
      let config = {
        name: this.name,
        link: this.link,
        users: this.users.map(user => user.id)
      };
      ProjectApi.create(config);
      this.name = "";
      this.all_users = [];
      this.link = "";
      this.users = [];
    },
  },
};
</script>

<style>
</style>