import app from "./app.js";
import "dotenv/config";
import { connectToDB } from "./config/db.js";
const PORT = process.env.PORT;
const DB_CONNECTION = process.env.DB_URI;

connectToDB(DB_CONNECTION);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
