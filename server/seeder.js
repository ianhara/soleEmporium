const users = require('./data/users')
const products = require('./data/products')
const orders = require('./data/orders');
const { Product, User, Order, Cart } = require('./models')
const db = require('./config/connection');
const { orderProductSchema } = require('./models/orderModel');

const init = async () => {
    await Product.deleteMany()
    await User.deleteMany()
    await Order.deleteMany()
    await Cart.deleteMany()
    await Promise.all(
        products.map(async p => {
            await Product.create(p)

        }))
    await Promise.all(
        users.map(async p => {
            const user = await User.create(p)
            const firstProduct = (await Product.find({}))[0]
            const cart = await Cart.create({
                products: [{
                    productId: firstProduct._id,
                    quantity: 1,
                    price: firstProduct.price
                }],
                user: user._id
            })
            user.cart = cart._id
            await user.save()
            console.log(user)
            await Promise.all(
                orders.map(async p => {
                    const newOrder = {...p, user: user._id}
                    await Order.create(newOrder)
                }))
        }))
        console.log("done")
        process.exit(0) 
}
db.once("open", () => {
    console.log("initializing")
    init()
})
module.exports = init