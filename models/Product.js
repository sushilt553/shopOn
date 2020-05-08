const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],

    image_urls: {
        type: [String]
    },

    date: {
        type: Date,
        default: Date.now
    }
});
ProductSchema.index({name: 'text'})
const Product = mongoose.model('Product', ProductSchema);


module.exports = Product;
