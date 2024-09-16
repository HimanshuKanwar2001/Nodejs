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
    //validate data
    const { name, price, imageUrl } = req.body;
    //trim removes the space from the start and the end
    let errors=[];
    if (!name || name.trim == "") {
      errors.push("Name is required");
    }
    if (!price || parseFloat(price) < 1) {
      errors.push("Price must be a positive value");
    }
    try {
      const validUrl = new URL(imageUrl);
    } catch (err) {
      errors.push("URL is invalid");
    }

    if (errors.length > 0) {
      return res.render("new-product", { errorMessage: errors[0], });
    }

    // console.log(req.body);

    //access data from form
    ProductModel.add(req.body);
    res.redirect("/");
  }
}
