<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <div class="hero">
        <div class="overlay"></div>
        <v-container class="content text-center">
          <h1 class="title text-white">
            Ontwerp jouw unieke kleurenpalet
          </h1>
          <p class="subtitle text-white">
            Begin met het maken van kleurencombinaties die passen bij jouw stijl of project.
          </p>
          <v-btn
            color="primary"
            large
            class="mt-4"
            @click="navigateToPalettes"
            aria-label="Begin met ontwerpen"
          >
            Let's Start
          </v-btn>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    navigateToPalettes() {
      this.$router.push("/color-palettes");
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  background: url('@/assets/images/background-image.png') no-repeat center center;
  background-size: cover;
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
}

.title {
  font-size: 3rem; 
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.5rem; 
  margin-bottom: 2rem;
}
</style>
