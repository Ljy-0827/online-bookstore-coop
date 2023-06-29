<template>
  <RouterView />
  <RouterLink to="/"></RouterLink>
</template>

<script setup>
import {getImageUrl} from "@/utils/utils.js";
import { RouterLink, RouterView } from 'vue-router';
import HomePage from "@/components/HomePage.vue";

</script>

<style scoped>

</style>
