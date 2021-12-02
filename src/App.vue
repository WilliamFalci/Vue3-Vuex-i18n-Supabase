<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="$t('uniqueTerms.hello') + ',Welcome to Your Vue.js App'"/>
</template>

<script>
import { useI18n } from "vue-i18n";

import HelloWorld from './views/HelloWorld.vue'

export default {
  name: 'App',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    return { t };
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
