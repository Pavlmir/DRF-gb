import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ToDoList',
    component: () => import('./components/ToDoList.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./components/Login.vue'),
    meta: { 
      guest: true
      }
  },
  {
    path: '/projects',
    name: 'ProjectList',
    component: () => import('./components/ProjectList.vue')
  },
  {
    path: '/users',
    name: 'UserList',
    component: () => import('./components/UserList.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('./components/NotFound.vue')
  },
  {
    path: '/secure',
    name: 'secure',
    component: () => import('./components/Secure.vue'),
    meta: {
        requiresAuth: true
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router