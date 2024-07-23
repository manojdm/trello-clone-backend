import express from "express";
import {
  createTask,
  deleteTaskById,
  getTasks,
  updateTaskById,
} from "../repositories/taskRepository.js";
import { protect } from "../middlewares/protectMiddleware.js";

const router = express.Router();

router.post("/", protect, createTask);

router.get("/", protect, getTasks);

router.put("/:id", protect, updateTaskById);

router.delete("/:id", protect, deleteTaskById);

export default router;
