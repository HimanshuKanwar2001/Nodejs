import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProduct(req, res) {
    let products = ProductModel.get();
    // console.log(products);
    // console.log(path.resolve());

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
    var products=ProductModel.getAll();
    res.render('index',{products});
    // res.redirect("/");
  }
  getUpdateProductView(req,res,next){
    //1.if product exists then return view\
    const {id}=req.body;
    const productFound=Product.getById(id);
    if(productFound){
      return res.render("update-product",{product:productFound,errorMessage:null});
    }
    else{
      return res.status(401).send("Product not found");
    }

    //2.else return errors
  }
}
