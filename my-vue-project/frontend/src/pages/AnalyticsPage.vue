<template>
  <v-container class="analytics-page">
    <div class="hero-section">
      <h1 class="hero-title">Color Usage</h1>
    </div>

    <div class="chart-container">
      <canvas id="colorUsageBarChart"></canvas>
    </div>
  </v-container>
</template>

<script>
import Chart from "chart.js/auto";
import axios from "axios";

export default {
  name: "AnalyticsPage",
  data() {
    return {
      chartInstance: null,
    };
  },
  methods: {
    async fetchColorData() {
      try {
        const response = await axios.get("http://localhost:5000/api/colors");
        const colorData = response.data;

        const labels = colorData.map((entry) => entry.color);
        const data = colorData.map((entry) => entry.count);

        this.renderBarChart(labels, data);
      } catch (error) {
        console.error("Error fetching color data:", error);
      }
    },
    renderBarChart(labels, data) {
      const ctx = document.getElementById("colorUsageBarChart").getContext("2d");

      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Color Usage Count",
              data,
              backgroundColor: labels,
              borderColor: "rgba(0, 0, 0, 0.1)",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Colors",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Usage Count",
              },
            },
          },
        },
      });
    },
  },
  mounted() {
    this.fetchColorData();
  },
  beforeUnmount() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  },
};
</script>

<style scoped>
.analytics-page {
  padding: 40px 20px;
  text-align: center;
  background-color: #f9f9f9;
}
.hero-section {
  text-align: center;
  background-color: #1976d2;
  color: white;
  padding: 30px 20px;
  margin-bottom: 40px;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
}
.chart-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
}
canvas {
  max-width: 100%;
  height: 400px;
}
</style>
