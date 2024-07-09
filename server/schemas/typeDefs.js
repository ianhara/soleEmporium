const typeDefs =`
type Query {
    me: User
    
}
type User {
    _id: ID
 
  }`
module.exports = typeDefs