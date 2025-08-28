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
    path: "/about",
    name: "About",
    component: () => import("@/components/about/About.vue"),
  },

  {
    path: "/products",
    name: "Products",
    component: () => import("@/components/products/Products.vue"),
  },

  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("@/components/gallery/Gallery.vue"),
  },

  {
    path: "/products/:productName",
    name: "ProductDetail",
    component: () => import("@/components/products/ProductDetail.vue"),
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
