import express from "express";
import {
  createUser,
  loginUser,
  authGoogle,
} from "../repositories/userRepository.js";

const router = express.Router();

router.post("/", createUser);

router.post("/login", loginUser);

router.post("/google", authGoogle);

export default router;
