const orders = [
    {
        user: "66905b9f5d22ede111ca7570",
        products: [
            {
                productId: "668f306f4f4a936ffa9ab618",
                quantity: 1,
                price: 44999
            },
        ],
        shippingAddress: {
            street: '123 JavaScript Ln',
            city: 'Raleigh',
            state: 'North Carolina',
            zip: '27513',
            country: 'USA'
        },
        totalPrice: 44999,
        status: 'Pending',
    },
    {
        user: "668f306f4f4a936ffa9ab641",
        products:[
            {
                productId: "668f306f4f4a936ffa9ab61a",
                quantity: 1,
                price: 6499
            },
        ],
        shippingAddress: {
            street: '123 React Rd',
            city: 'Raleigh',
            state: 'North Carolina',
            zip: '27513',
            country: 'USA'
        },
        totalPrice: 6499,
        status: 'Pending'
    },
    {
        user: "668f306f4f4a936ffa9ab642",
        products:[
            {
                productId: "668f306f4f4a936ffa9ab61b",
                quantity: 1,
                price: 14999
            },
        ],
        shippingAddress: {
            street: '123 Express St',
            city: 'Raleigh',
            state: 'North Carolina',
            zip: '27513',
            country: 'USA'
        },
        totalPrice: 14999,
        status: 'Delivered'
    },
    {
        user: "668f306f4f4a936ffa9ab643",
        products:[
            {
                productId: "668f306f4f4a936ffa9ab619",
                quantity: 1,
                price: 4999
            },
        ],
        shippingAddress: {
            street: '123 JavaScript Ln',
            city: 'Raleigh',
            state: 'North Carolina',
            zip: '27513',
            country: 'USA'
        },
        totalPrice: 4999,
        status: 'Shipped'
    },
    {
        user: "668f306f4f4a936ffa9ab644",
        products:[
            {
                productId: "668f306f4f4a936ffa9ab61e",
                quantity: 1,
                price: 11999
            },
        ],
        shippingAddress: {
            street: '123 React Rd',
            city: 'Raleigh',
            state: 'North Carolina',
            zip: '27513',
            country: 'USA'
        },
        totalPrice: 11999,
        status: 'Processing'
    }
]

module.exports = orders;