import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProduct(req, res) {
    let products = ProductModel.get();
    console.log(products);
    console.log(path.resolve());

    res.render("index", { products: products });

    // return res.sendFile(path.join(path.resolve(),"src","views",'products.html'))
  }

  getAddForm(req, res) {
    return res.render("new-product",{errorMessage:null});
  }

  postAddProduct(req, res, next) {
    // console.log(req.body);
 
    //access data from form
    ProductModel.add(req.body);
    res.redirect("/");
  }
}
