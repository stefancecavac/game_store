
//imports
const dotenv = require('dotenv')
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


//route import

const gameRouter = require('./routes/gameRoute')
const userRouter = require('./routes/userRoute')

//middleware
app.use(cors())
app.use(express.json())

app.use('/api/games',gameRouter)
app.use('/api/auth',userRouter)




//database and server connection
mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`DataBase connected and listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

