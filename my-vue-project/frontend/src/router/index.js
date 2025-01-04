import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ColorPalettesPage from "../pages/ColorPalettesPage.vue";
import AnalyticsPage from "../pages/AnalyticsPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignupPage from "../pages/SignupPage.vue";

const isAuthenticated = () => !!localStorage.getItem("token");

const routes = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/about", component: AboutPage, name: "About" },
  { path: "/color-palettes", component: ColorPalettesPage, name: "Color Palettes" },
  { path: "/login", component: LoginPage, name: "Login" },
  { path: "/signup", component: SignupPage, name: "Signup" },
  {
    path: "/analytics",
    component: AnalyticsPage,
    name: "Analytics",
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        alert("You must be logged in to view this page.");
        next("/login");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
