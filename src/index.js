
import express from "express";
import morgan from "morgan"
// import globalRouter from "./router";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use((req, res, next) => {
    console.log(process.cwd());
    next();
})
// app.use("/", globalRouter);
app.use(express.static(process.cwd() + "/public"));

app.listen(3000, () => console.log("running servere on localhost:3000"));
