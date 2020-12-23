import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

  {
    path: "/",
    name: "NoteList",
    component: () => import("@/views/NoteList.vue")
  },
  {
    path: "/detail/:id",
    name: "NoteDetail",
    component: () => import("@/views/NoteDetail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
