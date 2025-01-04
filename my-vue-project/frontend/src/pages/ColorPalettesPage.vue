<template>
  <v-container fluid class="coolors-page">
    <!-- Palette Section -->
    <div class="palette">
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="color-block"
        :style="{ backgroundColor: color.hex }"
      >
        <div class="color-info">
          <p class="hex-code">{{ color.hex }}</p>
          <div class="color-actions">
            <!-- Lock/Unlock Button -->
            <img
              :src="color.locked ? lockIcon : unlockIcon"
              alt="Lock Icon"
              class="icon"
              @click="toggleLock(index)"
            />

            <!-- Color Shades Button -->
            <v-menu
              v-model="shadesVisible[index]"
              :close-on-content-click="false"
              activator="parent"
              transition="scale-transition"
              origin="center top"
              max-width="200"
            >
              <template v-slot:activator="{ on, attrs }">
                <img
                  :src="shadesIcon"
                  alt="Shades Icon"
                  class="icon"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-list>
                <v-list-item
                  v-for="(shade, shadeIndex) in generateShades(color.hex)"
                  :key="shadeIndex"
                  :style="{ backgroundColor: shade, color: getTextColor(shade) }"
                  @click="selectShade(index, shade)"
                >
                  {{ shade }}
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions Bar -->
    <div class="actions-bar">
      <v-btn color="primary" large @click="generateColors">Generate</v-btn>
      <v-btn color="success" large @click="savePalette">Save Palette</v-btn>
    </div>

    <!-- Success Popup -->
    <div v-if="showSuccessPopup" class="success-popup">
      Palette saved successfully!
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ColorPalettesPage",
  data() {
    return {
      colors: [
        { hex: "#FF5733", locked: false },
        { hex: "#33FF57", locked: false },
        { hex: "#3357FF", locked: false },
        { hex: "#F3FF33", locked: false },
        { hex: "#FF33A8", locked: false },
      ],
      shadesVisible: [false, false, false, false, false], // Control shades visibility
      lockIcon: require("@/assets/images/lock.png"), // Lock icon path
      unlockIcon: require("@/assets/images/unlock.png"), // Unlock icon path
      shadesIcon: require("@/assets/images/shades.png"), // Shades icon path
      showSuccessPopup: false, // Success popup visibility
    };
  },
  methods: {
    generateColors() {
      this.colors = this.colors.map((color) =>
        color.locked
          ? color
          : { hex: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`, locked: false }
      );
    },
    toggleLock(index) {
      this.colors[index].locked = !this.colors[index].locked;
    },
    generateShades(hex) {
      const shades = [];
      for (let i = 5; i >= 1; i--) {
        const factor = i * 0.15;
        shades.push(this.shadeColor(hex, -factor)); // Darker shades
      }
      for (let i = 1; i <= 5; i++) {
        const factor = i * 0.15;
        shades.push(this.shadeColor(hex, factor)); // Lighter shades
      }
      return shades;
    },
    shadeColor(color, percent) {
      const num = parseInt(color.slice(1), 16);
      const amt = Math.round(2.55 * percent * 100);

      // Helper function to clamp values between 0 and 255
      const clamp = (value) => Math.max(0, Math.min(255, value));

      const R = clamp((num >> 16) + amt);
      const G = clamp(((num >> 8) & 0x00ff) + amt);
      const B = clamp((num & 0x0000ff) + amt);

      return `#${(
        0x1000000 +
        R * 0x10000 +
        G * 0x100 +
        B
      )
        .toString(16)
        .slice(1)}`;
    },
    getTextColor(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance > 0.5 ? "#000000" : "#FFFFFF";
    },
    async savePalette() {
      const paletteColors = this.colors.map((color) => color.hex);

      try {
        await axios.post("http://localhost:5000/api/palettes", { colors: paletteColors });
        this.showSuccessPopup = true; // Show success popup
        setTimeout(() => {
          this.showSuccessPopup = false; // Hide popup after 2-3 seconds
        }, 3000);
      } catch (error) {
        console.error("Error saving palette:", error);
        alert("Failed to save palette.");
      }
    },
    selectShade(index, shade) {
      // Replace the color hex with the selected shade
      this.colors[index].hex = shade;
    },
  },
};
</script>

<style scoped>
.coolors-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
}

.palette {
  display: flex;
  flex: 1;
}

.color-block {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
}

.color-block:hover {
  transform: scale(1.02);
}

.color-info {
  position: absolute;
  bottom: 20px;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.hex-code {
  margin: 0;
}

.color-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.icon {
  height: 24px;
  width: 24px;
  cursor: pointer;
}

.actions-bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

/* Success Popup Styling */
.success-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4caf50;
  color: white;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  z-index: 1000;
}
</style>
