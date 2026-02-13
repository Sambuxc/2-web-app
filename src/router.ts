import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import RewardsView from './views/RewardsView.vue';
import MoreView from './views/MoreView.vue';
import HowItWorksView from './views/HowItWorksView.vue';

export const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/menu', name: 'menu', component: HomeView },
  { path: '/pay', name: 'pay', component: HomeView },
  { path: '/rewards', name: 'rewards', component: RewardsView },
  { path: '/more', name: 'more', component: MoreView },
  { path: '/how-it-works', name: 'howItWorks', component: HowItWorksView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
