import Vue from 'vue'
import App from './App.vue'
import router from './router';
import 'bulma/css/bulma.css';
import '@/styles/global.css'
import vuetify from './plugins/vuetify';
import store from './store'

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')