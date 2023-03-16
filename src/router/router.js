import { createRouter, createWebHistory } from "vue-router";

import vCatalog from "../components/catalog/v-catalog";
import vCart from "../components/cart/v-cart";

let routes = [
  {
    path: "/",
    name: "catalog",
    component: vCatalog,
  },
  {
    path: "/cart",
    name: "cart",
    component: vCart,
    props: true, // передача данных
  },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;