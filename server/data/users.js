import bcrypt from "bcryptjs";

const users = [
  {
    name: "Armoni",
    email: "admin@sneakyheads.com",
    password: bcrypt.hashSync("Admin123", 10),
    isAdmin: true,
  },
  {
    name: "Ian",
    email: "ian@ian.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Juju",
    email: "juju@juju.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sandy",
    email: "sandy@sandy.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Isaac",
    email: "isaac@isaac.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;