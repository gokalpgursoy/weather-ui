import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';

import Users from '@/components/Users/Get';
import UserCreate from '@/components/Users/Post';
import UserUpdate from '@/components/Users/Put';
import UserDelete from '@/components/Users/Delete';

import Locations from '@/components/Locations/Get';
import LocationCreate from '@/components/Locations/Post';
import LocationUpdate from '@/components/Locations/Put';
import LocationDelete from '@/components/Locations/Delete';

import Weather from '@/components/Weather';

import Logs from '@/components/Logs';

import tools from '@/tools';
import store from '@/stores';

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
    {
      path: '/users/delete/:id',
      name: 'deleteUser',
      component: UserDelete,
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations,
    },
    {
      path: '/locations/create',
      name: 'createLocation',
      component: LocationCreate,
    },
    {
      path: '/locations/update/:id',
      name: 'updateLocation',
      component: LocationUpdate,
    },
    {
      path: '/locations/delete/:id',
      name: 'deleteLocation',
      component: LocationDelete,
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather,
    },
    {
      path: '/logs',
      name: 'logs',
      component: Logs,
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  if (!store.state.isAdmin && (to.name.includes('users') || to.name.includes('locations'))) {
    router.push('/');
  }
  if (to.name !== 'login') {
    if (!tools.cookie.get('access_token')) {
      router.push('/login');
    }
  }
  next();
});
