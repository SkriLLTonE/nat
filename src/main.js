import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'


import 'bootstrap';
import './assets/css/app.css'
import './assets/css/mainPage.css'
import './assets/css/slider.css'
import './assets/css/small_slider.css'
import './assets/css/competition.css'





const app = createApp(App);

app.use(router)
app.mount('#app')