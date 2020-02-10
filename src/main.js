import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Element from 'element-ui';
import '@/styles/global.css'

Vue.config.productionTip = false

Vue.use(Element);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
