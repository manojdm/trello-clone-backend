import express from "express";
import {
  createTodo,
  deleteTodoById,
  getTodos,
  updateTodoById,
} from "../repositories/todoRepository.js";
import { protect } from "../middlewares/protectMiddleware.js";

const router = express.Router();

router.post("/", protect, createTodo);

router.get("/", protect, getTodos);

router.put("/:id", protect, updateTodoById);

router.delete("/:id", protect, deleteTodoById);

export default router;
