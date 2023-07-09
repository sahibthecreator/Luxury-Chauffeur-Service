<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import 'bootstrap/dist/css/bootstrap.css'
</script>

<template>
  <Header></Header>
  <RouterView />
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