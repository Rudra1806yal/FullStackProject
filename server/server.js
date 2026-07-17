import express from 'express'
import mongoose from './database/mongodb.js'
import router from './routes/router.js'
import connectDb from './database/mongodb.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(router)

connectDb()

const port = 3000

app.listen(port, () => {
    console.log('server has been started on port:', port)
})

