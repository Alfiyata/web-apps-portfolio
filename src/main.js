import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag, { pageview } from 'vue-gtag';

// Replace with your Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-VX4Q2YG7T6'


const app = createApp(App)
app.use(router)

// Initialize Google Analytics
app.use(VueGtag, {
config: {
    id: GA_MEASUREMENT_ID 
}
});

/** handling double URL */
const joinPathName = window.location.pathname;

if (pathNameArray[pathNameArray.length - 1] !== joinPathName) {
    pathNameArray.push(joinPathName);
}

const finalPathName = pathNameArray[pathNameArray.length - 1];
const pageTitleName = to.name;

pageview({
    page_title: pageTitleName,
    page_path: finalPathName
});

app.mount('#app') 
