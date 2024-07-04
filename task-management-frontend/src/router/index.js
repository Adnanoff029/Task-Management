import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/singin',
      name: 'login',
      component: HomeView
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
