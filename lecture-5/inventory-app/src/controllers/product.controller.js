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
    return res.render("new-product", { errorMessage: null });
  }

  postAddProduct(req, res, next) {
    // console.log(req.body);

    //access data from form
    ProductModel.add(req.body);
    var products = ProductModel.getAll();
    res.render("index", { products });
    // res.redirect("/");
  }

  getUpdateProductView(req, res, next) {
    //1.if product exists then return view\
    const { id } = req.params;
    console.log("ID HERE", id);
    const productFound = ProductModel.getById(id);
    // console.log(productFound);
    if (productFound) {
      return res.render("update-product", {
        product: productFound,
        errorMessage: null,
      });
    } 
    //2.else return errors
    else {
      return res.status(401).send("Product not found");
    }

  }

  postUpdateProduct(req,res){
    ProductModel.update(req.body);
    var products = ProductModel.get();
    res.render("index", { products });
  }
}
