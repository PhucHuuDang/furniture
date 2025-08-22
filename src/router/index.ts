import { createRouter, createWebHistory } from "vue-router";

interface RouteItem {
  path: string;
  name: string;
  component: any;

  meta?: {
    requiresAuth?: boolean;
  };
}

const routes: RouteItem[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    // catch not found route
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
