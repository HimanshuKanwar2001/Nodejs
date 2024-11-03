//Manage routes/paths to UserController

import express from "express";
import userController from "./user.controller.js";

//localhost:3200/api/users/
const userRouter = express.Router();

const UserController = new userController();

userRouter.post("/signup", (req, res) => {
  UserController.signUp(req, res);
});
userRouter.post("/signin", (req, res) => {
  UserController.signIn(req, res);
});

export default userRouter;
