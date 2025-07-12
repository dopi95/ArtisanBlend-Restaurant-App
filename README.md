# Artisan Blend Restaurant - Restaurant Web App

Welcome to **Artisan Blend Restaurant**, a modern, AI-integrated web experience that combines elegant UI/UX with a cutting-edge GenAI-powered chatbot. Built with React, Tailwind CSS, FastAPI, and Llama 2, this website offers both a visually stunning and interactive dining experience — fully responsive and intelligently guided.

 📌 Project Overview

The **Restaurant-Website** project is a collaborative group effort to build a dynamic and interactive full-stack web application for a fictional high-end restaurant called **Artisan Blend**. It features an immersive frontend experience alongside an AI-powered backend chatbot integrated with Llama 2 and LangChain, answering user queries about reservations, menu, location, and more.

## 🚀 Live Link: 
   ## Frontend: https://artisan-blend.netlify.app/

## 👥 Team Members & Roles

 1. Finlay Ndung'u     UI/UX Designer        
 2. Yohanna Moges      UI/UX Designer        
 3. Elyas Yenealem     Full-Stack Developer  
 4. Ishimwe Eric       Full-Stack Developer  
 5. Sena Kebede        Generative AI Expert  

🛠️ Tech Stack

# 💻 Frontend
- React (with Vite)
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React
- LocalStorage APIs
- Custom JavaScript for Effects

### ⚙️ Backend
- FastAPI
- LangChain
- Llama 2 (via Hugging Face)
- Vector DB (ChromaDB or Pinecone)
- Docker for containerization
- Render or Railway for cloud deployment

## 🌟 Key Features

### ✅ Frontend
- Sticky Header & Navigation with Section Links
- Dark/Light Theme Toggle (with localStorage)
- Image Carousel with Autoplay
- Typewriter Effect for Restaurant Name
- Signature Dishes (Load More + Category Filter)
- Tooltip on Dish Hover
- Dynamic Menu Pages using React Router (`/menu/starters`, `/menu/mains`, etc.)
- Reservation Form with:
  - Validation (email regex, required fields)
  - Character Counter
  - Date/Time Picker
  - Guest Dropdown
  - `localStorage` Save
  - Confirmation Message
- Chatbot Interface:
  - Floating chat button
  - Scrollable chat area
  - Typing state simulation
  - Sample prompts
- Dynamic Footer:
  - Real-time "Open/Closed" Status
  - Contact Info & Social Media Icons

### 🤖 Backend (GenAI Chatbot)
- LangChain pipeline with memory management
- Llama 2 model integration using Hugging Face
- Vector DB-powered RAG pipeline for FAQ + menu + booking info
- Query understanding with semantic search
- Custom prompt templates and fallback strategies
- Secure CORS & Rate Limiting
- Full Dockerized FastAPI backend
- Postman tested endpoints
- Frontend ↔ Backend connection via `fetch()` API



