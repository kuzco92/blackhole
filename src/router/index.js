import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Index",
    component: require("../views/Index.vue").default
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

];

const router = new VueRouter({
  routes
});

export default router;