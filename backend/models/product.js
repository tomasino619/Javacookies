const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, '100 characters only']
    },
    price: {
        type: String,
        required: [true, 'Please enter product name'],
        maxLength: [100, '100 characters only']
    },
    description: {
        type: String,
        required: [true, 'Please enter description'],
        trim: true,
        maxLength: [500, '500 characters only']
    },
    images: {
        type: Array,
        required: [true, 'Please enter product image'],
    },
    category: {
        type: String,
        required: [true, 'Please select category'],
        trim: true,
        maxLength: [100, '100 characters only']
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date(Date.now())
    },
    created_by: {
        type: String,
        required: [true, "Please enter user"]
    },
    updated_at: {
        type: Date,
        required: true,
        default: new Date(Date.now())
    },
    updated_by: {
        type: String,
        required: [true, "Please enter user"]
    }
})

module.exports = mongoose.model('Product', productSchema)

