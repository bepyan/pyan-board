const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    pw: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Users', userSchema)