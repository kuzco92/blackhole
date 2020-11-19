import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/free-class",
    name: "FreeClass",
    component: require("../views/FreeClass.vue").default
  },
  {
    path: "/main",
    name: "Main",
    component: require("../views/Main.vue").default
  },
  {
    path: "/class",
    name: "Class",
    component: require("../views/Class.vue").default
  },
  {
    path: "/board",
    name: "Board",
    component: require("../views/Board.vue").default
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: require("../views/Mypage.vue").default
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
