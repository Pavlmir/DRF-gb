<template>
  <div class="container">
    <app-header :tabs="tabs" @change-tab="changeTab"> </app-header>

    <div class="row">
      <div class="col-sm-1"></div>
      <router-view />
      <div class="col-sm-1"></div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default {
  name: "app",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
  },
  data() {
    return {
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab.component;
    },
  },
};
</script>
