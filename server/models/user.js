const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
    id: {
        type: String,
    },
    pw: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    boards: [{
        type: Schema.Types.ObjectId,
        ref: 'Board'
    }],
    invites: [{
        type: Schema.Types.ObjectId,
        ref: 'Board'
    }]
})

module.exports = mongoose.model('Users', userSchema)