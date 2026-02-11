import { computed, ref } from 'https://unpkg.com/vue@3.5.13/dist/vue.esm-browser.prod.js';
import { defineStore } from 'https://unpkg.com/pinia@2.3.1/dist/pinia.esm-browser.js';
import { calculateStampProgress, getHowItWorksStep } from '../utils/rewards.js';

export const useAppStore = defineStore('app', () => {
  const user = ref('sam');
  const stamps = ref(1);
  const rewardModalOpen = ref(false);
  const historyOpen = ref(false);
  const howItWorksStep = ref(1);

  const progress = computed(() => calculateStampProgress(stamps.value));
  const stepContent = computed(() => getHowItWorksStep(howItWorksStep.value));

  function toggleHistory() {
    historyOpen.value = !historyOpen.value;
  }

  function openRewardModal() {
    rewardModalOpen.value = true;
  }

  function closeRewardModal() {
    rewardModalOpen.value = false;
  }

  function setHowItWorksStep(step) {
    howItWorksStep.value = step;
  }

  return {
    user,
    stamps,
    rewardModalOpen,
    historyOpen,
    howItWorksStep,
    progress,
    stepContent,
    toggleHistory,
    openRewardModal,
    closeRewardModal,
    setHowItWorksStep,
  };
});
