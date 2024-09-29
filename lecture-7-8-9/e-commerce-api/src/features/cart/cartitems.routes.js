import express from "express"
import CartItemController from "./cartitems.controller.js";

const cartRouter=express.Router(); 
const cartController=new CartItemController();

cartRouter.delete("/:id",cartController.delete);
cartRouter.post("/",cartController.add);
cartRouter.get("/",cartController.get);


export default cartRouter;