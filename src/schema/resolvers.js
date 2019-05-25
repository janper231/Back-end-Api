const conection = require('../libs/Database');
module.exports = {
    Query: {
        books: async () => {
            const connection = await conection()
            const response = await connection.query("SELECT priape as title, prinom as author FROM usuarios limit 1")
            console.log(response)
            return response
        },
    },
}