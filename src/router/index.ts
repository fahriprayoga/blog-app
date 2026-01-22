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

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
