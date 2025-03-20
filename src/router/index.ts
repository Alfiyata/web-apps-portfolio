import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from './Home'
import contactRoutes from './Contact'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRoutes,
    contactRoutes
  ],
})

export default router
