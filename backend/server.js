import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js'
import { app, server } from './socket/socket.js'

dotenv.config()

const PORT = process.env.PORT || 5000  

const __dirname = path.resolve()

// Middleware to parse incoming JSON data
app.use(express.json())

// Middleware to parse cookies
app.use(cookieParser())

// Route for handling authentication-related requests
app.use('/api/auth', authRoutes);

// Route for handling message-related requests
app.use('/api/messages', messageRoutes);

// Route for handling user-related requests
app.use('/api/users', userRoutes)


app.use(express.static(path.join(__dirname,'/frontend/dist')))
app.get('*',(req,res)=>{
    res.sendFile(__dirname,'frontend/dist/index.html')
})

server.listen(PORT, () => {
    // Connect to the MongoDB database
    connectToMongoDB();

    console.log(`Server is running on ${PORT}`)
})
