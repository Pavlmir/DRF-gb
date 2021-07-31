import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ToDoList',
    component: () => import('../components/ToDoList.vue')
  },
  {
    path: '/projects',
    name: 'ProjectList',
    component: () => import('../components/ProjectList.vue')
  },
  {
    path: '/users',
    name: 'UserList',
    component: () => import('../components/UserList.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../components/NotFound.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router