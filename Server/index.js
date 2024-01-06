// import files
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import Users_Routes from "./app/Routes/Users_Routes.js";

mongoose
  .connect(process.env.MONGO_DB_URLs)
  .then(() => console.log(`Connected to Server Successfully`));

// middlewares
const App = express();
App.use(express.json());
App.use(cors());
App.use("/API/Users", Users_Routes);
App.use("*", (Req, Res) => {
  Res.json({
    Status: "Faild",
    message: "Can't access this Route. ",
  });
});

// Server
App.listen(3001, () => {
  console.log("Listen in port 3000");
});
