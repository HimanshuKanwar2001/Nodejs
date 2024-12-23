//1.Import Express
import express from "express";
import dotenv from "dotenv";
//load all the environment variables in application
dotenv.config();
import swagger from "swagger-ui-express";
import cors from "cors";

import { assert } from "console";
import ProductRouter from "./src/features/product/product.routes.js";
import UserRouter from "./src/features/user/user.routes.js";
import bodyParser from "body-parser";
import path from "path";
import jwtAuth from "./src/middleware/jwt.middleware.js";
import cartRouter from "./src/features/cart/cartitems.routes.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const apiDoc = require('./swagger.json');



import loggerMiddleware from "./src/middleware/logger.middleware.js";
// import { logger } from "./src/middleware/logger.middleware.js";
import { ApplicationError } from "./src/error-handler/applicationError.js";
import { connectToMongoDB } from "./src/config/mongodb.js";

//2.Create Server
const app = express();

// //CORS policy configuration

let corsOptions = {
  origin: "http://127.0.0.1:5500",
  allowHeaders: "*",
};

app.use(cors(corsOptions));

// app.use((req,res,next)=>{
//   res.header("Access-Control-Allow-Origin","http://127.0.0.1:5500")

//   res.header("Access-Control-Allow-Headers","*")
//   res.header("Access-Control-Allow-Methods","*")
//   //return ok for preflight request.
//   if(req.method=="OPTIONS"){
//     return res.sendStatus(200);
//   }
//   next();
// })

app.use(express.static(path.join(path.resolve(), "public")));
app.use(bodyParser.json()); //   or     app.use(express.json());

//Bearer <token>
//for all requests related to product,redirect to product routes
//localhost:3200/api/products
app.use(loggerMiddleware);

app.use("/api-docs", swagger.serve, swagger.setup(apiDoc));

app.use("/api/products", jwtAuth, ProductRouter);
app.use("/api/cartItems", jwtAuth, cartRouter);
app.use("/api/users", UserRouter);

//3.Default requrest handler
app.get("/", (req, res) => {
  return res.send("Welcome to Ecommerce api");
});

//Error handler middleware
app.use((err, req, res, next) => {
  console.log(err);

  if (err instanceof ApplicationError) {
    res.status(err.code).send(err.message);
  }
  // server errors
  res.status(500).send("Something went wrong ,please try later");
});

//4.Middleware to handle 404 requests.
app.use((req, res) => {
  res
    .status(404)
    .send(
      "API not found.Please check our documentation for more information at localhost:3200/api-docs"
    );
});

// /api/users
// /api/products

//5.Specify port
app.listen(3200, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    connectToMongoDB();
    console.log("Server is running on port 3200");
  }
});
