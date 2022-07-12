require('dotenv').config()
const express = require('express')
const routers =  require('./routes/routes.js')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/routes',routers)

// conecto to db
mongoose.connect(process.env.CONNECTION_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server up")
        })
    })
    .catch((error) => {
        console.log(error)
    })


