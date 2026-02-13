import { createRouter, createWebHashHistory } from 'vue-router';
import { HomeView } from './views/HomeView.ts';
import { RewardsView } from './views/RewardsView.ts';
import { MoreView } from './views/MoreView.ts';
import { HowItWorksView } from './views/HowItWorksView.ts';

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
