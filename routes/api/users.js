const express = require("express");
const router = express.Router();
const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");
const User = require('../../models/User');
const Product = require('../../models/Product');
const Cart = require('../../models/Cart');
const Order = require('../../models/Order');
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
      isAdmin: req.user.isAdmin,
    });
  }
);

router.get(
    "/:id/cart_items",
    async(req, res) => {
      // debugger;
      let cart = await Cart.find({user: req.params.id})
      res.json(cart)
    }
)

router.get(
    "/:id/order_items",
    (req, res) => {
      Order.find({"user": req.params.id})
      .then(order => res.json(order))
    }
)

router.post(
  "/cart",
  (req, res) => {
    const cart = new Cart({
      user: req.body.user,
      product: req.body.product
    })
    
    cart.save()
    .then(cart => res.json(cart))
    .catch(err => res.status(404).json(err))
  }
)


  //   Cart.findById(req.params.id)
  //   .then(cart => {
  //     cart.user = req.body.userId;
  //     cart.product = req.body.productId;
  //     cart.save()
  //     .then(cart => res.json(cart))
  //   })
  //   .catch(err => res.status(404).json({noCartItems: 'Product not found'}))
  // }

router.post(
  "/order",
  (req, res) => {
    const order = new Order({
      user: req.body.user,
      product: req.body.product
    })
    order.save()
    .then(order => res.json(order))
    .catch(err => res.status(404).json(err))
  }
)

router.delete(
  "/",
  (req, res) => {
    Cart.findOneAndDelete({product: req.body.product, user: req.body.user})
    .then(() => {
      res.json({
        success: true
      })
    })
    .catch(err => res.status(404).json(err))
  }
)

// router.patch(
//   "/order_items/:id",
//   (req, res) => {
//     Order.findById(req.params.id)
//     .then(order => {
//       order.user = req.body.userId;
//       order.product = req.body.productId;
//       order.save()
//       .then(order => res.json(order))
//     })
//     .catch(err => res.status(404).json({noOrderItems: 'Product not found'}))
//   }
// )


// router.patch(
//   "/:id",
//   async(req, res) => {
//     const user = await User.findOne({_id: req.params.id});

//     if (req.body.cart){
//       user.cartProducts.push(req.body.cart)
//       await user.save()
//       // res.json(user);
//       // .then(user => res.json(user))
//       // .catch(err => res.json(err))
//     }else{
//       user.cartProducts = [];
//       user.orderProducts = req.body.order;
//       user.rewards = user.rewards + req.body.rewards;
//       await user.save()
//       // res.json(user);
//       // .then(user => res.json(user))
//       // .catch(err => res.json(err))
//     }
//   } 
// )

// router.delete(
//   "/",
//   async(req, res) => {
//     const user = await User.findOne({_id: req.body.userId});
//     await user.cartProducts.remove(req.body.productId);
//     await user.save()
//       // .then((user) => res.json(req.body.productId));
//   }
// )

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
              const payload = { _id: user.id, username: user.username, isAdmin: user.isAdmin, rewards: user.rewards};

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
        const payload = { _id: user.id, username: user.username, isAdmin: user.isAdmin, rewards: user.rewards};

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
