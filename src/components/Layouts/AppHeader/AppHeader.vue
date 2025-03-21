<template>
  <header class="bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{ 'shadow-md': scrolled }">
    <nav class="mx-auto flex w-full items-center justify-between px-8" aria-label="Global">
      <div>
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Contact</span>
          <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
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
                    <a :href="item.href" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
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
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Contact</span>
            <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
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
                  <DisclosureButton v-for="item in [...products]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
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
  ChartPieIcon,
  ChatBubbleBottomCenterIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const products = [
  { name: 'OMS Dashboard', description: 'Build your own dashboard order management system', href: '#', icon: ChartPieIcon },
  { name: 'CRM Dashboard', description: 'Create your own dashboard customer relationship management', href: '#', icon: ChatBubbleBottomCenterIcon },
  { name: 'UI&UX', description: 'Design your own UI&UX', href: '#', icon: SquaresPlusIcon }
]
  
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

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