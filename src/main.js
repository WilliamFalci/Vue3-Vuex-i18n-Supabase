import { createApp } from 'vue'
import App from './App.vue'

import store from "./store/index.js"
import router from './router/index.js'
import i18n from './i18n/i18n.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import supabase from './supabase/supabase'

console.log(process.env)
createApp(App)
.use(i18n)
.use(store)
.use(router)
.use(VueAxios, axios)
.use(supabase, {
  supabaseUrl: process.env.VUE_APP_SUPABASE_URL, // API URL
  supabaseKey: process.env.VUE_APP_SUPABASE_ANON_KEY, // ANON KEY,
  options: {}
})
.mount('#app')
