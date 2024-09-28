//1.Import Express
import express from "express";
import ProductRouter from "./src/features/product/product.routes.js";
import UserRouter from "./src/features/user/user.routes.js";
import bodyParser from "body-parser";
import path from 'path';
import jwtAuth from "./src/middleware/jwt.middleware.js";
import cartRouter from "./src/features/cart/cartitems.routes.js";

//2.Create Server
const app = express();


app.use(express.static(path.join(path.resolve(),"public")));
app.use(bodyParser.json()); //   or     app.use(express.json()); 

//for all requests related to product,redirect to product routes
//localhost:3200/api/products
app.use("/api/products",jwtAuth, ProductRouter);
app.use("/api/cart",jwtAuth,cartRouter);
app.use("/api/users",UserRouter);

//3.Default requrest handler
app.get("/", (req, res) => {
  return res.send("Welcome to Ecommerce api");
});

// /api/users
// /api/products

//4.Specify port
app.listen(3200, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Server is running on port 3200");
  }
});
