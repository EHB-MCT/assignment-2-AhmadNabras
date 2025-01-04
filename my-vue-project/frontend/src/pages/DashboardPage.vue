<template>
    <v-container class="dashboard-page">
      <h1 class="title">Welcome, {{ user?.username || "User" }}!</h1>
      <v-btn color="primary" @click="handleLogout">Log Out</v-btn>
  
      <h2 class="subtitle">Your Color Palettes</h2>
      <div class="palettes-container">
        <div
          v-for="(palette, index) in palettes"
          :key="index"
          class="palette-box"
        >
          <div
            v-for="(color, colorIndex) in palette.colors"
            :key="colorIndex"
            class="palette-color"
            :style="{ backgroundColor: color }"
          ></div>
        </div>
      </div>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "DashboardPage",
    data() {
      return {
        user: null,
        palettes: [],
      };
    },
    methods: {
      async fetchUserData() {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get("http://localhost:5000/auth/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
  
          this.user = response.data.user;
          this.palettes = response.data.palettes;
        } catch (error) {
          alert(error.response?.data?.message || "Failed to fetch user data.");
          this.$router.push("/login");
        }
      },
      handleLogout() {
        localStorage.removeItem("token");
        this.$router.push("/login");
      },
    },
    mounted() {
      this.fetchUserData();
    },
  };
  </script>
  
  <style scoped>
  .dashboard-page {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .subtitle {
    margin-top: 30px;
    font-size: 1.5rem;
  }
  
  .palettes-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .palette-box {
    display: flex;
    width: 120px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .palette-color {
    flex: 1;
    height: 100%;
  }
  </style>
  