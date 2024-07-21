import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { connectToDb } from "./config/db.js";
import { env } from "./config/dotenv.js";

const app = express();

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

//Starting express server
const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
