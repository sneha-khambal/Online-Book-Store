import express from "express";
import bookRoutes from "./routes/booksRoutes.js";
import mongoose from "mongoose";
import userAuthRouter from "./routes/userAuthRoutes.js";

const app = express();
app.use(express.json());

app.use("/", bookRoutes);
app.use("/user", userAuthRouter); 



const dbUrl = "mongodb://127.0.0.1:27017/onlineBookStore";
const port = 3000;
mongoose
  .connect(dbUrl)
  .then(() => {
    try {
      console.log("App connected to Database");
      app.listen(port, () => {
        console.log("port listening on " + port);
      });
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
