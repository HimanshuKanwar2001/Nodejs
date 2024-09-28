import CartItemModel from "./cartitems.model.js";

export default class CartItemController{

    add(req,res){
        const {productID,quantity}=req.query;
        const userId=req.userID;
        const result=CartItemModel.add(productID,userId,quantity);
        if(!result){
            return res.status(401).send(result);
        }
        else{
            res.status(201).send("Cart is updated")
        }

    }
}