import { createRouter, createWebHashHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import Login from '../views/Login.vue';
import Register from '../components/Register.vue';
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
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
