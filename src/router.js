import { createRouter, createWebHistory } from 'vue-router'
const firebase = require("firebase");

import Index from './components/pages/index.vue';
import SignIn from './components/pages/signin.vue';
import Profile from './components/pages/profile.vue';

const routerHistory = createWebHistory();

const PATH_FOR_NOT_SIGNED_IN = [
  '/',
  '/signin'
];

const router = createRouter({
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
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const isSignedIn = !!currentUser;

  if (isSignedIn || to.matched.some((r) => PATH_FOR_NOT_SIGNED_IN.indexOf(r.path) !== -1)) {
    return next();
  } else {
    return next({ path: '/signin' })
  }
})

export default router;
