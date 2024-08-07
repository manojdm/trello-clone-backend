import User from "../modals/userModal.js";
import { hashPassword } from "../config/bcrypt.js";
import { generateToken } from "../config/jwt.js";
import asyncHandler from "express-async-handler";

export const createUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  let user = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (user && !user.password && user.googleId) {
    res
      .status(409)
      .json({ message: "User already exists, please use google to login" });
  }

  if (!user) {
    user = await User.create({
      username,
      email,
      password: await hashPassword(password),
    });

    return res.json({
      _id: user._id,
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

  if (user && !user?.password && user.googleId) {
    res
      .status(409)
      .json({ message: "User already exists, please use google to login" });
  }

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

export const authGoogle = asyncHandler(async (req, res) => {
  const { email, username, googleId } = req.body;

  let user = await User.findOne({
    $or: [{ email: email }, { username: username }],
  });

  if (!user) {
    user = await User.create({
      username,
      email,
      googleId,
    });

    return res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  }

  return res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: generateToken(user._id),
  });
});
