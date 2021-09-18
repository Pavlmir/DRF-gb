<template>
  <div class="container">
    <app-header :tabs="tabs" @change-tab="changeTab">
    </app-header>

    <div class="row">
      <div class="col-sm-1"></div>

      <keep-alive>
        <!-- <component :is="currentTab" class="col-sm-10"></component> -->
      </keep-alive>

      <user-list>
      </user-list>

      <div class="col-sm-1"></div>
    </div>

    <app-footer>
      <footer></footer>
    </app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import UserList from "./components/UserList";
import AppFooter from "./components/AppFooter";

export default {
  name: "app",
  components: {
    "app-header": AppHeader,
    "user-list": UserList,
    "app-footer": AppFooter,
  },
  data() {
    return {
      currentTab: "UserList",
      tabs: [{ component: "UserList", title: "Пользователи" }],
    };
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab.component;
    },
  },
};
</script>
