<template>
  <tr>
    <td>{{ user.username }}</td>
    <td>{{ user.firstname }}</td>
    <td>{{ user.lastname }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.date_creation }}</td>
    <td>{{ user.birthday_year }}</td>
    <td>{{ user.gender }}</td>
  </tr>
</template>

<script>
export default {
  name: "users-items",
  props: ["user"],
};
</script>
