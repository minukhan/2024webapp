import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import AboutView from "../components/AboutView.vue";
import PortfolioView from "../components/PortfolioView.vue";
import DetailView from "../components/DetailView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/portfolio/:num",
<<<<<<< HEAD
      name: "portfolioView",
=======
      name: "portfolio detail",
>>>>>>> 89398f0dd17a79760ef3715fd97c1e1a7382bb92
      component: DetailView,
    },
  ],
});

export default router;
