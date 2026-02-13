<script setup lang="ts">
  import {computed} from 'vue';
  import {useRoute, useRouter} from 'vue-router';

  const tabs = [
    {label: 'home', route: '/'},
    {label: 'menu', route: '/menu'},
    {label: 'pay', route: '/pay'},
    {label: 'rewards', route: '/rewards'},
    {label: 'more', route: '/more'},
  ];

  const route = useRoute();
  const router = useRouter();
  const current = computed(() => route.path);
</script>

<template>
  <nav class="bottom-nav">
    <button
        v-for="tab in tabs"
        :key="tab.label"
        class="tab"
        :class="{ active: current === tab.route }"
        @click="router.push(tab.route)"
    >
      <span>{{ tab.label }}</span>
    </button>
  </nav>
</template>
