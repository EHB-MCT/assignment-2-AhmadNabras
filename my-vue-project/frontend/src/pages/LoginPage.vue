<template>
    <v-container class="auth-page">
      <h1 class="auth-title">Login</h1>
      <v-form>
        <v-text-field
          label="Email"
          v-model="email"
          type="email"
          outlined
          class="auth-input"
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          outlined
          class="auth-input"
        ></v-text-field>
        <v-btn color="primary" block @click="login" class="auth-btn">Login</v-btn>
      </v-form>
      <p class="auth-footer">
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      login() {
        console.log("Login functionality here");
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-page {
    max-width: 400px;
    margin: 100px auto;
    text-align: center;
  }
  .auth-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  .auth-input {
    margin-bottom: 15px;
  }
  .auth-btn {
    margin-top: 10px;
  }
  .auth-footer {
    margin-top: 20px;
  }
  .auth-footer a {
    color: #1976d2;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  