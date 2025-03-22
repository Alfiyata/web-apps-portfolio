<template>
    <div>
      <!-- Hero Section -->
      <div class="bg-white max-w-full h-screen flex items-center justify-center">
        <div class="relative isolate px-6 lg:px-8">
          <div class="mx-auto max-w-7xl flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0">
              <img src="@/assets/images/profile-img.png" alt="Profile Photo" class="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg mx-auto" />
            </div>
            <div class="w-full md:w-1/2">
              <div class="text-center md:text-left">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <span class="typing-text" :class="{ 'typing-animation': startTyping }">{{ displayText }}</span>
                  <span class="cursor" :class="{ 'blink': startTyping }">|</span>
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  I'm a passionate frontend developer with expertise in Vue.js, Javascript, TypeScript, and modern web technologies. 
                  I love creating elegant solutions to complex problems and building delightful user experiences.
                </p>
                <div class="mt-10 flex items-center justify-center md:justify-start gap-x-6">
                  <a href="http://www.linkedin.com/in/alfiyata" class="text-sm font-semibold leading-6 text-gray-900">
                    Contact Me <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardSection />
      <SkillsSection />
      
      <!-- Footer -->
      <footer class="bg-white py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex flex-col items-center justify-center space-y-4">
            <div class="flex items-center space-x-8">
              <a href="mailto:alfiyata99@gmail.com" class="text-gray-600 hover:text-indigo-600 flex items-center">
                <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                alfiyata99@gmail.com
              </a>
              <a href="https://wa.me/089518976601" target="_blank" class="text-gray-600 hover:text-indigo-600 flex items-center">
                <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +62 89518976601
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardSection from '@components/organisms/CardSection';
import SkillsSection from '@components/organisms/SkillsSection';

const fullText = "Hi, I'm Alfiyata";
const displayText = ref('');
const startTyping = ref(false);

onMounted(() => {
  startTyping.value = true;
  typeText();
});

const typeText = async () => {
  while (true) {
    // Type text
    for (let i = 0; i <= fullText.length; i++) {
      displayText.value = fullText.substring(0, i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Pause at the end
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clear text
    for (let i = fullText.length; i >= 0; i--) {
      displayText.value = fullText.substring(0, i);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Pause before restarting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
};
</script>

<style scoped>
.cursor {
  display: inline-block;
  margin-left: 2px;
  font-weight: 100;
  animation: none;
}

.cursor.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
