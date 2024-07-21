import dotenv from "dotenv";

const envConfig = dotenv.config();

export const env = {
  APP_PORT: process.env.APP_PORT,
};
