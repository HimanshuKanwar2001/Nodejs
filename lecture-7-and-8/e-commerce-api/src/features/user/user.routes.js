//Manage eoutes/paths to UserController

import express from 'express'
import userController from './user.controller.js';



const userRouter=express.Router();


const UserController=new userController();

userRouter.post('/signup',UserController.signUp);
userRouter.post('/signin',UserController.signIn);


export default userRouter;