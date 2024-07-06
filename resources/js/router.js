import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Hello from './components/Home.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
