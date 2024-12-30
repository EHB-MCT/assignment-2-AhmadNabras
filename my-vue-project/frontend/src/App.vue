<template>
  <v-app>
    <MainHeader />
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
