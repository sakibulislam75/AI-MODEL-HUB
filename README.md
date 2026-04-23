<div align="center">

# 🤖 AI Model Hub

### Explore, Compare & Subscribe to Powerful AI Models

**A modern web application where users can browse popular AI models, compare pricing, and add them to a subscription cart with a smooth shopping experience.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat&logo=daisyui&logoColor=white)

</div>

---

## 🌍 Overview

**AI Model Hub** is a subscription-based AI marketplace UI that allows users to explore different AI models like ChatGPT, Gemini, Claude, Grok, and more.

Users can view model details, compare pricing, and add models to a cart for subscription tracking. The app focuses on **clean UI, dynamic state management, and real-time price calculation**.

---

## ✨ Key Features

- 🤖 **AI Model Browsing** — Explore popular AI models with descriptions and pricing  
- 🛒 **Smart Cart System** — Add or remove models dynamically  
- 💰 **Live Pricing Updates** — Total subscription cost updates instantly  
- 🏷️ **Model Categories** — Labels like Popular, Favourite, Most Wanted  
- 📱 **Responsive Design** — Works smoothly on all devices  
- ⚡ **Fast UI Rendering** — Powered by Vite and React  
- 🎨 **Modern Interface** — Clean and minimal UI with Tailwind + DaisyUI  

---

## 🛠️ Tech Stack

### Frontend
- React 19  
- Vite  
- Tailwind CSS  
- JavaScript (ES6+)

### UI Framework
- DaisyUI  
- Custom Tailwind Components  

### Data Handling
- Local JSON (`models.json`)  
- React Hooks for state management  

---

## 🤖 AI Models Included

The platform showcases popular AI models:

- ChatGPT — Writing, coding, creative tasks  
- Grok — Real-time witty AI responses  
- DeepSeek — Open-source coding focused AI  
- Gemini — Google’s multimodal AI  
- Claude — Long context reasoning expert  
- Kimi — Fast AI with large context handling  

---

## ⚙️ Core Features Explained

### 🧠 Model System
Each AI model contains:
- Name  
- Description  
- Price  
- Category label  
- Image  

---

### 🛒 Cart System
- Add models to subscription cart  
- Remove models anytime  
- Prevent duplicate selections  
- Auto calculate total price  

---

### 💰 Pricing Logic
- Free models included  
- Paid models summed dynamically  
- Real-time UI update on selection  

---

## 📦 Data Source

All AI model data is stored in:

```
public/models.json
```

Example structure:

```json
{
  "id": 1,
  "name": "ChatGPT",
  "price": 20,
  "description": "AI for writing and coding",
  "category": "Popular"
}
```

---

## ⚙️ Tech Concepts Used

- 🔄 React State Management (useState)  
- 📦 Props Passing Between Components  
- 🔁 Dynamic Rendering (map function)  
- 🎯 Event Handling (add/remove cart items)  
- 📊 Real-time Calculations  
- 🧩 Component-based Architecture  
- ⚡ Async Data Handling (JSON loading)  

---

## 🚀 Getting Started

```bash
# Clone project
git clone <repo-url>

# Move into folder
cd AI-MODEL-HUB

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🧪 Build & Preview

```bash
# Build for production
npm run build

# Preview build
npm run preview
```



---

<div align="center">

Built with ❤️ for AI enthusiasts  
**AI Model Hub — Explore. Compare. Subscribe.**

</div>
