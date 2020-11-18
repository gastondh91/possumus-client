import express from "express"
import bodyParser from "body-parser"
import rutas from './routes/charSequence';
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", 3001)

app.use('/api', rutas)

export default app;