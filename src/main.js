import { createApp } from 'vue'
import App from './App.vue'

import store from "./store/index.js"
import router from './router/index.js'
import i18n from './i18n/i18n.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(i18n)
.use(store)
.use(router)
.use(VueAxios, axios)
.mount('#app')
