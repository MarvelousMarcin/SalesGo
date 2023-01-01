const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../model/User");

userRouter.post("/newuser", async (req, res) => {
  const { id } = req.body;

  const foundUser = await User.findOne({ id });

  if (foundUser) {
    return res.status(400).send({ error: "User already exists" });
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

module.exports = userRouter;
