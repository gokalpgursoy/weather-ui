import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Users from '@/components/Users/Get';
import UserCreate from '@/components/Users/Post';
import UserUpdate from '@/components/Users/Put';

import tools from '@/tools';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/users/create',
      name: 'createUser',
      component: UserCreate,
    },
    {
      path: '/users/update/:id',
      name: 'updateUser',
      component: UserUpdate,
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (!tools.cookie.get('access_token')) {
      router.push('/login');
    }
  }
  next();
});
