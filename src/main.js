import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import analyticsService from './services/analytics'

// Replace with your Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-VX4Q2YG7T6'

// Initialize Google Analytics
analyticsService.init(GA_MEASUREMENT_ID)

const app = createApp(App)
app.use(router)
app.mount('#app') 