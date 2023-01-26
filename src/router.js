import express from "express";
import { friends, chats, find, more, settings, chatroom, getSignUp, postSignUp, getLogin, postLogin } from "./controller"
const globalRouter = express.Router("/");

globalRouter.get("/", getLogin).post("/", postLogin);
globalRouter.get("/friends", friends);
globalRouter.get("/chats", chats);
globalRouter.get("/find", find);
globalRouter.get("/more", more);
globalRouter.get("/settings", settings);
globalRouter.get("/chats/:id", chatroom);
globalRouter.get("/signup", getSignUp).post("/signup", postSignUp);
export default globalRouter;