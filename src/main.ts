import './assets/main.css'
import 'aos/dist/aos.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import AOS from 'aos';

const app = createApp(App)

app.use(createPinia())
app.use(router)
AOS.init();

app.mount('#app')
