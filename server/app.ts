import express = require("express")
const logica = require('./routes/logica')

require('dotenv').config()

const app = express()
app.set("port", 3001)

app.use('/api', logica)

export default app;