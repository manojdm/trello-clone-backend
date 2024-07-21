import mongoose from "mongoose";
import colors from "colors";

export async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("DB Successfully connected!!".yellow.bold.underline);
  } catch (e) {
    throw new Error(e);
  }
}
