const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
require('./db')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');


// dotenv.config();

// app.use(bodyParser.json());

app.get("/sing",(req,res)=>{
    console.log("sbcbshjcbshjd")
})


app.use(authRouter)

app.listen(5000)


