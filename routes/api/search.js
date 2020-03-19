const express = require("express");
const router = express.Router();
const Product = require ('../../models/Product');

router.get(
  "/",
  (req, res) => {
    debugger;
    Product.find().limit(10)
      .then(products => res.json(products))
      .catch(err => res.status(400).json(err))
  }
)