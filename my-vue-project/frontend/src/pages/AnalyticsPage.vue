<template>
  <v-container class="analytics-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">Color Group Usage</h1>
    </div>

    <!-- Chart Section -->
    <div class="chart-container">
      <canvas id="colorGroupBarChart"></canvas>
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
      chartInstance: null, // Houd de grafiekinstantie bij
      colorMap: {
        Red: "#FF5733",
        Orange: "#FF8C00",
        Yellow: "#FFD700",
        Green: "#008000",
        Blue: "#0000FF",
        Purple: "#800080",
        Pink: "#FFC0CB",
        Brown: "#8B4513",
        Gray: "#808080",
        Black: "#000000",
        White: "#FFFFFF",
      },
    };
  },
  methods: {
    async fetchColorGroupData() {
      try {
        const response = await axios.get("http://localhost:5000/api/colorgroups");
        const colorGroups = response.data;

        const labels = colorGroups.map((group) => group.group);
        const data = colorGroups.map((group) => group.count);

        // Kies hier de gewenste kleurstrategie:
        const backgroundColors = labels.map(
          (label) => this.colorMap[label] || "#CCCCCC" // Gebruik de kleur uit de mapping of een fallbackkleur
        );

        this.renderBarChart(labels, data, backgroundColors);
      } catch (error) {
        console.error("Error fetching color group data:", error);
      }
    },
    renderBarChart(labels, data, backgroundColors) {
      const ctx = document.getElementById("colorGroupBarChart").getContext("2d");

      // Vernietig de bestaande grafiek als deze al bestaat
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Color Group Usage",
              data,
              backgroundColor: backgroundColors, // Stel de achtergrondkleur in
              borderColor: "rgba(0, 0, 0, 0.1)",
              borderWidth: 2,
              barThickness: 40,
              hoverBackgroundColor: "#6FA3EF",
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
              labels: {
                color: "#444",
                font: {
                  size: 14,
                  weight: "600",
                },
              },
            },
            tooltip: {
              backgroundColor: "#fff",
              titleColor: "#000",
              bodyColor: "#333",
              borderColor: "#ddd",
              borderWidth: 1,
              titleFont: {
                size: 16,
                weight: "bold",
              },
              bodyFont: {
                size: 14,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Color Groups",
                color: "#555",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#666",
                font: {
                  size: 14,
                },
              },
            },
            y: {
              beginAtZero: true,
              max: 50, // Zorg ervoor dat de maximale waarde 100 is
              ticks: {
                stepSize: 5, // Zet de stapgrootte op 10
                color: "#666",
                font: {
                  size: 14,
                },
              },
              title: {
                display: true,
                text: "Usage Count",
                color: "#555",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
              grid: {
                color: "#ddd",
                borderDash: [5, 5],
              },
            },
          },
        },
      });
    },
  },
  mounted() {
    this.fetchColorGroupData();
  },
  beforeUnmount() {
    // Vernietig de grafiek bij het verlaten van de pagina
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

/* Hero Title Styling */
.hero-section {
  text-align: center;
  background-color: #1976d2;
  color: white;
  padding: 30px 20px;
  margin-bottom: 40px;
  margin-top: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Chart Container Styling */
.chart-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

canvas {
  max-width: 100%;
  height: 500px;
}
</style>
