# Netflix GPT 🎥

A Netflix clone built using **React** and styled with **Tailwind CSS**. Features include authentication, movie browsing, trailers, and personalized suggestions.

---

## 🚀 Tech Stack

- ⚛️ React (Create React App)
- 💨 Tailwind CSS
- 🔐 Firebase Authentication (or your auth method)
- 🎞️ TMDB API (for movie data)

---

## 🔥 Features

### 🧑‍💻 Authentication
- Login / Sign Up form
- Redirect to **Browse** page after successful login
- Protected Routes: Unauthenticated users are redirected to login/signup

### 🎬 Browse Page (Only for Authenticated Users)
- **Header**
- **Main Movie Section**
  - Trailer in the background
  - Title & Description
- **Movie Suggestions**
  - Vertically scrollable movie list (category-wise)


## 📝 Components & Resources
  - Header
  - Routing
  - Login Form
  - Signup Form
  - Form Validation
  - useRef() hook
  - Firebase hosting & authentication
  - Form Validation using Yep and Formik Library
  - Setup redux store
  - Sign In/Sign Up authentication using firebase
  - updateProfile API of Firebase
  - BugFix : Redirect the logged-in user to the browse page if tries to go back to login page 
  - Add all constants to constants file
  - Unsubscribe to onAuthStateChange inside useEffect()
---

## 📂 Project Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/netflix-gpt.git
   cd netflix-gpt
