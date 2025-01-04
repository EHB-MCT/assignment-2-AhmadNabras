<template>
    <v-container class="login-page">
      <v-card class="login-card" elevation="3">
        <v-card-title class="text-h5">Login</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
              outlined
            ></v-text-field>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <v-btn color="primary" block type="submit">Login</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <p>Don't have an account?</p>
          <v-btn text color="secondary" @click="navigateToSignup">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("http://localhost:5000/api/auth/login", {
            email: this.email,
            password: this.password,
          });
  
          // Save token and username in localStorage
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify({ username: response.data.username }));
  
          // Navigate to home page
          this.$router.push("/");
          window.location.reload(); // Ensure header updates after login
        } catch (error) {
          this.errorMessage = error.response?.data?.message || "Login failed. Please try again.";
        }
      },
      navigateToSignup() {
        this.$router.push("/signup");
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .login-card {
    width: 400px;
    padding: 20px;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  