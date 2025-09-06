import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedLoaded,
} from "vue-router";

interface RouteItem {
  path: string;
  name: string;
  component: any;

  meta?: {
    requiresAuth?: boolean;

    breadcrumb?: string | ((route: RouteLocationNormalizedLoaded) => string);
  };
}

const routes: RouteItem[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { breadcrumb: "Home" },
  },

  {
    path: "/about",
    name: "About",
    component: () => import("@/components/about/About.vue"),
    meta: { breadcrumb: "About" },
  },

  {
    path: "/products",
    name: "Products",
    component: () => import("@/components/products/Products.vue"),
    meta: { breadcrumb: "Products" },
  },

  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("@/components/gallery/Gallery.vue"),
    meta: { breadcrumb: "Gallery" },
  },

  {
    path: "/products/:productName",
    name: "ProductDetail",
    component: () => import("@/components/products/ProductDetail.vue"),
    meta: {
      breadcrumb: (route: any) =>
        decodeURIComponent(route.params.productName as string),
    },
  },
  {
    // catch not found route
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory("/"),

  routes,
});
