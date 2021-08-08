<template>
  <button v-if="!isLoggedIn" @click="this.$router.push({ name: 'Login' })">Войти</button>
  <button v-if="isLoggedIn" @click="logout">Выйти</button>
  <header class="sticky">
    <router-link :to="{ name: 'ToDoList' }">Список заметок</router-link> |
    <router-link :to="{ name: 'ProjectList' }">Список проектов</router-link> |
    <router-link :to="{ name: 'UserList' }">Список пользователей</router-link> |
  </header>
</template>

<script>
export default {
  name: "app-header",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>
