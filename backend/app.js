const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const multer = require('multer')
const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config()

const port = process.env.PORT

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use(express.static(path.join(__dirname ,'upload')))

app.use("/api/user",require('./routes/userroutes'))
app.use("/api/form",require('./routes/formroutes'))
app.use("/api/admin",require('./routes/adminroutes'))
app.use("/api/auth",require('./routes/authroutes'))
app.use("/api/board",require('./routes/boardroutes'))

app.get('/',(req,res)=>{
    res.status(404).json({message: "ไม่พบหน้านี้"})
})

app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})