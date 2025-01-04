import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ColorPalettesPage from "../pages/ColorPalettesPage.vue";
import AnalyticsPage from "../pages/AnalyticsPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignupPage from "../pages/SignupPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";

// Check if the user is authenticated
const isAuthenticated = () => !!localStorage.getItem("token");

const routes = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/about", component: AboutPage, name: "About" },
  { path: "/color-palettes", component: ColorPalettesPage, name: "Color Palettes" },
  { path: "/analytics", component: AnalyticsPage, name: "Analytics" },
  { path: "/login", component: LoginPage, name: "Login" },
  { path: "/signup", component: SignupPage, name: "Signup" },
  {
    path: "/dashboard",
    component: DashboardPage,
    name: "Dashboard",
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next("/login"); // Redirect to login if not authenticated
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
