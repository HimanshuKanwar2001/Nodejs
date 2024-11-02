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
    get(req,res){
        const userId=req.userID;
        const result=CartItemModel.get(userId);
        if(!result){
           return res.status(404).send(result);
        }
        else{
            return res.status(200).send(result);
        }
    }
    delete(req,res){
        const userID=req.userID;
        const cartItemID=req.params.id;
        const error=CartItemModel.delete(cartItemID,userID);
        if(error){
            return res.status(404).send(error);
        }else{
            return res.status(200).send("Cart Item is removed")
        }

    }
}