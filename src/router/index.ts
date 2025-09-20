import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalizedLoaded,
} from "vue-router";

interface RouteItem {
  path: string;
  name: string;
  component: any;

  meta?: {
    requiresAuth?: boolean;
    title: string | ((route: RouteLocationNormalizedLoaded) => string);

    breadcrumb?: string | ((route: RouteLocationNormalizedLoaded) => string);
  };
}

const routes: RouteItem[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { breadcrumb: "Home", title: "Home" },
  },

  {
    path: "/about",
    name: "About",
    component: () => import("@/components/about/About.vue"),
    meta: { breadcrumb: "About", title: "About" },
  },

  {
    path: "/products",
    name: "Products",
    component: () => import("@/components/products/Products.vue"),
    meta: { breadcrumb: "Products", title: "Products" },
  },

  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("@/components/gallery/Gallery.vue"),
    meta: { breadcrumb: "Gallery", title: "Gallery" },
  },

  {
    path: "/products/:productName",
    name: "ProductDetail",
    component: () => import("@/components/products/ProductDetail.vue"),
    meta: {
      breadcrumb: (route: any) =>
        decodeURIComponent(route.params.productName as string),

      title: (route: any) =>
        decodeURIComponent(route.params.productName as string),
    },
  },
  {
    // catch not found route
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: { breadcrumb: "NotFound", title: "NotFound" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),

  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalizedLoaded,
    from: RouteLocationNormalizedLoaded,
    next: NavigationGuardNext,
  ) => {
    document.title =
      (to.meta.title as string).concat(" | Hue") || "Default Title";
    next();
  },
);

export { router };
