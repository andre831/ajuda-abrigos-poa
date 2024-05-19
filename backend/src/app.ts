import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import apiRoutes from "@/api";
import { delay } from "@/lib/helper/delay.helper";
import { getCurrentDate } from "@/lib/helper/moment.helper";
import { allowedOrigins } from "@/lib/config/allowed-origins.config";
import { APP_CONFIG, DATABASE_URI } from "@/lib/config/env.config";

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: allowedOrigins }));

app.use("/api", apiRoutes);

const connect = async () => {
  let isConnected = false;

  do {
    if (mongoose.connection.readyState !== 1) {
      try {
        mongoose.connect(DATABASE_URI);

        console.log(`${getCurrentDate()} - Connected to MongoDB`);

        isConnected = true;
      } catch (err) {
        console.error(
          `${getCurrentDate()} - ERROR - Error to connect in Database. MESSAGE: ` +
            err
        );

        console.warn(
          `${getCurrentDate()} - WARN - Database Timeout - Retrying in 5 seconds...`
        );

        await delay(5000);
      }
    } else {
      isConnected = true;
    }
  } while (!isConnected);
};

app.listen(APP_CONFIG.port, async () => {
  console.log("Server running on port ");
  await connect();
});
