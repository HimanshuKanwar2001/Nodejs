import ProductModel from "../models/product.model.js";
import UserModel from "../models/user.modle.js";

export default class UserController {
  getRegister(req, res) {
    res.render("register");
  }

  getLogin(req, res) {
    res.render("login", { errorMessage: null });
  }
  postRegister(req, res) {
    const { name, email, password } = req.body;
    UserModel.add(name, email, password);

    res.render("login", { errorMessage: null });
  }
  postLogin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isValidUser(email, password);
    if (!user) {
      res.render("login", { errorMessage: "Invalid Credentials" });
    }
    let products = ProductModel.get();
    res.render("index", { products: products });
  }
}
