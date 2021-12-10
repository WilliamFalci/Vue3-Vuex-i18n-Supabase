# Vue3 + Vue Router + Vuex + i18n + Supabase + Axios

### References

- [X] Vue3: [https://v3.vuejs.org/](https://v3.vuejs.org/)
- [X] Vuex: [https://next.vuex.vuejs.org/](https://next.vuex.vuejs.org/)
- [X] Vue-Router: [https://next.router.vuejs.org/](https://next.router.vuejs.org/)
- [X] Vue-Axios: [https://github.com/imcvampire/vue-axios](https://github.com/imcvampire/vue-axios)
- [X] Supabase: [https://supabase.com/](https://supabase.com/) | [https://github.com/supabase/supabase-js](https://github.com/supabase/supabase-js) Integrated with Custom VUE Plugin (Look /supabase/supabase.js)

## Project setup
```
git clone https://github.com/WilliamFalci/Vue3-Vuex-i18n-Supabase.git
yarn install

cp .env.development .env.local

```
copy and paste the values of:

- SUPABASE_URL (default: http://localhost:8000)
- ANON_KEY (default: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzIwODU0MCwiZXhwIjoxOTc0MzYzNzQwfQ.zcaQfHd3VA7XgJmdGfmV86OLVJT9s2MTmSy-e69BpUY) 

from .env file of supabase docker folder

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
