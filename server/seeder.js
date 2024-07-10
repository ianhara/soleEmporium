const users = require('./data/users')
const products = require('./data/products')
const {Product, User} = require('./models')
const init = async()=>{
    await Product.deleteMany()
    await User.deleteMany()
await Promise.all(    
products.map(async p=>{
await Product.create(p)
}))
await Promise.all(    
users.map(async p=>{
await User.create(p)
}))



}
module.exports = init