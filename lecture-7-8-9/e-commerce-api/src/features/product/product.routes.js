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
productRouter.get("/", productController.getAllProducts);
productRouter.post(
  "/",
  uploadFile.single("imageUrl"),
  productController.addProduct
);
productRouter.get("/:id", productController.getOneProduct);

export default productRouter;
