import '@assets/main.css'
import 'aos/dist/aos.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag, { useGtag } from 'vue-gtag-next'

import App from './App.vue'
import router from './router'
import AOS from 'aos';
import LoadingSpinner from './components/molecules/SpinnerLoading'

const GA_MEASUREMENT_ID = 'G-VX4Q2YG7T6'
const app = createApp(App)

app.use(createPinia())
app.use(router)
AOS.init();
app.component('LoadingSpinner', LoadingSpinner)

app.use(VueGtag, {
  property: {
    id: GA_MEASUREMENT_ID
  }
})

const pathNameArray: string[] = [];
let isProcessing = false;

router.beforeEach(async (to, from, next) => {
  next();

  if (isProcessing) {
    return;
  }

  isProcessing = true;

  await new Promise(resolve => setTimeout(resolve, 3000));

  const joinPathName = window.location.pathname;
  
  if (pathNameArray[pathNameArray.length - 1] !== joinPathName) {
    pathNameArray.push(joinPathName);
  }

  const finalPathName = pathNameArray[pathNameArray.length - 1];
  const pageTitleName = to.name;

  const gtag = useGtag();
  gtag.pageview({
    page_title: pageTitleName as string,
    page_path: finalPathName
  });

  isProcessing = false;
});

app.mount('#app')
