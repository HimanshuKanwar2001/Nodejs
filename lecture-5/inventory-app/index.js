import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';

const server=express();

//setup view engine settings
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),"src","views"))
server.use(expressEjsLayouts);


//create an instance of ProductController
const productController=new ProductController();


server.get('/',productController.getProduct);
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