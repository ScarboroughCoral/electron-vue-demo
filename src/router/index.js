import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/',
      name: 'loading-page',
      component: ()=>import('@/views/HomePage')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})