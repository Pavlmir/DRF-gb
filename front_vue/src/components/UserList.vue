<template>
  <div>
    <h1>Список пользователей</h1>
    <button type="button" name="button" @click="getUsers">
      Обновить список пользователей
    </button>
    <table>
      <thead>
        <tr>
          <th>Логин</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Электронная почта</th>
          <th>Дата создания записи</th>
          <th>Дата рождения</th>
          <th>Пол</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.date_creation }}</td>
          <td>{{ user.birthday_year }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { UserApi } from "../api/users";

export default {
  name: "user-list",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    // Получение списка пользователей
    this.users = this.getUsers();
  },
  methods: {
    deleteUser(user) {
      // попытается удалить объект из нашех базы данных, отправив запрос к API
      UserApi.delete(user);
    },
    createUser() {
      UserApi.create();
    },
    getUsers() {
      UserApi.list().then((results) => (this.users = results));
    },
  },
};
</script>

<style>
header {
  margin-top: 50px;
}
</style>
