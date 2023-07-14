import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: () => import('../views/ContactUsView.vue')
    },
    {
      path: '/airport-transfer',
      name: 'Airport Transfer',
      component: () => import('../views/AirportTransferView.vue')
    },
    {
      path: '/car-rent',
      name: 'Car Rent',
      component: () => import('../views/CarRentView.vue')
    },
    {
      path: '/wedding-car-hire',
      name: 'Wedding Car Hire',
      component: () => import('../views/WeddingCarView.vue')
    }
  ]
})

export default router
