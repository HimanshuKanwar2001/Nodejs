import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import addProductValidationMiddleware from './src/middleware/validation.middleware.js';
import { uploadFile } from './src/middleware/file-upload.middleware.js';

const server=express();

//Static server file from the src/views directory
server.use(express.static(path.join(path.resolve(),"src","views")));
server.use(express.static(path.join(path.resolve(),"public")));

//parse form data
server.use(express.urlencoded({
    extended:true
})); 

//setup view engine settings
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),"src","views"))
server.use(expressEjsLayouts);


//create an instance of ProductController
const productController=new ProductController();


server.get('/',productController.getProduct);
server.get('/new',productController.getAddForm);
server.get("/update-product/:id",productController.getUpdateProductView);


server.post('/add',uploadFile.single('imageUrl'),addProductValidationMiddleware,productController.postAddProduct);
server.post('/update-product',productController.postUpdateProduct);
server.post('/delete-product/:id',productController.deleteProduct);

server.get('/',(req,res)=>{
    return res.send("Welcome to Inventory App");
})





server.listen(3100,(err)=>{
    if(err){
        console.log("ERROR:",err);
    }
    else{
        console.log("Sever is working in Port 3100");
    }
})