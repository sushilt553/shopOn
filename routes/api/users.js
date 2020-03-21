const express = require("express");
const router = express.Router();
const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");
const User = require('../../models/User');
const Product = require('../../models/Product');
const passport = require("passport");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
      isAdmin: req.user.isAdmin
    });
  }
);

router.patch(
  "/:id",
  async(req, res) => {
    // debugger;
    const user = await User.findOne({_id: req.params.id});

    if (req.body.cart){
      // debugger;
      user.cartProducts.push(req.body.cart)
      user.save()
      .then(user => res.json(user))
      .catch(err => res.json(err))
    }else{
      user.cartProducts = [];
      user.orderProducts = req.body.order;
      user.rewards = user.rewards + req.body.rewards;
      // debugger;
      user.save()
      .then(user => res.json(user))
      .catch(err => res.json(err))
    }
  } 
)

router.delete(
  "/",
  async(req, res) => {
    debugger;
    const user = await User.findOne({_id: req.body.userId});
    // debugger;
    await user.cartProducts.remove(req.body.productId);
    user.save()
      .then((user) => res.json(user));
  }
)

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      // Use the validations to send the error
      errors.username = "Username already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { _id: user.id, username: user.username, isAdmin: user.isAdmin, rewards: user.rewards, orderProducts: user.orderProducts, cartProducts: user.cartProducts };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then(user => {
    if (!user) {
      // Use the validations to send the error
      errors.username = "Incorrect username/password";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { _id: user.id, username: user.username, isAdmin: user.isAdmin, rewards: user.rewards, orderProducts: user.orderProducts, cartProducts: user.cartProducts };

        jwt.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        // And here:
        errors.password = "Incorrect username/password";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
