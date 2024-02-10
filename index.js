require('dotenv').config()

const express= require('express')

const cors = require('cors')

require('./DB/connection')

const routes= require('./Router/router')

const bincoServer = express()

bincoServer.use(cors())

bincoServer.use(express.json())

// bincoServer.use(express.json({limit: '50mb'}))

// bincoServer.use(express.urlencoded({limit: '50mb'}))

bincoServer.use(routes)

const PORT=3000 || process.env.PORT

bincoServer.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
    
})

bincoServer.get('/',(req,res)=>{
    res.send('Light Weight!')
})
