
import express from "express";
import morgan from "morgan"
// import globalRouter from "./router";

const app = express();
const logger = morgan("dev");
const port = process.env.PORT || 3000;
app.use(logger);

// app.use("/", globalRouter);
app.use(express.static(process.cwd() + "/public"));

app.listen(port, () => console.log("running servere on localhost:3000"));
