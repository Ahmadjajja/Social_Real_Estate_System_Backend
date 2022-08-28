const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    tital: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    finishType: {
        type: String,
        required: true
    },
    noOfBedrooms: {
        type: Number,
        required: true
    },
    noOfBathroom: {
        type: Number,
        required: true
    },
    livingRooms: {
        type: Number,
        required: true
    },
    reception: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
    images: [{
        type: String
    }],
    price : {
        type: Number,
        default:0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


exports.Product = mongoose.model('Product', productSchema);
