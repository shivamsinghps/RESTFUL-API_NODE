const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const checkAuth = require('../middleware/auth.js');

const path = require('path')

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().getTime() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

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

router.post('/', checkAuth ,upload.single('product_pic'),async (req,res,next)=>{
  console.log(req.file);
  const user = await Product.create({
    name:req.body.name,
    price:req.body.price,
    orderId:req.body.orderId
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
    }).catch(err=>{
      let error = new Error('productId invalid: '+err.message)
      error.status=409
      next(error)})
  })

router.patch('/:productId',checkAuth,(req,res,next)=>{
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

router.delete('/:productId',checkAuth,(req,res,next)=>{
Product.destroy({
  where:{
    id:req.params.productId
  }
}).then((result)=>{
  console.log(result+'ha');
  res.send('done')})
  })

module.exports = router
