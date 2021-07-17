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
    const { title, image, description, price } = request.body;
    const token = getToken(request);
    const { email } = jwt.verify(token, "secret");

    const user = await User.findOne({ email });

    if (!user) {
      return response.status(401).json({
        error: "invalid username or password",
      });
    }

    if (user && !user.isAdmin) {
      return response.status(403).json({
        error: "You don’t have permission",
      });
    }

    const product = new Product({
      title,
      image,
      description,
      price,
    });

    await product.save();

    response.json(product);
  } catch (err) {
    response.json(err);
  }
});

router.get("/", async (request, response) => {
  const notes = await Product.find({});

  response.json(notes.map((note) => note.toJSON()));
});

module.exports = router;
