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

    <v-spacer></v-spacer>

    <!-- User Authentication -->
    <div class="auth-container">
      <span v-if="isAuthenticated" class="username">Welcome, {{ username }}</span>
      <v-btn v-if="!isAuthenticated" text class="auth-btn" @click="goToLogin">Login</v-btn>
      <v-btn v-if="isAuthenticated" text class="auth-btn" @click="logout">Logout</v-btn>
    </div>
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
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem("token");
    },
    username() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        return user && user.username ? user.username : "";
      } catch {
        return "";
      }
    },
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/login");
      window.location.reload(); 
    },
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(32, 0, 58); 
  color: white; 
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

.nav-container {
  display: flex;
  align-items: center;
}

.nav-btn {
  display: inline-block;
  color: black !important; 
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: none;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 5px; 
  text-decoration: none; 
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: #ead200; 
  color: #230068 !important; 
}

.nav-btn:active {
  transform: scale(0.95); 
}

.auth-btn {
  font-weight: bold;
  text-transform: none;
  background-color: #230068;
  color: aliceblue;
}

.auth-container{
  margin-right: 10px;
}

.auth-container span{
  color: #000000;
  margin-right: 50px;
}
</style>