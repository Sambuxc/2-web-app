<script setup lang="ts">
  import {useAppStore} from './stores/appStore.ts';
  import BottomNav from './components/BottomNav.vue';
  import StatusPill from './components/StatusPill.vue';

  const store = useAppStore();
</script>

<template>
  <main class="app-shell">
    <StatusPill/>
    <router-view class="page-view"/>
    <BottomNav/>
    <div v-if="store.rewardModalOpen" class="overlay" @click="store.closeRewardModal()">
      <section class="reward-modal" @click.stop>
        <div class="modal-handle"></div>
        <button class="close-btn" @click="store.closeRewardModal()">×</button>
        <img src="../public/assets/reward-bowl.svg" alt="reward" class="reward-icon"/>
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
</template>