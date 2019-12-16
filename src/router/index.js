import Vue from "vue";
import VueRouter from "vue-router";
import home from "../pages/home.vue";
import team from "../pages/team.vue";
import leaderboard from "../pages/leaderboard.vue";
import about from "../pages/about.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/team",
    name: "team",
    component: team
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    component: leaderboard
  },
  {
    path: "/about",
    name: "about",
    component: about
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
