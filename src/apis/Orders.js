const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth.js');
const Order = require('../models/Order')
const Product = require('../models/Product')

Order.hasMany(Product, { as: "Product", foreignKey: "orderId" });
Product.belongsTo(Order, { as: "Order", foreignKey: "orderId" });

const OrderController = require('./controllers/Orders');

router.get('/',checkAuth,OrderController.get_all_orders)

router.post('/',checkAuth, OrderController.create_order)


router.get('/:orderId',checkAuth,OrderController.get_a_order)


router.delete('/:orderId',checkAuth,OrderController.delete_order)

module.exports = router
