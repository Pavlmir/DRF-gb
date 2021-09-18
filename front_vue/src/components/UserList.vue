<template>
  <div>
    <h1>Список пользователей</h1>
    <button type="button" name="button" @click="getUsers">Обновить список пользователей</button>
    <!-- <button @click="createUser()" class="button">Создать</button> -->
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
        <users-items
          v-for="item in users"
          v-bind:user="item"
          v-bind:key="item.email"
        >
        </users-items>
      </tbody>
    </table>
    <!-- <h1 @click="deleteUser(user)"></h1> -->
  </div>
</template>

<script>
import UsersItems from "./UsersItems";
import { UserApi } from "../api/users";
// import axios from "axios";

export default {
  name: "user-list",
  components: {
    "users-items": UsersItems,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    // Получение списка пользователей
    this.users = this.getUsers()
  },
  methods: {
    deleteUser(user) {
      // попытается удалить заметку из нашех базы данных, отправив запрос к API
      UserApi.delete(user);
    },
    createUser() {
      UserApi.create();
    },
    getUsers() {
      UserApi.list().then(users => (this.users = users));
    },
  },
};
</script>

<style>
header {
  margin-top: 50px;
}
</style>
