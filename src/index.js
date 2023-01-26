
import express from "express";
import morgan from "morgan"
import globalRouter from "./router";

const app = express();
const logger = morgan("dev");
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + "/public"));

app.use("/", globalRouter);

app.listen(port, () => console.log("running servere on localhost:3000"));
