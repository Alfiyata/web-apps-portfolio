<template>
    <div>
      <AppHeader />
      <router-view />
      <Footer v-if="!isContactView" />
    </div>
  </template>

<script setup lang="ts">
   import AppHeader from "@/components/Layouts/AppHeader";
   import Footer from "@/components/Layouts/Footer";
   import { computed } from 'vue';
   import { useRoute } from 'vue-router';

   const route = useRoute();
   const isContactView = computed(() => route.name === 'Contact Page');
</script>