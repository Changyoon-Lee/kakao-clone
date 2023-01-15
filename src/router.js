import express from "express";
import { login, friends, chats, find, more, settings, chatroom } from "./controller"
const globalRouter = express.Router("/");

globalRouter.get("/", login);
globalRouter.get("/friends", friends);
globalRouter.get("/chats", chats);
globalRouter.get("/find", find);
globalRouter.get("/more", more);
globalRouter.get("/settings", settings);
globalRouter.get("/chatroom", chatroom);

export default globalRouter;