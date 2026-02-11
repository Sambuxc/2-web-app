import { createRouter, createWebHashHistory } from 'https://unpkg.com/vue-router@4.5.0/dist/vue-router.esm-browser.js';
import { HomeView } from './views/HomeView.js';
import { RewardsView } from './views/RewardsView.js';
import { MoreView } from './views/MoreView.js';
import { HowItWorksView } from './views/HowItWorksView.js';

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
