import express from "express";
import { createUser, loginUser } from "../repositories/userRepository.js";

const router = express.Router();

router.post("/", createUser);

router.post("/login", loginUser);

export default router;
