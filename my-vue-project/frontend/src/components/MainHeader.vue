<template>
  <v-app-bar app color="primary" class="header">
    <!-- Logo en Titel -->
    <v-toolbar-title>
      <img :src="logoPath" alt="CPG Logo" class="logo" />
      <span class="title">CPG</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Navigatieknoppen -->
    <v-btn text class="nav-btn" :to="{ path: '/' }">Home</v-btn>
    <v-btn text class="nav-btn" :to="{ path: '/about' }">About Us</v-btn>
    <v-btn text class="nav-btn" :to="{ path: '/color-palettes' }">Color Palettes</v-btn>
    <v-btn text class="nav-btn" :to="{ path: '/analytics' }">Analytics</v-btn>
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
  background-color: rgb(32, 0, 58) !important; 
  color: white !important; 
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
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

.nav-btn {
  color: #FFD700 !important; 
  font-weight: bold; 
  font-size: 1.2rem; 
  text-transform: none; 
  margin: 0 10px; 
  transition: color 0.3s ease;
}

.nav-btn:hover {
  color: #FF4500 !important; 
}
</style>
