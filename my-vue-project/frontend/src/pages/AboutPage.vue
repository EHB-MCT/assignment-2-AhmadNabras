<template>
  <v-container class="about-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">About Color Palette Generator</h1>
      <p class="hero-subtitle">
        Empowering designers to create, explore, and stay ahead with data-driven color trends.
      </p>
    </div>

    <!-- Mission Section -->
    <v-row class="section mission-section">
      <v-col cols="12">
        <h2 class="section-title">Our Mission</h2>
        <p class="section-text">
          At CPG, our mission is to inspire creativity and provide valuable insights into color trends. By collecting data on user-created color palettes, we analyze which colors are most popular and capture the most attention. This helps designers make informed decisions and stay ahead of trends in their projects.
        </p>
        <p class="section-text">
          From graphic designers to UI/UX specialists and brand strategists, CPG is here to help you craft visually stunning and effective designs that resonate with your audience.
        </p>
      </v-col>
    </v-row>

    <!-- How It Works Section -->
    <v-row class="section how-it-works-section">
      <v-col cols="12">
        <h2 class="section-title">How It Works</h2>
        <ul class="section-list">
          <li>Create a custom palette with up to 5 colors.</li>
          <li>Save your palette to contribute to our database.</li>
          <li>Analyze trends to see which colors are most popular.</li>
        </ul>
        <p class="section-text">
          Our platform combines creativity and data to help you stay ahead of design trends.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-page {
  margin-top: 80px; /* Offset for fixed header */
  padding: 20px;
  text-align: center; /* Center all text */
}

.hero-section {
  background-color: #1976D2;
  color: white;
  padding: 50px 20px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 1.3rem;
  line-height: 1.8;
}

.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1976D2;
  margin-bottom: 20px;
}

.section-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
}

.section-list {
  list-style-type: none;
  padding: 0;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin: 0 auto; /* Center align the list */
  display: inline-block;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-text,
  .section-list {
    font-size: 1rem;
  }
}
</style>