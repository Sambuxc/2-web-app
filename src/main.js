import { createApp } from 'https://unpkg.com/vue@3.5.13/dist/vue.esm-browser.prod.js';
import { createPinia } from 'https://unpkg.com/pinia@2.3.1/dist/pinia.esm-browser.js';
import { router } from './router.js';
import { useAppStore } from './stores/appStore.js';
import { BottomNav } from './components/BottomNav.js';
import { StatusPill } from './components/StatusPill.js';

const App = {
  components: { BottomNav, StatusPill },
  setup() {
    const store = useAppStore();
    return { store };
  },
  template: `
    <main class="app-shell">
      <StatusPill />
      <router-view class="page-view" />
      <BottomNav />
      <div v-if="store.rewardModalOpen" class="overlay" @click="store.closeRewardModal()">
        <section class="reward-modal" @click.stop>
          <div class="modal-handle"></div>
          <button class="close-btn" @click="store.closeRewardModal()">×</button>
          <img src="./public/assets/reward-bowl.svg" alt="reward" class="reward-icon" />
          <h2>main reward</h2>
          <h3>how to use:</h3>
          <ul>
            <li>redeem your reward against any main dish</li>
            <li>the reward must be used before 23/8/26 unless it expires</li>
            <li>only 1 reward can be redeemed per member per visit</li>
            <li>cheapest item will be deducted from your bill</li>
          </ul>
          <button class="redeem-btn">pay + redeem</button>
        </section>
      </div>
    </main>
  `,
};

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
