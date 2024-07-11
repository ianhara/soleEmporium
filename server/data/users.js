const bcrypt = require("bcrypt");

const users = [
  {
    firstName: "Armoni",
    lastName: "Prince",
    email: "admin@sneakyheads.com",
    password: bcrypt.hashSync("Admin123", 10),
    address: {
      street: '123 JavaScript Ln',
      city: 'Raleigh',
      state: 'North Carolina',
      zip: '27513',
      country: 'USA'
    },
  },
  {
    firstName: "Ian",
    lastName: "Hara",
    email: "ian@ian.com",
    password: bcrypt.hashSync("123456", 10),
    address: {
      street: '123 React Rd',
      city: 'Raleigh',
      state: 'North Carolina',
      zip: '27513',
      country: 'USA'
    },
  },
  {
    firstName: "Juju",
    lastName: "Nakarmi",
    email: "juju@juju.com",
    password: bcrypt.hashSync("123456", 10),
    address: {
      street: '123 Express St',
      city: 'Raleigh',
      state: 'North Carolina',
      zip: '27513',
      country: 'USA'
    },
  },
  {
    firstName: "Sandy",
    lastName: "Vazquez",
    email: "sandy@sandy.com",
    password: bcrypt.hashSync("123456", 10),
    address: {
      street: '123 JavaScript Ln',
      city: 'Raleigh',
      state: 'North Carolina',
      zip: '27513',
      country: 'USA'
    },
  },
  {
    firstName: "Isaac",
    lastName: "Mckoy",
    email: "isaac@isaac.com",
    password: bcrypt.hashSync("123456", 10),
    address: {
      street: '123 React Rd',
      city: 'Raleigh',
      state: 'North Carolina',
      zip: '27513',
      country: 'USA'
    },
  },
];

module.exports = users;