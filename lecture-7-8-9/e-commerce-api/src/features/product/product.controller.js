import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }

  addProduct(req, res) {
    console.log(req.body);
    const { name, price, sizes } = req.body;
    const imageUrl = req.file.filename;
    const newProduct = {
      name: name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: imageUrl,
    };
    const createdRecord = ProductModel.add(newProduct);
    return res.status(201).send(createdRecord);
  }

  rateProduct(req, res) {

    const userID=req.query.userID;
    const productID=req.query.productID;
    const rating=req.query.rating;
    const error=ProductModel.rateProduct(userID,productID,rating);
    if(error){
      return res.status(400).send("error")
      } else{
        res.status(200);
      }

  }

  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    return res.status(200).send(product);
  }

  filterProducts(req, res) {
    // const {minPrice,maxPrice,category}=req.query;
    console.log(req.query);
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    const result = ProductModel.filter(minPrice, maxPrice, category);
    if (!result) {
      return res.status(404).send("No Product available!! ");
    }
    return res.status(200).send(result);
  }
}
