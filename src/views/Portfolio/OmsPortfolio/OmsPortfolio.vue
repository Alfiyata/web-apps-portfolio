<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32 mt-8">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pt-4 lg:pr-8">
            <div class="lg:max-w-lg">
              <h2 class="text-base/7 font-semibold text-indigo-600">Order Management System OMS</h2>
              <p class="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">OMS Dashboard</p>
              <p class="mt-2 text-lg/8 text-gray-600">A web-based dashboard for an Order Management System (OMS) that enables businesses to efficiently manage orders, track inventory, monitor fulfillment status, and streamline operations. Designed for clarity and ease of use, it supports real-time updates and data-driven decision-making.</p>
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
          <img data-aos="zoom-in" src="@/assets/images/oms-dashboard.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>
      </div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <div class="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <div class="text-center">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="@/assets/logo/React.svg" alt="Transistor" width="158" height="48">
                <p class="text-sm text-gray-600 mt-2">React.js</p>
              </div>
              <div class="text-center">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="@/assets/logo/Next.js.svg" alt="Transistor" width="158" height="48">
                <p class="text-sm text-gray-600 mt-2">Next.js</p>
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
  import { BuildingStorefrontIcon, ShoppingBagIcon, DeviceTabletIcon } from '@heroicons/vue/20/solid'
  
  const features = [
    {
      name: 'Store integration',
      description:
        'Integrate with store to get data and update status of order.',
      icon: BuildingStorefrontIcon,
    },
    {
      name: 'Inventory stock',
      description: 'Check inventory stock and update stock when order is created.',
      icon: ShoppingBagIcon,
    },
    {
      name: 'Order status and tracking',
      description: 'Order status and tracking with real time data.',
      icon: DeviceTabletIcon,
    },
  ]
  </script>