//1.Import Express
import express from "express";
import swagger from "swagger-ui-express";

import ProductRouter from "./src/features/product/product.routes.js";
import UserRouter from "./src/features/user/user.routes.js";
import bodyParser from "body-parser";
import path from "path";
import jwtAuth from "./src/middleware/jwt.middleware.js";
import cartRouter from "./src/features/cart/cartitems.routes.js";
import apiDoc from "./swagger.json" assert { type: "json" };

//2.Create Server
const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(bodyParser.json()); //   or     app.use(express.json());

//Bearer <token>
//for all requests related to product,redirect to product routes
//localhost:3200/api/products
app.use("/api-docs", swagger.serve, swagger.setup(apiDoc));

app.use("/api/products", jwtAuth, ProductRouter);
app.use("/api/cartItems", jwtAuth, cartRouter);
app.use("/api/users", UserRouter);

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
