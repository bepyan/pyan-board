const mongoose = require('mongoose')

const boardSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    pw: {
        type: String,
        require: true,
        trim: true
    },
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Boards', boardSchema)