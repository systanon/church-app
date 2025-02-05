import HomePage from '@/views/HomePage.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    meta: { accessMode: 'public' },
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    meta: { accessMode: 'public' },
    component: () => import('@/views/AboutPage.vue'),
  },
  {
    path: "/:patchMath(.*)*",
    name: "not-found",
    meta: { accessMode: "public" },
    component: () => import("@/views/NotFoundPage.vue"),
  },
];
export { routes };
