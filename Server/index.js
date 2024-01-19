// import files
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import Users_Routes from "./App/Routes/Users_Routes.js";
import Products_Routes from "./App/Routes/Products_Routes.js";
import Cart_Routes from "./App/Routes/Cart_Routes.js";
import Rate_Routes from "./App/Routes/Rate_Routes.js";

//File System
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// make a conection to data base
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log(`Connected to Server Successfully`));

// middlewares
const App = express();
App.use(express.json());
App.use(cors());

App.use("/Uploads", express.static(path.join(__dirname, "/Uploads")));
App.use("/API/Users", Users_Routes);
App.use("/API/Products", Products_Routes);
App.use("/API/Cart", Cart_Routes);
App.use("/API/Rate", Rate_Routes);
App.use("*", (Req, Res) => {
  Res.status(200).json({
    Status: "Faild",
    message: "Can't access this Route. ",
  });
});

// Server
App.listen(3001, () => {
  console.log("Listen in port 3000");
});
