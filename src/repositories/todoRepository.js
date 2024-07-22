import Todo from "../modals/todosModal.js";
import asyncHandler from "express-async-handler";

export const createTodo = asyncHandler(async (req, res) => {
  const { title, description, status } = req.body;

  console.log(title, description, status);

  const todo = await Todo.create({
    user: req.user?._id,
    title,
    description,
    status,
  });

  return res.json(todo);
});

export const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({
    user: req.user._id,
  });

  res.json(todos);
});

export const updateTodoById = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { title, description, status } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      _id,
      {
        title,
        description,
        status,
      },
      {
        new: true,
      }
    );

    const todos = await Todo.find({
      user: req.user._id,
    });

    return res.status(201).json(todos);
  } catch (e) {
    res.status(404).json({ message: "Item not found" });
  }
});

export const deleteTodoById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.deleteOne({ _id: id });

    const todos = await Todo.find({
      user: req.user._id,
    });

    return res.status(201).json(todos);
  } catch (e) {
    res.status(404).json({ message: "Item not found" });
  }
});
