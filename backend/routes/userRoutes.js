const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../utils/verifyToken");

const User = require("../model/User");

userRouter.post("/newuser", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send({ error: "Empty input!" });
  }

  if (id.length > 8) {
    return res.status(400).send({ error: "Too long id" });
  }

  const foundUser = await User.findOne({ id });

  if (foundUser) {
    return res.status(400).send({ error: "User already exists!" });
  }

  const user = new User({ id });

  await user.save();

  return res.status(200).send(user);
});

userRouter.post("/login", async (req, res) => {
  const { id } = req.body;

  const foundUser = await User.findOne({ id });

  if (!foundUser) {
    return res.status(400).send({ error: "User not found" });
  }

  const token = jwt.sign({ id }, process.env.JWT_TOKEN);

  res.send({ token });
});

userRouter.post("/user_data", auth, (req, res) => {
  res.send(req.user);
});

module.exports = userRouter;