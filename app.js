import express from "express";
import PostRoute from "./routes/post.route.js";
import AuthRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", PostRoute);
app.use("/api/auth", AuthRoute);

app.use("/api/test", (req, res) => {
  res.send("Hello World");
});

app.listen(8800, () => {
  console.log("Server is running");
});
