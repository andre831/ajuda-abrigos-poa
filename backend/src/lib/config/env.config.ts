import * as dotenv from "dotenv";
import { getCurrentDate } from "../helper/moment.helper";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

if (!process.env.DATABASE_URI)
  throw new Error(
    `${getCurrentDate()} - ERROR: ENV - DATABASE URI not defined`
  );

if (!process.env.JWT_SECRET)
  throw new Error(`${getCurrentDate()} - ERROR: ENV - JWT SECRET not defined`);

// DATABASE
export const DATABASE_URI = process.env.DATABASE_URI;

// AUTH
export const JWT_SECRET = process.env.JWT_SECRET;
