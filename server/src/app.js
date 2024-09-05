import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());

mongoose
  .connect(MONGO_URL, { dbName: "demo_db" })
  .then(() => {
    console.log("connected to DB successfully");

    app.listen(PORT, "localhost", () =>
      console.log(`Listening to port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));

app.use("/", (req, res) => {
  res.send("hello world");
});
