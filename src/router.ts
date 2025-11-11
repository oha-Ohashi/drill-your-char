import { createRouter, createWebHistory } from "vue-router";
import Print01 from './components/Print01.vue'
import Print02 from './components/Print02.vue'

const routes = [
  { path: "/01", component: Print01 },
  { path: "/02", component: Print02 }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
