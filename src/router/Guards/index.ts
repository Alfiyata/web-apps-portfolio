import { useLoadingStore } from '@/stores/loading';
import type { Router } from 'vue-router';

export function setupGuards (router: Router) {
  router.beforeEach((to, from, next) => {
    const loadingStore = useLoadingStore();
    loadingStore.startLoading();
    next();
  });

  router.afterEach(() => {
    const loadingStore = useLoadingStore();
    setTimeout(() => {
      loadingStore.stopLoading();
    }, 500);
  });
}