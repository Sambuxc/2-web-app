import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { calculateStampProgress, getHowItWorksStep } from '../utils/rewards.ts';

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

  function setHowItWorksStep(step: number) {
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
