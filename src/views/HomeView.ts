export const HomeView = {
  template: `
    <section class="page scroll-page">
      <div class="brand-row">
        <h1 class="brand">soul <span>✿</span> club</h1>
        <div class="mail-dot">✉</div>
      </div>

      <article class="reward-card">
        <h2>your rewards</h2>
        <div class="food-strip">
          <img src="./public/assets/reward-left.svg" alt="reward" />
          <img src="./public/assets/reward-right.svg" alt="reward" />
        </div>
        <div class="reward-summary">
          <img src="./public/assets/reward-bowl.svg" alt="bowl" />
          <div>
            <h3>main reward</h3>
            <p>expires: 23/8/26</p>
          </div>
        </div>
      </article>

      <article class="stamps-block">
        <div class="block-head"><h2>your stamps</h2><a href="#/rewards">view details →</a></div>
        <div class="stamp-row">
          <span class="stamp active">✿</span><span class="stamp">✿</span><span class="stamp">✿</span><span class="stamp">✿</span><span class="stamp">✿</span><span class="stamp">✿</span>
        </div>
        <div class="progress-wrap"><div class="progress"></div></div>
        <p>2 more to free side</p>
      </article>

      <article class="promo-card">
        <img src="./public/assets/promo-ramen.svg" alt="ramen" />
        <h3>the comfort you've been craving</h3>
        <p>get cosy with our newest ramen bowls</p>
        <strong>find your flavour →</strong>
      </article>
    </section>
  `,
};
