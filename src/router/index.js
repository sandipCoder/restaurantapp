import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue"
import AddResto from "../views/AddResto.vue"
import LoginView from "../views/LoginView.vue"
import UpdateResto from "../views/UpdateResto.vue"
const routes = [

  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
    beforeEnter: function (to, from, next) {
      if (localStorage.ActUser) {
        next({ name: "HomeView" });
      } else next();
    },
  },
  {
    path: "/register",
    name: "RegisterView",
    component: RegisterView,
    beforeEnter: function (to, from, next) {
      if (localStorage.ActUser) {
        next({ name: "HomeView" });
      } else next();
    },
  },

  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    beforeEnter: function (to, from, next) {
      if (localStorage.ActUser) {
        next();
      } else next({ name: "LoginView" });
    },
  },
  {
    path: "/addresto",
    name: "AddResto",
    component: AddResto,
    beforeEnter: function (to, from, next) {
      if (localStorage.ActUser) {
        next();
      } else next({ name: "LoginView" });
    },
  },

  {
    path: "/updateresto/:id",
    name: "UpdateResto",
    component: UpdateResto,
    beforeEnter: function (to, from, next) {
      if (localStorage.ActUser) {
        next();
      } else next({ name: "LoginView" });
    },
  },


  {
    path: '/:NotfoundView(.*)*',
    name: "NotfoundView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotfoundView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
