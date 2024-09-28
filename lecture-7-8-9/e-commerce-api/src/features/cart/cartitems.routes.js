import express from "express"
import CartItemController from "./cartitems.controller.js";

const cartRouter=express.Router(); 
const cartController=new CartItemController();

cartRouter.post("/",cartController.add);


export default cartRouter;