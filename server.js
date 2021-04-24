import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import bidRoutes from './routes/bidRoutes.js'

dotenv.config()
connectDB()
const app =express()

app.use(express.json())
app.use('/api/bid', bidRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))