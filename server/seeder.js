const users = require('./data/users')
const products = require('./data/products')
const orders = require('./data/orders');
const { Product, User, Order } = require('./models')
const db = require('./config/connection');

const init = async () => {
    await Product.deleteMany()
    await User.deleteMany()
    await Order.deleteMany()
    await Promise.all(
        products.map(async p => {
            await Product.create(p)
        }))
    await Promise.all(
        users.map(async p => {
            const user = await User.create(p)
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