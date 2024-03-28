import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import CocktailDetails from "@/pages/CocktailDetails.vue";
import { CocktailSlug } from "@/components/features/drinks/types";

export const routesInfo = {
  cocktailDetails: {
    path: "/cocktails/:cocktailSlug",
    getLinkTo: (key: string) => `/cocktails/${key}`,
  },
};

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: CocktailDetails,
    redirect: () => ({
      path: routesInfo.cocktailDetails.getLinkTo(CocktailSlug.MARGARITA),
    }),
    children: [],
  },
  { path: routesInfo.cocktailDetails.path, component: CocktailDetails },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "bg-primary/10",
});
