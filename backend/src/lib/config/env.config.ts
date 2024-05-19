import * as dotenv from "dotenv";
import path from "path";

import { getCurrentDate } from "../helper/moment.helper";
import { AppConfig } from "../types/app-config.types";

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
export const DATABASE_URI: string = process.env.DATABASE_URI;

// AUTH
export const JWT_SECRET: string = process.env.JWT_SECRET;

export const APP_CONFIG: AppConfig = {
  port: Number(process.env.APP_PORT) ?? 1339,
};
