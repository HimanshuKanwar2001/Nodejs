import ProductModel from "./product.model.js";
import ProductRepository from "./product.repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  async getAllProducts(req, res) {
    try {
      const products = await this.productRepository.getAll();
      console.log(products);
      res.status(200).send(products);
    } catch (err) {
      console.log(err);
      return res
        .status(401)
        .send("Something went wrong while getting all the products");
    }
  }

  async addProduct(req, res) {
    try {
      console.log(req.body);
      const { name, price, sizes, desc, category } = req.body;
      const imageUrl = req.file.filename;
      const newProduct = new ProductModel(
        name,
        desc,
        parseFloat(price),
        imageUrl,
        category,
        sizes.split(",")
      );
      const createdRecord = await this.productRepository.add(newProduct);
      return res.status(201).send(createdRecord);
    } catch (err) {
      console.log(err);
      return res.status(401).send("Something went wrong while adding Product");
    }
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

  async getOneProduct(req, res) {
    try {
      const id = req.params.id;
      const product = await this.productRepository.get(id);
      if (!product) {
        return res.status(404).send("Product not found");
      }
      return res.status(200).send(product);
    } catch (err) {
      console.log(err);
      return res
        .status(401)
        .send("Something went wrong while finding the product!");
    }
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
