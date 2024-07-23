import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { connectToDb } from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandling.js";

const app = express();

//env config
const envConfig = dotenv.config();

//Allowing Body request body objects
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//status route
app.route("/status").get((req, res) => {
  res.status(201).json({ message: "Server is running" });
});

//Connect to database
connectToDb();

//routes
app.use("/api/user", userRoutes);
app.use("/api/tasks", taskRoutes);

//error handler middleware
app.use(errorHandler);

//Starting express server
const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
