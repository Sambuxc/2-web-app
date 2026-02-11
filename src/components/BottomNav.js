import { computed } from 'https://unpkg.com/vue@3.5.13/dist/vue.esm-browser.prod.js';
import { useRoute, useRouter } from 'https://unpkg.com/vue-router@4.5.0/dist/vue-router.esm-browser.js';

const tabs = [
  { label: 'home', route: '/' },
  { label: 'menu', route: '/menu' },
  { label: 'pay', route: '/pay' },
  { label: 'rewards', route: '/rewards' },
  { label: 'more', route: '/more' },
];

export const BottomNav = {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const current = computed(() => route.path);
    return { tabs, current, router };
  },
  template: `
    <nav class="bottom-nav">
      <button
        v-for="tab in tabs"
        :key="tab.label"
        class="tab"
        :class="{ active: current === tab.route }"
        @click="router.push(tab.route)"
      >
        <span>{{ tab.label }}</span>
      </button>
    </nav>
  `,
};
