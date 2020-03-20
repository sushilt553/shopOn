const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");

router.get(
    "/:name",
    async(req, res) => {
        const product = await req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase()
        Product.find({name: product})
        .then(products => res.json(products))
        .catch(err => res.json(err))
    }
)