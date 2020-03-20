const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");

router.get(
    "/:name",
    async(req, res) => {

        const productArr = req.params.name.split(" ")

        const product = await productArr.map(ele =>
          ele[0].toUpperCase() + ele.slice(1).toLowerCase()
        ).join(" ");

        // const foundProduct = await req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase()
      Product.find({ $text: { $search: req.params.name } })
        .then(products => res.json(products))
        .catch(err => res.json(err))
    }
)

module.exports = router;