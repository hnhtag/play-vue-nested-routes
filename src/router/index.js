import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Public",
    component: () =>
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      import(
        /* webpackChunkName: "PublicLayout" */ "../layouts/PublicLayout.vue"
      ),
    children: [
      // PublicHome will be rendered inside PublicLayout's <router-view>
      // when / is matched
      {
        path: "",
        name: "PublicLanding",
        component: () =>
          import(
            /* webpackChunkName: "PublicLanding" */ "../views/Landing.vue"
          ),
      },
      {
        path: "about",
        name: "PublicAbout",
        component: () =>
          import(/* webpackChunkName: "PublicAbout" */ "../views/About.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      import(
        /* webpackChunkName: "AdminLayout" */ "../layouts/AdminLayout.vue"
      ),
    children: [
      // PublicHome will be rendered inside PublicLayout's <router-view>
      // when / is matched
      {
        path: "",
        name: "AdminDashboard",
        component: () =>
          import(
            /* webpackChunkName: "AdminDashboard" */ "../views/Dashboard.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
