# Overview

A shopping app where users can shop items by category and earn reward points.

This website is inspired by [Dixie-mech](https://dixiemech.com/).

[Live-Site](https://shopon1.herokuapp.com/)

## Creators

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
Once a user adds items to the cart and then places an order through the cart, both cart and order will be updated on the backend. Items added to the cart will be added to the order and items in the cart will be removed from the database. Below is the code snippet for that cart-order feature:
``` javascript
router.post(
  "/order",
  async(req, res) => {
    let orders = [];
    
    for (let i = 0; i < req.body.product.length; i++) {
      let order = new Order({
        user: req.body.user,
        product: req.body.product[i]._id
      })
      await order.save();
      await Cart.findOneAndDelete({ product: req.body.product[i]._id, user: req.body.user })
      orders.push(order)
    }
    
    res.json(orders);
  }
)
```
Cart state will have a default empty array. When user adds an item to the cart, the state will be updated in the frontend. When an item is removed from the cart, the index of that item being removed will be used to remove it from the cart state. When an order is placed, cart state will be an empty array. Below is the code snippet for the cartReducer in the frontend:
```javascript
const cartReducer = (state = [], action) => {
    
    switch (action.type) {
        case RECEIVE_CART_ITEM:
            if (Array.isArray(action.cart)) {
                return action.cart;
            }else{
                return [...state, action.cart];
            }
        case REMOVE_CART_ITEM:
            let arr = [].concat(state);
            let index = -1
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].product === action.item) {
                    index = i
                }
            }
            if (index > -1) {
                arr.splice(index, 1);
            }
            return arr;
        case REMOVE_CART_ITEMS:
            return [];
        default:
            return state;
    }
}
```
