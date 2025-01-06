# **Color Palette Generator (CPG)**

## **Overview**
The Color Palette Generator is a web application designed to let users create and save unique color palettes. When a user generates a palette and clicks the "Save Palette" button, the following actions take place:

- Palette Download: The palette is immediately downloaded to the user’s computer as a JPG file for easy access  and sharing.

- Analytics Tracking: Simultaneously, the color palette data is sent to the backend, where it is added to a centralized database. This data helps track which colors and palettes are most frequently chosen by users.

A dedicated Analytics Page provides insights into color trends and user preferences. However, this page is accessible only to users with a login account, ensuring secure and personalized access to the analytics

---

## **Features**
- **Generate Color Palettes**: Create random color palettes.
- **Save Palettes**: Save color palettes associated with a user account.
- **Choose Shades**: Select shades for any color.
- **Export**: Download palettes as an image (JPG).
- **Analytics**: View an overview of color usage. **(Login required)**
- **Authentication**: Log in and register to see analystics.

---

## **Login Requirement**
To view the **Analytics** page, users must log in. If a user does not have an account, they can create one by signing up on the **Sign Up** page.

---

## **Technologies**
### **Frontend**
- Vue.js
- Vuetify (Material Design Framework)
- Chart.js (for analytics)

### **Backend**
- Node.js
- Express.js
- MongoDB (using Mongoose as ORM)

---

## **Installation**
### **Requirements**
- Node.js
- MongoDB
- A text editor, such as VS Code

### **Steps**
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
