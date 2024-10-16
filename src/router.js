import { createRouter, createWebHistory } from 'vue-router';
import Info from './views/InfoPage.vue';
import Menu from './views/MenuPage.vue';
import Itinerario from './views/ItinerarioPage.vue';
import Gallery from './views/GalleryPage.vue';

const routes = [
  { path: '/', component: Info },
  { path: '/menu', component: Menu },
  { path: '/itinerario', component: Itinerario },
  { path: '/gallery', component: Gallery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
