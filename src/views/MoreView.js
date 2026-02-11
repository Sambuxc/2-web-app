const items = ['messages', 'find your wagamama', 'refer a friend', 'gift cards', 'claim a stamp', 'contact us'];

export const MoreView = {
  template: `
    <section class="page scroll-page">
      <h2 class="page-title">more</h2>
      <img src="./public/assets/more-hero.svg" alt="friends dining" class="hero" />
      <div class="menu-list">
        <button v-for="item in items" :key="item" class="menu-item">
          <span>{{ item }}</span>
          <span>›</span>
        </button>
      </div>
    </section>
  `,
  data: () => ({ items }),
};
