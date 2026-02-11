import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateStampProgress, getHowItWorksStep } from '../src/utils/rewards.js';

test('calculateStampProgress clamps stamp values and computes remaining', () => {
  const progress = calculateStampProgress(10, 3);
  assert.equal(progress.stamps, 6);
  assert.equal(progress.percentToNextReward, 100);
  assert.equal(progress.remainingToSideReward, 0);
});

test('calculateStampProgress handles values below zero', () => {
  const progress = calculateStampProgress(-2, 3);
  assert.equal(progress.stamps, 0);
  assert.equal(progress.percentToNextReward, 0);
  assert.equal(progress.remainingToSideReward, 3);
});

test('getHowItWorksStep loops around for out-of-range values', () => {
  const step = getHowItWorksStep(4);
  assert.equal(step.title, 'order');
});
