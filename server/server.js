require('dotenv').config()
const express = require('express')
const routers =  require('./routes/routes.js')

const app = express()
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/routes',routers)


app.listen(process.env.PORT, () => {
    console.log("Server up")
})