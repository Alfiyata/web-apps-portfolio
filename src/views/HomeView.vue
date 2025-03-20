<template>
    <div>
      <!-- Hero Section -->
      <div class="bg-white max-w-full h-screen flex items-center justify-center">
        <div class="relative isolate px-6 lg:px-8">
          <div class="mx-auto max-w-2xl">
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span class="typing-text" :class="{ 'typing-animation': startTyping }">{{ displayText }}</span>
                <span class="cursor" :class="{ 'blink': startTyping }">|</span>
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                I'm a passionate frontend developer with expertise in Vue.js, Javascript, TypeScript, and modern web technologies. 
                I love creating elegant solutions to complex problems and building delightful user experiences.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                  Contact Me <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardSection />
      <SkillsSection />
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
