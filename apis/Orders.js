const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
  res.status(200).json({message:'Hello world'})
})

router.post('/',(req,res,next)=>{
  res.status(200).json({message:'Hello world'})
})

router.get('/:OrderId',(req,res,next)=>{
  if(req.params.OrderId == "special"){

    res.send({
      message:'Single Order',
      id:2
    })

  }else{

  res.send({message:'OrderId'})
}})


router.delete('/:OrderId',(req,res,next)=>{
  res.status(200).json({message:'Deleted'})
})

module.exports = router
