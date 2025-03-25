<template>
    <div>
      <!-- Hero Section -->
      <div class="bg-white max-w-full h-screen flex items-center justify-center py-24 sm:py-32 mt-8">
        <div class="relative isolate px-6 lg:px-8">
          <div class="flex flex-col justify-left">
            <img src="@/assets/images/profile-img.png" alt="Profile Photo" class="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover shadow-2xl mb-8" />
            <div class="max-w-2xl text-left">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span class="typing-text" :class="{ 'typing-animation': startTyping }">{{ displayText }}</span>
                <span class="cursor" :class="{ 'blink': startTyping }">|</span>
              </h1>
              <p data-aos="fade-up" class="mt-6 text-lg leading-8 text-gray-600">
                I'm a passionate frontend developer with expertise in Vue.js, Javascript, TypeScript, and modern web technologies. 
                I love creating elegant solutions to complex problems and building delightful user experiences.
              </p>
              <div data-aos="fade-up" class="mt-4 flex items-center justify-left gap-x-6">
                <div class="contact-item w-6 h-6">
                  <a href="http://www.linkedin.com/in/alfiyata-86a6b11b1" target="_blank">
                    <img src="@/assets/images/linkedin-svg.svg" alt="LinkedIn" class="contact-svg"/>
                  </a>
                </div>
                <div class="contact-item w-6 h-6">
                  <a href="https://wa.me/089518976601" target="_blank">
                    <img src="@/assets/images/whatsapp-svg.svg" alt="WhatsApp" class="contact-svg"/>
                  </a>
                </div>
                <div class="contact-item w-6 h-6">
                  <a href="https://github.com/Alfiyata" target="_blank">
                    <img src="@/assets/images/github-svg.svg" alt="WhatsApp" class="contact-svg"/>
                  </a>
                </div>
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
