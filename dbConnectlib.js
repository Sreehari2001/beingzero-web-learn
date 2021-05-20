const mongoose= require('mongoose')
const config = require('./config')

module.exports = {
    connect: function () {
            mongoose.connect(config.connectionString, {})
            mongoose.connection.on('connected', function () {
                console.log("Database Connected"); 
        })
    }
}