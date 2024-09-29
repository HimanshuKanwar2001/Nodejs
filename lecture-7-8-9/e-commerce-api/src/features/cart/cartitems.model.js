import ProductModel from "../product/product.model.js";
import UserModel from "../user/user.model.js";

//productID,userID,quantity
export default class CartItemModel {
  constructor(productID, userID, quantity, id) {
      this.id = id;
    this.productID = productID;
    this.userID = userID;
    this.quantity = quantity;
  }
  static getAll(){
    return cartItems;
  }
  static add(productID, userID, quantity) {
    const productId = ProductModel.getAll().find((p) => p.id == productID);
    if (!productId) {
      return "product not found";
    }
    const userId = UserModel.getAll().find((p) => p.id == userID);
    if (!userId) {
      return "user not found";
    }
    
    const cartItemIndex=cartItems.findIndex(c=>c.productID==productID && c.userID == userID);
   
    if(cartItemIndex>=0){
      cartItems[cartItemIndex].quantity=quantity;
      return cartItems;
    }

    const cartItem = new CartItemModel(productID, userID, quantity);
    cartItem.id = cartItems.length + 1;
    cartItems.push(cartItem);

    return cartItems;
  }

  static get(userID) {
    const cartItem = cartItems.filter((c) => c.userID == userID);
    return cartItem;
  }

  static delete(cartItemID,userID){
    const cartItemIndex=cartItems.findIndex(i=>i.id==cartItemID && i.userID == userID);
    if(cartItemIndex == -1){
      return "Item not found";
    }
    else{
      cartItems.splice(cartItemIndex,1);
      
    }
  }
}

let cartItems = [new CartItemModel(1, 2, 1,1), new CartItemModel(1, 1, 2,2)];
