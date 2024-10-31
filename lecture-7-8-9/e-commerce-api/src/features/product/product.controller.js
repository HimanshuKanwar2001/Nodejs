import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }

  addProduct(req, res) {
    console.log(req.body);
    const { name, price, sizes, desc, category } = req.body;
    const imageUrl = req.file.filename;
    const newProduct = {
      name: name,
      desc: desc,
      price: parseFloat(price),
      imageUrl: imageUrl,
      category: category,
      sizes: sizes.split(","),
    };
    const createdRecord = ProductModel.add(newProduct);
    return res.status(201).send(createdRecord);
  }

  rateProduct(req, res, next) {
    console.log(req.query);
    try {
      const userID = req.query.userID;
      const productID = req.query.productID;
      const rating = req.query.rating;
      try {
        ProductModel.rateProduct(userID, productID, rating);
      } catch (error) {
        return res.status(400).send(error.message);
      }

      return res.status(200).send("Rating has been added");
    } catch (err) {
      console.log("Passing error to middleware");
      next(err);
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
