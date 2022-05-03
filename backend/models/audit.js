const mongoose = require('mongoose')

const auditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_by:{
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Active'
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Audit', auditSchema)