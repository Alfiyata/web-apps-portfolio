<template>
  <div>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Programing Skills & Technologies</h2>
        <p class="mt-4">Technologies I work with</p>
      </div>
      <div class="flex overflow-hidden space-x-16">
        <div class="flex space-x-16 some-element">
          <div v-for="(skill, i) in shuffledSkills1" :key="i" 
           class="text-center p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <img class="max-w-none" :src="skill.src" :alt="skill.alt" width="100" height="48">
        <p class="text-sm text-gray-600 mt-2">{{ skill.label }}</p>
          </div>
        </div>
        <div class="flex space-x-16 some-element" aria-hidden="true">
          <div v-for="(skill, i) in shuffledSkills2" :key="i" 
           class="text-center p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <img class="max-w-none" :src="skill.src" :alt="skill.alt" width="100" height="48">
        <p class="text-sm text-gray-600 mt-2">{{ skill.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const skills1 = [
  { src: '@/assets/logo/Vue.js.svg', alt: 'Vue.js', label: 'Vue.js' },
  { src: '@/assets/logo/React.svg', alt: 'React', label: 'React' },
  { src: '@/assets/logo/Ionic.svg', alt: 'Ionic', label: 'Ionic' },
  { src: '@/assets/logo/JavaScript.svg', alt: 'JavaScript', label: 'JavaScript' },
  { src: '@/assets/logo/TypeScript.svg', alt: 'TypeScript', label: 'TypeScript' },
  { src: '@/assets/logo/HTML5.svg', alt: 'HTML5', label: 'HTML5' },
  { src: '@/assets/logo/Tailwind CSS.svg', alt: 'Tailwind CSS', label: 'Tailwind CSS' },
  { src: '@/assets/logo/Laravel.svg', alt: 'Laravel', label: 'Laravel' },
  { src: '@/assets/logo/CodeIgniter.svg', alt: 'CodeIgniter', label: 'CodeIgniter' },
  { src: '@/assets/logo/Git.svg', alt: 'Git', label: 'Git' },
  { src: '@/assets/logo/github-svg.svg', alt: 'GitHub', label: 'GitHub' },
  { src: '@/assets/logo/Visual Studio Code (VS Code).svg', alt: 'VS Code', label: 'VS Code' },
  { src: '@/assets/logo/Postman.svg', alt: 'Postman', label: 'Postman' },
  { src: '@/assets/logo/Adobe Illustrator.svg', alt: 'Illustrator', label: 'Illustrator' },
  { src: '@/assets/logo/Adobe Photoshop.svg', alt: 'Photoshop', label: 'Photoshop' },
  { src: '@/assets/logo/Figma.svg', alt: 'Figma', label: 'Figma' },
]

const skills2 = [...skills1]

// Fisher-Yates shuffle
function shuffle(arr: Array<{ src: string; alt: string; label: string }>) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const shuffledSkills1 = computed(() => shuffle(skills1))
const shuffledSkills2 = computed(() => shuffle(skills2))
</script>
