import { createRouter, createWebHashHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import NotFound from '../views/NotFound.vue';
import Loading from '../views/Loading.vue';
const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/loading',
    component: Loading,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
