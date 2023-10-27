<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer.vue';
</script>

<template>
  <Header v-if="!isAdminPanel()" />
  <RouterView />
  <Footer v-if="!isAdminPanel()" />
</template>
<script>
export default {
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    
  },
  methods: {
    isAdminPanel() {
      const currentPath = window.location.pathname;
      const adminPanelSubdirectory = '/admin-panel';
      return currentPath.startsWith(adminPanelSubdirectory);
    }
  }
}
</script>

<style scoped></style>