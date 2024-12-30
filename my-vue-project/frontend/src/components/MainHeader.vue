<template>
  <v-app-bar
    app
    class="header"
  >
    <!-- Logo and Title -->
    <v-toolbar-title>
      <img :src="logoPath" alt="CPG Logo" class="logo" />
      <span class="title"></span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      logoPath: require('@/assets/images/logo.png'), 
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #1976D2 !important; 
  color: white !important; 
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.logo {
  height: 50px; 
  margin-right: 10px;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  vertical-align: middle;
}
</style>
