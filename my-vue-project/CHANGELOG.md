# Changelog

All notable changes to this project will be documented in this file.

---

## [1.0.0] - 2024-12-28

### MAJOR
- Initial release of the **Color Palette Generator** project.
- Core functionality includes:
  - Generate random color palettes.
  - Lock and unlock colors.
  - View and select shades of colors.
  - Save color palettes to the database.
  - Download palettes as JPG images.
  - User authentication system with login and signup features.
  - Analytics page for viewing usage statistics of saved palettes.

---

### MINOR
- Added "Save Palette" button to combine saving palettes to the database and downloading them as a JPG file.
- Improved navigation: Restricted the Analytics page to authenticated users only.
- Enhanced shades functionality to mimic the behavior seen on **Coolors**.
- Styled login, signup, and main pages for better user experience.

---

### PATCH
- Fixed bug where locked colors also displayed shades on click.
- Resolved issue with `chart.js` throwing errors when navigating between pages.
- Fixed "welcome username" text not updating after login until refresh.
- Optimized the app to prevent redundant API calls.

---

## [Unreleased]

### Planned Changes
- Add user profile customization to save favorite palettes.
- Implement dark mode toggle for the app.
- Introduce more chart types in the Analytics page.

---

### How to Use Semantic Versioning:
- **MAJOR**: Introduce incompatible API changes (e.g., completely revamp the app structure or database schema).
- **MINOR**: Add functionality in a backward-compatible manner (e.g., new features or UI enhancements).
- **PATCH**: Make backward-compatible bug fixes (e.g., resolve issues or optimize code).

---