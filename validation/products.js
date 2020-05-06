const Validator = require("validator");
const validText = require("./valid-text");
const validNumber = require("./valid-number");

module.exports = function validateProductInput(data) {
  let errors = {};
  
  data.name = validText(data.name) ? data.name : "";
  data.description = validText(data.description) ? data.description : "";
  data.price = validNumber(parseInt(data.price)) ? data.price : "";
  data.category = validNumber(parseInt(data.category)) ? data.category : "";
  if (!Validator.isLength(data.description, { min: 10, max: 140 })) {
    errors.description = "Description must be between 10 and 140 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
