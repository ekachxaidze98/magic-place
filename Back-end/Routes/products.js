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
  const body = request.body;
  console.log(body);
  const notes = await Product.find({});

  response.json(notes.map((note) => note.toJSON()));
});

router.post("/filter", async (request, response) => {
  const { search, sort, filter } = request.body;

  const notes = await Product.find({ title: { $regex: search || "" } })
    .sort(
      (sort && sort.price && { price: sort.price }) ||
        (sort && sort.title && { title: sort.title })
    )
    .where("price")
    .gt((filter && filter[0]) || 0)
    .lt((filter && filter[1]) || 9999999999);

  response.json(notes.map((note) => note.toJSON()));
});

router.delete("/:id", async (request, response) => {
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

  await Product.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

router.put("/:id", async (request, response, next) => {
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

  const product = {
    title,
    image,
    description,
    price,
  };

  Product.findByIdAndUpdate(request.params.id, product, { new: true })
    .then((updatedProduct) => {
      response.json(updatedProduct.toJSON());
    })
    .catch((error) => next(error));
});

module.exports = router;
