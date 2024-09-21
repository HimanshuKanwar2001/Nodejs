import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProduct(req, res) {
    let products = ProductModel.get();
    // console.log(products);
    // console.log(path.resolve());

    res.render("index", { products: products ,userEmail:req.session.userEmail});

    // return res.sendFile(path.join(path.resolve(),"src","views",'products.html'))
  }

  getAddForm(req, res) {
    return res.render("new-product", { errorMessage: null ,userEmail:req.session.userEmail });
  }

  postAddProduct(req, res, next) {
    // console.log(req.body);
    const {name,desc,price}=req.body;
    const imageUrl="/images/"+req.file.filename;
    //access data from form
    ProductModel.add(name,desc,price,imageUrl);
    let products = ProductModel.get();
    res.render("index", { products ,userEmail:req.session.userEmail});
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
        errorMessage: null,userEmail:req.session.userEmail
      });
    } 
    //2.else return errors
    else {
      return res.status(401).send("Product not found");
    }

  }

  postUpdateProduct(req,res){
    ProductModel.update(req.body);
    let products = ProductModel.get();
    res.render("index", { products });
  }

  deleteProduct(req,res){
    const id=req.params.id;
    // console.log("ID IDHAR HAI BHAI",id)
    const productFound = ProductModel.getById(id);
    
    if (!productFound) {
      return res.status(401).send("Product not found");
    } 


    ProductModel.delete(id);
    let products = ProductModel.get();
    res.render("index", { products });

    
  }
}
