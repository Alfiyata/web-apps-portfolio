<template>
    <div>
      <div v-if="loadingStore.isLoading">
        <LoadingSpinner :is-loading="loadingStore.isLoading" />
      </div>
      <div v-else>
        <AppHeader />
        <router-view />
        <Footer v-if="!isContactView" />
      </div>
    </div>
  </template>

<script setup lang="ts">
   import AppHeader from "@/components/Layouts/AppHeader";
   import Footer from "@/components/Layouts/Footer";
   import { computed, onMounted } from 'vue';
   import { useRoute } from 'vue-router';
   import { useLoadingStore } from '@/stores/loading';

   const route = useRoute();
   const isContactView = computed(() => route.name === 'Contact Page');
   const loadingStore = useLoadingStore();

   onMounted(() => {
    // Start loading
    loadingStore.startLoading();
    // Stop loading
    setTimeout(() => {
      loadingStore.stopLoading();
    }, 1500);
   });
</script>