import HomePage from '@/views/HomePage.vue';
import HomeLayout from "@/layouts/HomeLayout.vue";
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeLayout,
    meta: { accessMode: 'public' },
    children: [
      {
        name: 'HomePage',
        path: "",
        component: HomePage
      }
    ]
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
