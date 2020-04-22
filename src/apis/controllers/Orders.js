const Order = require('../../models/Order')
const Product = require('../../models/Product')

exports.get_all_orders = async (req,res,next)=>{
  userslist =[]
  const users =  await Order.findAll().then((users)=>{
      users.map(user=>userslist.push(user))
    }).catch(err=>next(err))
      res.send(JSON.stringify(userslist))
  }

  exports.get_a_order = async (req,res,next)=>{
    const user =  await Order.findOne({
          where: {
              id: req.params.orderId,
          },
          include: [{ model: Product, as: "Product" }],
      }).then((user)=>{
        res.send(JSON.stringify(user))
      }).catch(err=>next(err))
    }

    exports.create_order =  async (req,res,next)=>{
      console.log(req.body.quantity);
      const nuser = await Order.create({
        quantity:req.body.quantity
      } ).then(async (nuser)=>{
        const product = await Product.create({
        name:req.body.name,
        price:req.body.price,
        orderId: nuser.id
      })

      res.send(JSON.stringify(nuser))
      }).catch(err=> next(err))
    }

exports.delete_order = (req,res,next)=>{
    const user =  Order.findOne({
          where: {
              id: req.params.orderId,
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
    }
