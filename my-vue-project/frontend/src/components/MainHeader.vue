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
import EventBus from "@/utils/EventBus";

export default {
  name: "MainHeader",
  data() {
    return {
      logoPath: require('@/assets/images/logo.png'),
      authState: {
        isAuthenticated: !!localStorage.getItem("token"),
        username: JSON.parse(localStorage.getItem("user"))?.username || "",
      },
    };
  },
  computed: {
    isAuthenticated() {
      return this.authState.isAuthenticated;
    },
    username() {
      return this.authState.username;
    },
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.authState.isAuthenticated = false;
      this.authState.username = "";
      EventBus.emit("auth-change");
      this.$router.push("/login");
    },
    updateAuthState() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.authState.isAuthenticated = !!localStorage.getItem("token");
      this.authState.username = user?.username || "";
    },
  },
  mounted() {
    EventBus.on("auth-change", this.updateAuthState);
    this.updateAuthState(); // Initialize state
  },
  beforeUnmount() {
    EventBus.off("auth-change", this.updateAuthState);
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  margin-right: 15px;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 40px;
}

.nav-btn {
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: #ffd700;
  color: #320a8d;
}

.auth-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 40px;
}




.auth-btn {
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: none;
  padding: 8px 15px;
  border: 1px solid rgb(32, 0, 114);
  background-color: #320a8d;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.auth-btn:hover {
  background-color: #ffd700;
  color: #320a8d;
}

.username {
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
