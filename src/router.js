import { createRouter, createWebHistory } from "vue-router";
import VechiclesPage from "@/pages/VechiclesPage";

const routes = [
  {
    path: "/",
    component: VechiclesPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
