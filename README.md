# 📹 Zoom - Full-Stack Real-Time Video Conferencing Web Application

A full-stack, real-time video conferencing application inspired by Zoom. Built with **React.js**, **Node.js**, **Express**, **Socket.io**, **WebRTC**, and **MongoDB**. This application enables high-quality peer-to-peer video & audio calls, real-time messaging, user authentication, and meeting history management.

---

## ✨ Key Features

- 🎥 **Peer-to-Peer Video & Audio Calling**: High-definition, low-latency video and audio streaming powered by WebRTC.
- 💬 **In-Call Real-Time Chat**: Live group messaging inside meeting rooms using Socket.io web sockets.
- 🔐 **User Authentication**: Secure signup and login with hashed credentials (`bcrypt`) and session tokens.
- 🔗 **Instant Room Code Generation**: Create unique meeting rooms or join existing meetings instantly using room codes.
- 📜 **Meeting History**: Track and view past meeting logs and user activity saved directly to MongoDB.
- 🖥️ **Screen Sharing & Media Controls**: Mute/unmute microphone, toggle video camera, share screen, and disconnect calls effortlessly.
- 🎨 **Modern Responsive UI**: Built with React and Material-UI (`@mui/material`) for a sleek, intuitive, and responsive user experience across devices.

---

## 🛠️ Tech Stack

### **Frontend**
- **React.js**: Component-based UI library
- **Material-UI (MUI)**: Modern React UI components and icons
- **Socket.io-Client**: Real-time bi-directional event communication
- **Axios**: HTTP client for API requests
- **React Router DOM**: Single Page Application (SPA) routing

### **Backend**
- **Node.js & Express.js**: REST API server and WebSocket server wrapper
- **Socket.io**: Real-time WebSocket server manager
- **MongoDB & Mongoose**: NoSQL database for users & meeting records
- **Bcrypt**: Password hashing and security

---

## 🚀 Quick Start (Local Setup)

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB instance

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/zoom-clone.git
cd zoom-clone
```

### **2. Run Backend Server**
```bash
cd backend
npm install
npm start
```
> The backend server will run on `http://localhost:8000`.

### **3. Run Frontend App**
```bash
cd ../frontend
npm install
npm start
```
> The frontend application will open on `http://localhost:3000`.

---

## ☁️ Deployment

This project is pre-configured for **1-click deployment on Render** using the included [`render.yaml`](./render.yaml) blueprint:
- **Backend Service**: Deployed as a Node.js Web Service.
- **Frontend Site**: Deployed as a React Static Site with SPA rewrites.

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).

