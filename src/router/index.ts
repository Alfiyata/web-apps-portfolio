import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from './Home'
import contactRoutes from './Contact'
import portfolioRoutes from './Portfolio'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRoutes,
    contactRoutes,
    portfolioRoutes
  ],
})

export default router
