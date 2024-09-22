//Manage routes/path to ProductCOntroller


//1.Import Express.
import express from "express";
import ProductController from "./product.controller.js";
// 2.Initialize Express router.
const router=express.Router();
const productController=new ProductController();

//All the paths to controller methods.
//localhost/api/products
router.get('/',productController.getAllProducts);
router.post('/',productController.addProduct);


export default router;