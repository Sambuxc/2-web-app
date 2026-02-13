export function calculateStampProgress(stamps: number, nextRewardAt = 3) {
  const clamped = Math.max(0, Math.min(stamps, 6));
  return {
    stamps: clamped,
    percentToNextReward: Math.min(100, Math.round((clamped / nextRewardAt) * 100)),
    remainingToSideReward: Math.max(0, nextRewardAt - clamped),
  };
}

export function getHowItWorksStep(step: number) {
  const steps = [
    {
      title: 'order',
      detail: 'order in restaurant, click + collect or head to deliveroo. spend at least £12',
      image: './assets/how-order.svg',
    },
    {
      title: 'check in',
      detail: 'at the bench? use your table number to check in on your app',
      image: './assets/how-checkin.svg',
    },
    {
      title: 'enjoy',
      detail: 'collect stamps and unlock rewards every time you dine',
      image: './assets/how-enjoy.svg',
    },
  ];
  return steps[(step - 1 + steps.length) % steps.length];
}
