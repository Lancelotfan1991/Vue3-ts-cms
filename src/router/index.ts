import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('src/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('src/views/main/main.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
