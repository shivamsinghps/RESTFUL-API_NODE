const express = require('express')
const productRoute = require('./src/apis/Products')
const orderRoute = require('./src/apis/Orders')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors())

app.use('/products',productRoute)
app.use('/orders',orderRoute)

app.use((req,res,next)=>{
  const error = new Error('Request Not Found')
  error.status = 404
  next(error)
})

app.use((err,req,res,next)=>{
  res.status(err.status || 500)
  res.json({
    error:{message:err.message}
})
})


app.listen(9001,()=> {
  console.log("Server Listening");
})
