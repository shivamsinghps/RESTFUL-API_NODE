const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const Product = require('../models/Product')

Order.hasMany(Product, { as: "Product", foreignKey: "orderId" });
Product.belongsTo(Order, { as: "Order", foreignKey: "orderId" });


router.get('/',(req,res,next)=>{
  res.status(200).json({message:'Hello world'})
})

router.post('/', async (req,res,next)=>{
  console.log(req.body.quantity);
  const nuser = await Order.create({
    quantity:req.body.quantity
  })

  .then((nuser)=>{
  //   const product = await Product.create({
  //   name:req.body.name,
  //   price:req.body.price,
  //   orderId: user.id
  // })

  res.send(JSON.stringify(user))
  }).catch(err=> next(err))
})

router.get('/:orderId',async (req,res,next)=>{
  const user =  await Product.findOne({
        where: {
            id: req.params.orderId,
        },
        include: [{ model: Product, as: "Products" }],
    }).then((user)=>{
      res.send(JSON.stringify(users))
    }).catch(err=>next(err))
  })


router.delete('/:OrderId',(req,res,next)=>{
  res.status(200).json({message:'Deleted'})
})

module.exports = router
