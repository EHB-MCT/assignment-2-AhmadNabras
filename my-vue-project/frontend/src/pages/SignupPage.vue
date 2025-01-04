<template>
    <v-container class="signup-page">
      <div class="signup-card">
        <h1 class="signup-title">Sign Up</h1>
        <v-form @submit.prevent="register">
          <v-text-field
            v-model="username"
            label="Username"
            outlined
            dense
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            outlined
            dense
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            outlined
            dense
            required
          ></v-text-field>
          <v-btn color="primary" block large @click="register">Sign Up</v-btn>
        </v-form>
        <p class="login-link">
          Already have an account?
          <router-link to="/login">Login here</router-link>.
        </p>
      </div>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "SignupPage",
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async register() {
        try {
          await axios.post("http://localhost:5000/api/auth/register", {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          alert("User registered successfully!");
          this.$router.push("/login");
        } catch (error) {
          console.error("Error registering user:", error.response?.data?.message || error.message);
          alert(error.response?.data?.message || "Registration failed.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  .signup-card {
    background-color: white;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  .signup-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #1976d2;
    margin-bottom: 20px;
  }
  .login-link {
    margin-top: 20px;
    font-size: 0.9rem;
  }
  </style>
  