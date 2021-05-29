import express from 'express'
import rutas from './routes/charSequence'
import cors from 'cors'

const app = express()

app.use(cors())
app.set('port', 3001)

app.use('/api', rutas)

export default app