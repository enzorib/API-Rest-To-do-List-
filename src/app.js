import express from 'express'
import rota from './routes.js'

const app = express()
app.use(express.json())
app.use(rota)

export default app

