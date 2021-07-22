<template>
    <header class="sticky">
      <a href="/" class="logo">To-do note</a>
      <button v-for="tab in tabs" :key="tab.component"  @click="$emit('change-tab', tab)" class="button">
        {{ tab.title }}
      </button>
    </header>
</template>

<script>
export default {
  name: 'app-header',
  props: ['tabs']
}
</script>
