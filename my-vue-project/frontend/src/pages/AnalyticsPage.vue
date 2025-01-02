<template>
  <v-container class="analytics-page">
    <h1 class="title">Color Group Usage Analytics</h1>
    <LineChart :groupCounts="groupCounts" />
  </v-container>
</template>

<script>
import axios from "axios";
import LineChart from "@/components/LineChart.vue";

export default {
  name: "AnalyticsPage",
  components: {
    LineChart,
  },
  data() {
    return {
      colorGroups: [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Pink",
        "Brown",
        "Gray",
        "Black",
        "White",
      ],
      groupCounts: {},
    };
  },
  methods: {
    async fetchColorGroupData() {
      try {
        const response = await axios.get("http://localhost:5000/api/palettes");
        const palettes = response.data;

        // Initialize group counts
        const groupCounts = this.colorGroups.reduce((acc, group) => {
          acc[group] = 0;
          return acc;
        }, {});

        // Count color occurrences
        palettes.forEach((palette) => {
          palette.colors.forEach((color) => {
            const group = this.getColorGroup(color);
            if (group) {
              groupCounts[group]++;
            }
          });
        });

        this.groupCounts = groupCounts;
      } catch (error) {
        console.error("Error fetching palettes:", error);
      }
    },
    getColorGroup(color) {
      const colorGroupMap = {
        Red: /^#(FF|F[0-9A-E]|E[0-9A-F])[0-9A-F]{4}$/i,
        Orange: /^#(FF|F[0-9A-E]|E[0-9A-F])[89AB][0-9A-F]{3}$/i,
        Yellow: /^#(FF|F[0-9A-E]|E[0-9A-F])([CD]|[C-F][0-9A-F])[0-9A-F]{2}$/i,
        Green: /^#([3-6][0-9A-F]|00FF)[0-9A-F]{4}$/i,
        Blue: /^#([0-9A-F]{2}[6-9][0-9A-F]|0000FF)[0-9A-F]{2}$/i,
        Purple: /^#(8[0-9A-F]{2}|9[0-9A-F]{2}|800080)[0-9A-F]{2}$/i,
        Pink: /^#(FF[0-9A-F]{2}[A-F][0-9A-F]|FFC0CB)$/i,
        Brown: /^#(8B4513|A52A2A|D2691E|DEB887|F4A460|BC8F8F)$/i,
        Gray: /^#([6-9A-F][0-9A-F]{5}|808080)$/i,
        Black: /^#000000$/i,
        White: /^#FFFFFF$/i,
      };

      return Object.keys(colorGroupMap).find((group) =>
        colorGroupMap[group].test(color)
      );
    },
  },
  mounted() {
    this.fetchColorGroupData();
  },
};
</script>

<style scoped>
.analytics-page {
  padding: 40px;
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
