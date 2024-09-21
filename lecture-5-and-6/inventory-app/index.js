import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import UserController from "./src/controllers/user.controller.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import addProductValidationMiddleware from "./src/middleware/validation.middleware.js";
import { uploadFile } from "./src/middleware/file-upload.middleware.js";
import session from "express-session";
import {auth} from "./src/middleware/auth.middleware.js"
import cookieParser from "cookie-parser";
import { setLastVisit } from "./src/middleware/lastVisit.middleware.js";

const app = express();

//Static server file from the src/views directory
app.use(express.static(path.join(path.resolve(), "src", "views")));
app.use(express.static(path.join(path.resolve(), "public")));
app.use(cookieParser());
app.use(setLastVisit);
app.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);

//parse form data
app.use(
  express.urlencoded({
    extended: true,
  })
);

//setup view engine settings
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);

//create an instance of ProductController
const productController = new ProductController();
const usersController = new UserController();

app.get("/register", usersController.getRegister);
app.get("/login", usersController.getLogin);
app.get("/", auth, productController.getProduct);
app.get("/new", auth, productController.getAddForm);
app.get("/update-product/:id", auth, productController.getUpdateProductView);
app.get('/logout',usersController.logout);

app.post("/register", usersController.postRegister);
app.post("/login", usersController.postLogin);
app.post(
  "/add",
  auth,
  uploadFile.single("imageUrl"),
  addProductValidationMiddleware,
  auth,
  productController.postAddProduct
);
app.post("/update-product", auth, productController.postUpdateProduct);
app.post("/delete-product/:id", auth, productController.deleteProduct);

app.get("/", (req, res) => {
  return res.send("Welcome to Inventory App");
});

app.listen(3100, (err) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("Sever is working in Port 3100");
  }
});
