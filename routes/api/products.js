const express = require("express");
const router = express.Router();
const validateProductInput = require("../../validation/products");
const Product = require("../../models/Product");
const passport = require('passport');
const Category = require('../../models/Category');
const {
  singlePublicFileUpload,
  multiplePublicFileUpload,
  singleMulterUpload,
  multipleMulterUpload
} = require("../../awsS3");

// multiple public files
// router.post("/", multipleMulterUpload("images"), async (req, res) => {
//   const userData = req.body;
//   userData.images = await multiplePublicFileUpload(req.files);
//   const user = new User(userData);
//   await user.save();
//   res.json(user);
// });


router.get(
    "/",
    // passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Product.find().limit(30)
            .then(products => res.json(products))
            .catch(err => res.status(400).json(err))
    }
)

router.get(
    "/:id",
    (req, res) => {
        // debugger;
        Product.findById(req.params.id)
        .then(product => res.json({product}))
        .catch(err => 
            res.status(404).json({noProductFound: 'No product found from the database'}));
    }
)

router.post(
    "/",
    // passport.authenticate("jwt", { session: false }),
    async(req, res) => {
        // debugger;
        let category;
        let findCategory = await Category.findOne({ name: req.body.category });
        if (!findCategory) {
            category = new Category( {name: req.body.category} );
            await category.save();
        }else{
            category = findCategory;
        }

        req.body.category = category.id;

        const { errors, isValid } = validateProductInput(req.body);

        const images = req.body.image_urls.split(" ")
        
        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            image_urls: images
        });

        newProduct.save()
        .then((product) => res.json(product))
        .catch((err) => res.json(err))
    }
);

router.patch(
    "/:id",
    async(req, res) => {
        const product = await Product.findOne({_id: req.params.id})
        
        // debugger;
        let category;
        let findCategory = await Category.findOne({ name: req.body.category });
        if (!findCategory) {
            category = new Category( {name: req.body.category} );
            await category.save();
        }else{
            category = findCategory;
        }

        req.body.category = category.id;
        req.body.image_urls = req.body.image_urls.split(" ");

        const { errors, isValid } = validateProductInput(req.body);

        if (!isValid) {
          return res.status(400).json(errors);
        }

        await product.update(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
    }
)

router.delete(
    "/:id",
    (req, res) => {
        Product.remove({_id: req.params.id})
        .then(() => res.json({msg: 'Success'}))
    }
)


module.exports = router;