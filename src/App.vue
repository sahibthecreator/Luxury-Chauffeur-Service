<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
<script>
export default {
  data() {
    return {
      token: ''
    }
  },
  mounted() {

  }
}
</script>

<style scoped></style>