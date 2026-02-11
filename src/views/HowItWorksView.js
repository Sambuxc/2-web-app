import { useRouter } from 'https://unpkg.com/vue-router@4.5.0/dist/vue-router.esm-browser.js';
import { useAppStore } from '../stores/appStore.js';

export const HowItWorksView = {
  setup() {
    const store = useAppStore();
    const router = useRouter();
    return { store, router };
  },
  template: `
    <section class="page scroll-page">
      <div class="title-row"><button class="back" @click="router.back()">←</button><h2>how it works</h2></div>
      <div class="segmented"><button class="active">earn stamps</button><button>redeem rewards</button></div>
      <h3 class="hello">hi {{ store.user }}</h3>
      <p class="sub">let's get you on your way</p>
      <img :src="store.stepContent.image" class="hero" alt="how it works" />
      <article class="how-card">
        <h4>{{ store.stepContent.title }}</h4>
        <p>{{ store.stepContent.detail }}</p>
        <div class="steps">
          <button @click="store.setHowItWorksStep(1)">step 1<div :class="['line', {active: store.howItWorksStep===1}]"></div></button>
          <button @click="store.setHowItWorksStep(2)">step 2<div :class="['line', {active: store.howItWorksStep===2}]"></div></button>
          <button @click="store.setHowItWorksStep(3)">step 3<div :class="['line', {active: store.howItWorksStep===3}]"></div></button>
        </div>
      </article>
    </section>
  `,
};
