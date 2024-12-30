<template>
  <v-app-bar app color="primary" class="header">
    <!-- Logo and Title -->
    <v-toolbar-title>
      <img :src="logoPath" alt="CPG Logo" class="logo" />
      <span class="title">CPG</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Navigation Buttons -->
    <v-btn text class="nav-btn" :to="{ path: '/' }">Home</v-btn>
    <v-btn text class="nav-btn" :to="{ path: '/about' }">About Us</v-btn>
    <v-btn text class="nav-btn" :to="{ path: '/color-palettes' }">Color Palettes</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      logoPath: require('@/assets/images/logo.png'), // Dynamically resolve the logo
    };
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(32, 0, 58) !important; /* Ensure the header has a blue background */
  color: white !important; /* Ensure text is white */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.logo {
  height: 50px; /* Adjust size as needed */
  margin-right: 10px;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  vertical-align: middle;
}

.nav-btn {
  color: red !important; /* Set buttons' text color to red */
  font-weight: bold; /* Make buttons more prominent */
  font-size: 1.2rem; /* Increase font size for better visibility */
  text-transform: none; /* Keep text in original casing */
  margin: 0 10px; /* Add spacing between buttons */
}

.nav-btn:hover {
  color: yellow !important; /* Highlight buttons on hover */
}
</style>
