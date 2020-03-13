import Vue from 'vue';
import Router from 'vue-router';
import menuConfig from '@/config/menuConfig';


Vue.use(Router);
export default new Router({
  routes:[
    ...menuConfig.map(x=>({
      path: x.route,
      name: x.name,
      component: x.page
    })),
    {
      path: '/',
      name: 'Home Page',
      component: ()=>import('@/views/HomePage/index.vue')
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})