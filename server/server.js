const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Response = require("./responseObj");

const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const authRouter = require("./authRouter");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/login", authRouter);
app.use("/posts", postRouter);

app.use((err, req, res, next) => {
  res.status(500).json(new Response(true, err.message, null));
});

mongoose.connect("mongodb://127.0.0.1:27017/mydata").then(() => {
  app.listen(3000, () => console.log("listening ... 3000"));
});
