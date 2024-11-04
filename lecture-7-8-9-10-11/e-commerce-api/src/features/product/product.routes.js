//Manage routes/path to ProductCOntroller

//1.Import Express.
import express from "express";
import ProductController from "./product.controller.js";
import { uploadFile } from "../../middleware/fileupload.middleware.js";
// 2.Initialize Express router.
const productRouter = express.Router();
const productController = new ProductController();

//All the paths to controller methods.

productRouter.post("/rate", productController.rateProduct);

// query parameters
// localhost:3200/api/products/filter?minPrice=10&maxPrice=20&category=Category1
productRouter.get("/filter", productController.filterProducts);

//localhos:3200/api/products
productRouter.get("/", (req, res) => {
  productController.getAllProducts(req, res);
});
productRouter.post("/", uploadFile.single("imageUrl"), (req, res) => {
  productController.addProduct(req, res);
});
productRouter.get("/:id", (req, res) => {
  productController.getOneProduct(req, res);
});

export default productRouter;
