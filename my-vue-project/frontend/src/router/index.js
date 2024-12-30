import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ColorPalettesPage from '../pages/ColorPalettesPage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/color-palettes', component: ColorPalettesPage, name: 'ColorPalettes' },
  { path: '/about', component: AboutPage, name: 'About' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
