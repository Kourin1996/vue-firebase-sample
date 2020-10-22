import { createRouter, createWebHistory } from 'vue-router'
import Index from './components/pages/index.vue';
import SignIn from './components/pages/signin.vue';

const routerHistory = createWebHistory();

export default createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
