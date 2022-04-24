import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView";
import ForgotPassView from "../views/ForgotPassView";
import HomeView from "../views/HomeView";
import LogadoView from "../views/LogadoView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/forgot-password",
    name: "forgotpass",
    component: ForgotPassView,
  },
  {
    path: "/",
    name: "homepage",
    component: HomeView,
  },
  {
    path: "/logado",
    name: "arealogada",
    component: LogadoView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
