import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
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
      path: '/luxury-car-hire',
      name: 'Car Hire',
      component: () => import('../views/CarRentView.vue')
    },
    {
      path: '/wedding-car-hire',
      name: 'Wedding Car Hire',
      component: () => import('../views/WeddingCarView.vue')
    },
    {
      path: '/authentication',
      name: 'Authentication',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/property-management',
      name: 'Property Management',
      component: () => import('../views/PropertyView.vue')
    },
    {
      path: '/book-now',
      name: 'Book Now',
      component: () => import('../views/BookNowView.vue')
    },
    {
      path: '/my-account',
      name: 'My Account',
      component: () => import('../views/MyAccountView.vue')
    },
    {
      path: '/details/:carName',
      name: 'Detailed Car Page',
      component: () => import('../views/CarDetailedView.vue')
    },
    {
      path: '/admin-panel/dashboard',
      name: 'Admin Dashboard',
      component: () => import('../views/AdminPanel/DashboardView.vue')
    },
    {
      path: '/admin-panel/login',
      name: 'Admin Login',
      component: () => import('../views/AdminPanel/LoginView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: () => import('../views/PrivacyPolicyView.vue')
    },
    {
      path: '/terms-conditions',
      name: 'Terms Conditions',
      component: () => import('../views/TermsConditionsView.vue')
    },
    {
      path: '/admin-panel/test',
      name: 'Terms Conditions',
      component: () => import('../views/AdminPanel/test.vue')
    },
  ]
})

export default router
