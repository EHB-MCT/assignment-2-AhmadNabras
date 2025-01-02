<template>
    <div class="line-chart">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from "chart.js/auto";
  
  export default {
    name: "LineChart",
    props: {
      groupCounts: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        chartInstance: null, // Houd een referentie naar de grafiek
      };
    },
    mounted() {
      this.renderBarChart();
    },
    beforeUnmount() {
      // Controleer of de grafiek-instance bestaat en vernietig deze
      if (this.chartInstance) {
        this.chartInstance.destroy();
        this.chartInstance = null; // Zorg ervoor dat de instance volledig wordt gewist
      }
    },
    methods: {
      renderBarChart() {
        const canvas = this.$refs.chartCanvas;
  
        if (!canvas) {
          console.error("Canvas element niet gevonden!");
          return;
        }
  
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          console.error("Kan geen 2D context krijgen!");
          return;
        }
  
        // Vernietig bestaande grafiek om dubbele initialisaties te voorkomen
        if (this.chartInstance) {
          this.chartInstance.destroy();
        }
  
        // Maak een nieuwe grafiek
        this.chartInstance = new Chart(ctx, {
          type: "bar",
          data: {
            labels: Object.keys(this.groupCounts),
            datasets: [
              {
                label: "Usage Count",
                data: Object.values(this.groupCounts),
                backgroundColor: [
                  "#FF5733", "#FF8C00", "#FFD700", "#008000", "#0000FF",
                  "#800080", "#FFC0CB", "#8B4513", "#808080", "#000000", "#FFFFFF",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .line-chart {
    width: 100%;
    max-width: 800px;
    margin: auto;
  }
  </style>
  