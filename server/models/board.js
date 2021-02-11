const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const noteSchema = Schema({
    note: {
        type: String,
        require: true
    },
    members: [String],
    date: { 
        type: Date, 
        require: true
    },
})

const listSchema = Schema({
    name: {
        type: String,
        require: true
    },
    nodes: [noteSchema]
})

const boardSchema = Schema({
    name: {
        type: String,
        require: true
    },
    state: {
        type: String,
        enum: ["private", "public"],
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true
    },
    lastUpdate: { 
        type: Date, 
        default: Date.now 
    },
    members: [{
        id: {
            type: String,
            require: true
        },
        auth: { 
            type: String, 
            enum: ["owner", "edit", "read"], 
            require: true
        }
    }],
    lists: [listSchema]
})

module.exports = mongoose.model('Board', boardSchema)