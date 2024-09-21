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
    req.session.userEmail = email;
    let products = ProductModel.get();
    res.render("index", {
      products: products,
      userEmail: req.session.userEmail,
    });
  }

  logout(req, res) {
    //on logout ,destroy the session
    req.session.destroy((error) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/login");
      }
    });
  }
}
