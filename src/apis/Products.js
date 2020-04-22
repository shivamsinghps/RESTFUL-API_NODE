const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/',async (req,res,next)=>{
  const userslist = []
  const users = await Product.findAll();
  users.map(user=>{
    const userdata ={
      id:user.id,
      name:user.name,
    }
    userslist.push(userdata)
  })
  res.send(userslist)
})

router.post('/', async (req,res,next)=>{
  const user = await Product.create({
    name:req.body.name,
    price:req.body.price
  }).then((user)=>{
    res.json({
      created:true,
      userId:user.id,
      username:user.name
    })
  }).catch(err=> next(err))
})

router.get('/:productId',(req,res,next)=>{
  const user =  Product.findOne({
        where: {
            id: req.params.productId,
        },
        order: [ [ 'createdAt', 'DESC' ]],
    }).then((user)=>{
      res.json({
        name:user.name
      })
    }).catch(err=>next(err))
  })

router.patch('/:productId',(req,res,next)=>{
  const user =  Product.findOne({
        where: {
            id: req.params.productId,
        }
    }).then((user)=>{
      Product.update(
  { title: req.body.price },
  { where: { id: user.id  } }
).then(()=>{
  res.send('done')
})
}).catch(err=>{
  const error = new Error(err.message+':(NOt a valid id)')
  error.status=403
  next(error)
})
  })

router.delete('/:productId',(req,res,next)=>{
  const user =  Product.findOne({
        where: {
            id: req.params.productId,
        }
    }).then((user)=>{
      user.destroy().then(()=>{
  res.send('deleted')
})
}).catch(err=>{
  const error = new Error('Not a valid id')
  error.status=403
  next(error)
})
  })

module.exports = router
