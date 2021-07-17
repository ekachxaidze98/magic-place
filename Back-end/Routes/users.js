const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../User/user");

const router = express.Router();

router.post("/register", async (request, response) => {
  try {
    const body = request.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
      name: body.name,
      username: body.username,
      email: body.email,
      password: passwordHash,
    });

    const savedUser = await user.save();

    const userForToken = {
      name: savedUser.name,
      id: savedUser._id,
      email: savedUser.email,
    };

    const token = jwt.sign(userForToken, "secret");
    savedUser.token = token;
    await user.save();

    response.json(savedUser);
  } catch (err) {
    console.log(err);
    response.json(err);
  }
});

router.post("/login", async (request, response) => {
  try {
    const body = request.body;

    const user = await User.findOne({ email: body.email });
    const passwordCorrect =
      user === null
        ? false
        : await bcrypt.compare(body.password, user.password);

    if (!(user && passwordCorrect)) {
      return response.status(401).json({
        error: "invalid username or password",
      });
    }

    const userForToken = {
      username: user.name,
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(userForToken, "secret");
    user.token = token;
    await user.save();

    response.status(200).send({ user });
  } catch (err) {
    response.json(err);
  }
});

router.post("/check", async (request, response) => {
  try {
    const body = request.body;
    const { email } = jwt.verify(body.token, "secret");
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(401).json({
        error: "invalid username or password",
      });
    }

    response.status(200).send({ user });
  } catch (err) {
    response.status(401).json({
      error: "invalid username or password",
    });
  }
});

module.exports = router;
