/* eslint-disable array-callback-return */
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const users = require("./Routes/users.js");

app.use(cors());
app.use(express.json());

const MONGODB_URI =
  "mongodb+srv://webiz:webiz123@cluster0.gnmyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message);
  });

app.get("/", (req, res) => {
  res.send("hii");
});

app.use("/user", users);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
