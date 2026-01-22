import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Detail from "@/views/Detail.vue";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/article/:id", component: Detail, name: "Detail" },
    { path: "/about", component: About },

    { path: "/404", component: NotFound },
    { path: "/:pathMatch(.*)*", redirect: "/404" },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "instant" };
    }
  },
});

export default router;
