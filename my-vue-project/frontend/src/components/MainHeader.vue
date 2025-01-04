<template>
  <v-app-bar app class="header">
    <!-- Logo and Title -->
    <v-toolbar-title>
      <img :src="logoPath" alt="CPG Logo" class="logo" />
      <span class="title">CPG</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Navigation Buttons -->
    <div class="nav-container">
      <router-link to="/" class="nav-btn">Home</router-link>
      <router-link to="/about" class="nav-btn">About Us</router-link>
      <router-link to="/color-palettes" class="nav-btn">Color Palettes</router-link>
      <router-link to="/analytics" class="nav-btn">Analytics</router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      logoPath: require('@/assets/images/logo.png'), // Update with your logo path
    };
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(32, 0, 58); /* Dark blue background */
  color: white; /* White text color */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.logo {
  height: 50px; /* Adjust logo size */
  margin-right: 10px;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  vertical-align: middle;
}

.nav-container {
  display: flex;
  align-items: center;
 
}

.nav-btn {
  display: inline-block;
  color: black !important; /* Black text color */
  background-color: rgb(255, 255, 255); /* White background */
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: none;
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid #ccc; /* Optional border */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none; /* Remove underline */
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: #230068; /* Change background on hover */
  color: white !important; /* Change text color on hover */
}

.nav-btn:active {
  transform: scale(0.95); /* Add click animation */
}
</style>
