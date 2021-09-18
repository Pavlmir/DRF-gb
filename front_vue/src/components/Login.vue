<template>
  <div>
    <form class="login" @submit.prevent="login_user">
      <h1>Sign in</h1>
      <label>Логин</label>
      <input required v-model="username" type="login" placeholder="Name" />
      <label>Пароль</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login_user: function () {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch('auth/login', { username, password })
        .then(() => {this.$router.push("api-auth/")})
        .catch((err) => console.log(err))
    },
  },
};
</script>