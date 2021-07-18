const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../User/user");
const Product = require("../Product/product");

const router = express.Router();

const getToken = (request) => {
  const authorization = request.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

router.post("/", async (request, response) => {
  try {
    const { id, quantity } = request.body;

    if (!id || !quantity) {
      return response.status(404).json({
        error: "Wrong parameters",
      });
    }

    const token = getToken(request);
    const { email } = jwt.verify(token, "secret");

    const user = await User.findOne({ email });

    if (!user) {
      return response.status(401).json({
        error: "invalid username or password",
      });
    }

    const productObj = await Product.findOne({ _id: id }, function (err, doc) {
      if (err) {
        return response.status(404).json({
          error: "Wrong parameters",
        });
      }
    });

    const product = productObj.toJSON();
    product.quantity = quantity;

    const exist = await user.cart.find((item) => item.id === id);

    if (exist) {
      return response.status(404).json({
        error: "Already in cart",
      });
    }

    user.cart = user.cart.concat(product);
    await user.save();

    response.json(product);
  } catch (err) {
    response.json(err);
  }
});

router.get("/", async (request, response) => {
  const token = getToken(request);
  const { email } = jwt.verify(token, "secret");

  const user = await User.findOne({ email });

  if (!user) {
    return response.status(401).json({
      error: "No user",
    });
  }

  response.json(user.cart);
});

module.exports = router;
