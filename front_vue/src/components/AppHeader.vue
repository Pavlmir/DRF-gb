<template>
    <header class="sticky">
      <router-link :to="{ name: 'ToDoList' }">Список заметок</router-link> |
      <router-link :to="{ name: 'ProjectList' }">Список проектов</router-link> |
      <router-link :to="{ name: 'UserList' }">Список пользователей</router-link> |
    </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>
