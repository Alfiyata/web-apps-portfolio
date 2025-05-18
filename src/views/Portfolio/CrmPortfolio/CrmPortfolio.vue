<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32 mt-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pt-4 lg:pr-8">
            <div class="lg:max-w-lg">
              <h2 class="text-base/7 font-semibold text-indigo-600">Customer Relationship Management CRM</h2>
              <p class="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">Dashboard and Analytics</p>
              <p class="mt-2 text-lg/8 text-gray-600">A web-based Customer Relationship Management (CRM) system designed to help businesses manage customer relationships, track interactions, and analyze engagement data through an intuitive dashboard.</p>

              <div class="mt-10">
                <p class="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">Application Messaging CRM</p>
                <p class="mt-2 text-lg/8 text-gray-600">An integrated messaging feature that enables users to send WhatsApp messages—including text, images, videos, voice notes, and documents—directly from the application for seamless communication.</p>
              </div>

              <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <component :is="feature.icon" class="absolute top-1 left-1 size-5 text-indigo-600" aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="relative">
            <div>
              <img data-aos="zoom-in" src="@/assets/images/crm-dashboard.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
            </div>
            <div class="grid grid-cols-2 gap-4 relative" style="margin-top: -78px;">
              <div>
                <img data-aos="zoom-in" src="@/assets/images/android-msg-2.png" alt="CRM Message" class="w-[18rem] max-w-none">
              </div>
              <div >
                <img data-aos="zoom-in" src="@/assets/images/android-msg-1.png" alt="CRM Message" class="w-[18rem] max-w-none ">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- section tools -->
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <div class="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <div class="text-center">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="@/assets/logo/Vue.js.svg" alt="Transistor" width="158" height="48">
                <p class="text-sm text-gray-600 mt-2">Vue.js</p>
              </div>
              <div class="text-center">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="@/assets/logo/Ionic.svg" alt="Transistor" width="158" height="48">
                <p class="text-sm text-gray-600 mt-2">Ionic</p>
              </div>
              <div class="text-center">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="@/assets/logo/JavaScript.svg" alt="Transistor" width="158" height="48">
                <p class="text-sm text-gray-600 mt-2">JavaScript</p>
              </div>
              <div class="text-center">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="@/assets/logo/Tailwind CSS.svg" alt="Transistor" width="158" height="48">
                <p class="text-sm text-gray-600 mt-2">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ChatBubbleBottomCenterTextIcon, InboxArrowDownIcon, DocumentChartBarIcon } from '@heroicons/vue/20/solid'
  
  const features = [
    {
      name: 'Manage Customer',
      description:
        'Manage customer data, including contact information, purchase history, and support requests.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Broadcast Messages',
      description: 'Send broadcast messages to all customers by WhatsApp, and push notifications.',
      icon: InboxArrowDownIcon,
    },
    {
      name: 'Analytics',
      description: 'Analyze customer data to gain insights and make informed decisions.',
      icon: DocumentChartBarIcon,
    },
  ]
  </script>