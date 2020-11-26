import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/free-class",
    name: "FreeClass",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/FreeClass.vue")
  },
  {
    path: "/",
    name: "Index",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Main.vue")
  },
  {
    path: "/main",
    name: "Main",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Main.vue")
  },
  {
    path: "/class",
    name: "Class",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Class.vue")
  },
  {
    path: "/board",
    name: "Board",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Board.vue")
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Mypage.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // base: "new_bhen",
  routes
  // scrollBehavior () {
  //     return { x: 0, y: 0 }
  // }
});

export default router;
