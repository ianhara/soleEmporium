const users = require('../seeder/usersSeeds.json');
const products = require('../seeder/productsSeeds.json');
const orders = require('../seeder/ordersSeeds.json');

const { Product, User, Order, Cart } = require('../models');
const db = require('../config/connection');
const cleanDB = require('./cleanDB');

const init = async () => {
    try {
        await cleanDB('Product', 'products');
        await cleanDB('User', 'users');
        await cleanDB('Order', 'orders');
        await cleanDB('Cart', 'carts');

        await Promise.all(
            products.map(async p => {
                await Product.create(p);
            })
        );

        await Promise.all(
            users.map(async u => {
                const user = await User.create(u);
                const firstProduct = (await Product.find({}))[0];
                const cart = await Cart.create({
                    products: [{
                        productId: firstProduct._id,
                        quantity: 1,
                        price: firstProduct.price
                    }],
                    user: user._id
                });
                user.cart = cart._id;
                await user.save();
                console.log(user);

                await Promise.all(
                    orders.map(async o => {
                        if (o.user === u._id) {
                            const newOrder = { ...o, user: user._id };
                            await Order.create(newOrder);
                        }
                    })
                );
            })
        );

        console.log("done");
        process.exit(0);
    } catch (error) {
        console.error("Error initializing database:", error);
        process.exit(1);
    }
};

db.once("open", () => {
    console.log("initializing");
    init();
});

module.exports = init;