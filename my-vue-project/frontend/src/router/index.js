import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ColorPalettesPage from '../pages/ColorPalettesPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/about', component: AboutPage, name: 'About' },
  { path: '/color-palettes', component: ColorPalettesPage, name: 'ColorPalettes' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
