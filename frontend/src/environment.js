const IS_PROD = process.env.NODE_ENV === "production" || (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1");

const server = IS_PROD ?
    "https://zoom-backend-app.onrender.com" : // Replace with your actual Render backend service URL
    "http://localhost:8000";

export default server;