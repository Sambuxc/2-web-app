import { useAppStore } from '../stores/appStore.js';

const historyItems = [
  { name: 'birthday gyoza', date: 'redeemed: 27/1/26' },
  { name: 'coffee reward', date: 'redeemed: 8/11/25' },
  { name: 'side reward', date: 'redeemed: 15/2/25' },
];

export const RewardsView = {
  setup() {
    const store = useAppStore();
    return { store, historyItems };
  },
  template: `
    <section class="page scroll-page">
      <h1 class="brand centered">soul <span>✿</span> club</h1>
      <article class="stamps-block top-gap">
        <div class="block-head"><h2>your stamps</h2><router-link to="/how-it-works">how it works →</router-link></div>
        <p class="muted">✿ = 1 order</p>
        <p class="muted">on all purchases of at least £12</p>
        <div class="stamp-row">
          <span class="stamp active">✿</span><span class="stamp">✿</span><span class="stamp">✿</span><span class="stamp">✿</span><span class="stamp">✿</span><span class="stamp">✿</span>
        </div>
      </article>

      <article class="reward-card compact">
        <h2>your rewards</h2>
        <div class="reward-line" @click="store.openRewardModal()">
          <img src="./public/assets/reward-bowl.svg" alt="bowl" />
          <div>
            <h3>main reward</h3>
            <p>expires: 23/8/26</p>
          </div>
          <span>view →</span>
        </div>
        <button class="outline-btn" @click="store.openRewardModal()">ready to redeem?</button>
      </article>

      <section class="history">
        <button class="history-toggle" @click="store.toggleHistory()">history <span>{{ store.historyOpen ? '⌃' : '⌄' }}</span></button>
        <div v-if="store.historyOpen">
          <div class="history-item" v-for="item in historyItems" :key="item.name">
            <img src="./public/assets/history.svg" alt="history" />
            <div><h4>{{ item.name }}</h4><p>{{ item.date }}</p></div>
          </div>
        </div>
      </section>
    </section>
  `,
};
