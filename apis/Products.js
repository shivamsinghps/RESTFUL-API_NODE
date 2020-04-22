const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
  res.status(200).json({message:'Hello world'})
})

router.post('/',(req,res,next)=>{
  res.status(200).json({message:'Hello world'})
})

router.get('/:productId',(req,res,next)=>{
  if(req.params.productId == "special"){

    res.send({
      message:'Single product',
      id:2
    })

  }else{

  res.send({message:'productId',
      id:req.params.productId.lt})
}})

router.patch('/:productId',(req,res,next)=>{

  res.status(200).json({message:'Patch'})
})

router.delete('/:productId',(req,res,next)=>{
  res.status(200).json({message:'Delete'})
})

module.exports = router
