import ProductModel from "../product/product.model.js";
import UserModel from "../user/user.model.js";

//productID,userID,quantity
export default class CartItemModel {

  constructor(productID, userID, quantity,id) {
    this.productID=productID;
    this.userID=userID;
    this.quantity=quantity;
    this.id=id;
  }

  static add(productID,userID,quantity){
    const productId=ProductModel.find(p=>p.id==productID);
    if(!productId){
        return "product not found"
    }
    const userId=UserModel.find(p=>p.id==userID);
    if(!userId){
        return "user not found"
    }
    const cartItem=new CartItemModel(productID,userID,quantity)
    cartItem.id=cartItems.length+1;
    cartItems.push(cartItem);
    
    return cartItem;
    }
}

let cartItems = [new CartItemModel(1, 2, 1)];
