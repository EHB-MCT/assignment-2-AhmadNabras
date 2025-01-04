import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ColorPalettesPage from "../pages/ColorPalettesPage.vue";
import AnalyticsPage from "../pages/AnalyticsPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignupPage from "../pages/SignupPage.vue";

// Define routes
const routes = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/about", component: AboutPage, name: "About" },
  { path: "/color-palettes", component: ColorPalettesPage, name: "Color Palettes" },
  { path: "/analytics", component: AnalyticsPage, name: "Analytics" },
  { path: "/login", component: LoginPage, name: "Login" },
  { path: "/signup", component: SignupPage, name: "Signup" },
];

// Create and configure router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
