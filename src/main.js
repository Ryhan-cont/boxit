import './assets/scss/_main.scss'

import { createApp } from 'vue'
import App from './App.vue'

import router from './routers' 

const vueSetup = createApp(App)
vueSetup.use(router)


vueSetup.mount('#app')