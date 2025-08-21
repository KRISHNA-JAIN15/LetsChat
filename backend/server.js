import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from "path"
import cors from "cors"

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'
import connectToMongoDB from "./db/connectToMongoDB.js"

dotenv.config()

import {app , server} from './socket/socket.js' // Import the socket app
const PORT = process.env.PORT || 5000

// const __dirname = path.resolve()

app.use(cors({
  origin: ['http://localhost:3000', 'https://lets-chat-ivory.vercel.app', 'http://localhost:5173', 'https://letsmeet.krishnajain.tech'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json()) // Middleware to parse JSON requests
app.use(cookieParser()) // Middleware to parse cookies


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.use(express.static(path.join(__dirname, '/frontend/dist')))

// app.get(/.*/, (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
// });

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})
