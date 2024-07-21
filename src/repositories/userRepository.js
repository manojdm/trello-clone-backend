import User from "../modals/userModal.js";
import { hashPassword } from "../config/bcrypt.js";
import { generateToken } from "../config/jwt.js";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  let user = await User.findOne({
    $or: [{ username: username, email: email }],
  });

  if (!user) {
    user = await User.create({
      username,
      email,
      password: await hashPassword(password),
    });

    return res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  }

  return res.status(409).json({ message: "User already exists" });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    username: username,
  });

  if (user && (await user.matchPassword(password))) {
    return res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  }

  return res.status(404).json({ message: "Incorrect credentials" });
});
