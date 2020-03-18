const express = require("express");
const router = express.Router();
const validateCategoryInput = require("../../validation/category");
const Category = require("../../models/Category");
const passport = require('passport');

router.get(
  "/", 
  passport.authenticate("jwt", { session: false }),
  (req,res) => {
    Category.find()
    .then( categories => res.json(categories))
    .catch(err => res.status(400).json(err))
  }
)

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newCategory = new Category({
      name: req.body.name,
    });

    newCategory.save().then(category => res.json(category));
  }
);

module.exports = router;