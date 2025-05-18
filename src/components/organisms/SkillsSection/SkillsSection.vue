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
import VueLogo from '@/assets/logo/Vue.js.svg'
import ReactLogo from '@/assets/logo/React.svg'
import IonicLogo from '@/assets/logo/Ionic.svg'
import JavaScriptLogo from '@/assets/logo/JavaScript.svg'
import TypeScriptLogo from '@/assets/logo/TypeScript.svg'
import HTMLLogo from '@/assets/logo/HTML5.svg'
import TailwindLogo from '@/assets/logo/Tailwind CSS.svg'
import LaravelLogo from '@/assets/logo/Laravel.svg'
import CodeIgniterLogo from '@/assets/logo/CodeIgniter.svg'
import GitLogo from '@/assets/logo/Git.svg'
import GitHubLogo from '@/assets/logo/github-svg.svg'
import VSCodeLogo from '@/assets/logo/Visual Studio Code (VS Code).svg'
import PostmanLogo from '@/assets/logo/Postman.svg'
import IllustratorLogo from '@/assets/logo/Adobe Illustrator.svg'
import PhotoshopLogo from '@/assets/logo/Adobe Photoshop.svg'
import FigmaLogo from '@/assets/logo/Figma.svg'

const skills1 = [
  { src: VueLogo, alt: 'Vue.js', label: 'Vue.js' },
  { src: ReactLogo, alt: 'React', label: 'React' },
  { src: IonicLogo, alt: 'Ionic', label: 'Ionic' },
  { src: JavaScriptLogo, alt: 'JavaScript', label: 'JavaScript' },
  { src: TypeScriptLogo, alt: 'TypeScript', label: 'TypeScript' },
  { src: HTMLLogo, alt: 'HTML5', label: 'HTML5' },
  { src: TailwindLogo, alt: 'Tailwind CSS', label: 'Tailwind CSS' },
  { src: LaravelLogo, alt: 'Laravel', label: 'Laravel' },
  { src: CodeIgniterLogo, alt: 'CodeIgniter', label: 'CodeIgniter' },
  { src: GitLogo, alt: 'Git', label: 'Git' },
  { src: GitHubLogo, alt: 'GitHub', label: 'GitHub' },
  { src: VSCodeLogo, alt: 'VS Code', label: 'VS Code' },
  { src: PostmanLogo, alt: 'Postman', label: 'Postman' },
  { src: IllustratorLogo, alt: 'Illustrator', label: 'Illustrator' },
  { src: PhotoshopLogo, alt: 'Photoshop', label: 'Photoshop' },
  { src: FigmaLogo, alt: 'Figma', label: 'Figma' },
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
