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

router.post(
    "/",
    async(req, res) => {
        // debugger;
        let user = await User.findById(req.body.user);
        let review = new Review({description: req.body.description, user: user.username});
        await review.save();
        let product = await Product.findById(req.body.productId);

        product.reviews.push(review.id);

        await product.save();
        res.json(review);
    }
)

// router.patch(
//     "/:id",
//     async(req, res) => {
//         let review = await Review.findOne({_id: req.params.id});
//         await review.update(req.body);
//         res.json(review);
//     }
// )

router.delete(
    "/:id",
    async(req, res) => {
        await Review.remove({_id: req.params.id})
        // debugger;
        res.json({msg: 'Success'})
    }
)

module.exports = router;