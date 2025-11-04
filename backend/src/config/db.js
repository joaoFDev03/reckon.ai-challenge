// database connection config

import mongoose from "mongoose";

export async function connectToDB(uri) {
  try {
    await mongoose.connect(uri, {
      dbName: "reckon",
    });

    console.log("Connected to database");
  } catch (err) {
    console.error("Database connection failed!", err);
    process.exit(1);
  }
}
