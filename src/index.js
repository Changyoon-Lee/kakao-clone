
import express from "express";
import morgan from "morgan"
// import globalRouter from "./router";

const app = express();
const logger = morgan("dev");
app.use(logger);


// app.use("/", globalRouter);
app.use(express.static(__dirname + "/public"));

app.listen(3000, () => console.log("running servere on localhost:3000"));
