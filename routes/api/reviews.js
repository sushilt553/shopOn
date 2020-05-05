const express = require("express");
const router = express.Router();
const Review = require("../../models/Review");
const Product = require("../../models/Product");
const User = require("../../models/User");

router.get(
    "/",
    (req, res) => {
        Review.find()
        .then(reviews => res.json({reviews}))
        .catch(err => res.status(400).json(err))
    }
)

// router.post(
//     "/",
//     async(req, res) => {
//         let review = new Review({description: req.body.description});
//         await review.save();
//         let product = await Product.findById(req.body.productId);
//         let user = await User.findById(req.body.userId);

//         product.reviews.push(review.id);
//         user.reviews.push(review.id);

//         await product.save();
//         await user.save();

//         res.json(review);
//     }
// )