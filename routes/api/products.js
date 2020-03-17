const express = require("express");
const router = express.Router();
const validateProductInput = require("../../validation/products");
const Product = require("../../models/Product");
const passport = require('passport');
const Category = require('../../models/Category');

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Product.find().limit(10)
            .then(products => res.json(products))
            .catch(err => res.status(400).json(err))
    }
)

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    async(req, res) => {
        
        let category;
        let findCategory = await Category.findOne({ name: req.body.category });
        if (!findCategory) {
            category = new Category(req.body.category);
            await category.save();
        }else{
            category = findCategory;
        }

        req.body.category = category.id;

        const { errors, isValid } = validateProductInput(req.body);
        
        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category
        });

        newProduct.save().then(product => res.json(product));
    }
);