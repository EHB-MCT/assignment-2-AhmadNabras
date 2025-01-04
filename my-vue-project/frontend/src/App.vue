<template>
  <v-app>
    <!-- Main Header -->
    <MainHeader />

    <!-- Main Content -->
    <router-view />
  </v-app>
</template>

<script>
import MainHeader from './components/MainHeader.vue';

export default {
  components: {
    MainHeader,
  },
};
</script>

<style scoped>
/* Ensure consistent padding for the main content */
.v-app {
  padding-top: 70px; /* Adjust for fixed header */
}
</style>
