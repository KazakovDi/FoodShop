const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./Routes/authRouter");
const shopRouter = require("./Routes/shopRouter");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/shops", shopRouter);

const start = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://user:user@cluster0.gjm6c.mongodb.net/FoodShop?retryWrites=true&w=majority"
    );
    app.listen(process.env.PORT || 5000, () => {
      console.log("Сервер запущен");
    });
  } catch (err) {
    console.log(err);
  }
};
start();
