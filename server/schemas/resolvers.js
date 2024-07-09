const resolvers = {
    Query: {
        me: () => {
            return { username: "test" }
        }
    }
}
module.exports = resolvers