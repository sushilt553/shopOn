# Overview

A shopping app where users can shop items by category and earn reward points.

This website is inspired by [Dixie-mech](https://dixiemech.com/).

[Live-Site](https://shopon1.herokuapp.com/)

[Sushil Thapa](https://github.com/sushilt553)

[Jennie Richardson](https://github.com/jbiakcin)

[Gustavo Gutierrez](https://github.com/guticode04)

![ShopOn](https://github.com/sushilt553/shopOn/blob/master/frontend/src/images/shopon_page.png)

## Features
  * Users can shop different products in this app.
  * Users can receive rewards on purchases.
  * Users can save items in their shopping cart and place order later.

## Technologies
ShopOn is built using React, Redux, and Express on top of a MongoDB database.

## Code highlights
Empty arrays for the cart and order will be assigned as a default for every new user. Once a user adds an item to the cart or places an order through the cart, user will be updated on the backend with the items added to the cart or items placed on order. Below is the code snippet for that cart-order feature:
``` javascript
router.patch(
  "/:id",
  async(req, res) => {
    const user = await User.findOne({_id: req.params.id});

    if (req.body.cart){
      user.cartProducts.push(req.body.cart)
      user.save()
      .then(user => res.json(user))
      .catch(err => res.json(err))
    }else{
      user.cartProducts = [];
      user.orderProducts = req.body.order;
      user.rewards = user.rewards + req.body.rewards;
      user.save()
      .then(user => res.json(user))
      .catch(err => res.json(err))
    }
  } 
)
```
