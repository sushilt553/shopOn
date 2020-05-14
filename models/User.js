const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },
  
  password: {
    type: String,
    required: true
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  rewards: {
    type: Number,
    default: 0
  },

  // reviews: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Review"
  // }],

  // cartProducts: {
  //   type: [Schema.Types.ObjectId],
  //   ref: "Product"
  // },

  // orderProducts: {
  //   type: [Schema.Types.ObjectId],
  //   ref: "Product"
  // },
  
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;