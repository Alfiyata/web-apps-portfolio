import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from './Home'
import contactRoutes from './Contact'
import portfolioRoutes from './Portfolio'
import { setupGuards } from './Guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRoutes,
    contactRoutes,
    portfolioRoutes
  ],
})

setupGuards(router)

export default router
