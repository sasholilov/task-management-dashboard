import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../pages/DashboardPage.vue"),
  },
  {
    path: "/task/:id",
    name: "TaskDetails",
    component: () => import("../pages/TaskDetailsPage.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
