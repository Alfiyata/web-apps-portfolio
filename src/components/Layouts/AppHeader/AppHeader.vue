<template>
  <header class="bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{ 'shadow-md': scrolled }">
    <!-- <div v-if="showBanner" class="bg-indigo-600">
        <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex-1 text-center">
              <p class="text-white">
                🚧 The website will be updated gradually. 🚧
              </p>
            </div>
            <div class="ml-4">
              <button
                type="button"
                @click="showBanner = false"
                class="rounded-md p-1.5 text-white hover:bg-indigo-500 focus:outline-none"
              >
                <span class="sr-only">Dismiss</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> -->
    <nav v-if="!mobileMenuOpen" class="mx-auto flex w-full items-center justify-between px-8" aria-label="Global">
      <div>
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Contact</span>
          <div class="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 lg:justify-center lg:flex-1">
        <router-link to="/" class="text-sm/6 font-semibold text-gray-900" @click="mobileMenuOpen = false">Home</router-link>
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Portfolio
            <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>


          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <router-link :to="item.href" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </router-link>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <router-link to="/contact" class="text-sm/6 font-semibold text-gray-900" @click="mobileMenuOpen = false">Contact</router-link>
      </PopoverGroup>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel data-aos="fade-left" class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <div class="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">Home</router-link>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Portfolio
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <router-link v-for="item in [...products]" :key="item.name" :to="item.href" class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">{{ item.name }}</router-link>
                </DisclosurePanel>
              </Disclosure>
              <router-link to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">Contact</router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BuildingStorefrontIcon,
  ChatBubbleBottomCenterIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

import { ChevronDownIcon } from '@heroicons/vue/20/solid'
const products = [
  { name: 'OMS Dashboard', description: 'Build your own dashboard order management system', href: '/portfolio/oms', icon: BuildingStorefrontIcon },
  { name: 'CRM Dashboard', description: 'Create your own dashboard customer relationship management', href: '/portfolio/crm', icon: ChatBubbleBottomCenterIcon },
  { name: 'UI&UX', description: 'Design your own UI&UX', href: '#', icon: SquaresPlusIcon }
]

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const showBanner = ref(true);

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>