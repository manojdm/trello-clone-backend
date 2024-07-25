import Task from "../modals/tasksModal.js";
import asyncHandler from "express-async-handler";

export const createTask = asyncHandler(async (req, res) => {
  const { title, description, status } = req.body;

  await Task.create({
    user: req.user?._id,
    title,
    description,
    status,
  });

  const tasks = await Task.find({
    user: req.user._id,
  });

  return res.json(tasks);
});

export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({
    user: req.user._id,
  });

  res.json(tasks);
});

export const updateTaskById = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const { title, description, status } = req.body;

  try {
    await Task.findByIdAndUpdate(
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

    const tasks = await Task.find({
      user: req.user._id,
    });

    return res.status(201).json(tasks);
  } catch (e) {
    res.status(404).json({ message: "Item not found" });
  }
});

export const deleteTaskById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    await Task.deleteOne({ _id: id });

    const tasks = await Task.find({
      user: req.user._id,
    });

    return res.status(201).json(tasks);
  } catch (e) {
    res.status(404).json({ message: "Item not found" });
  }
});
