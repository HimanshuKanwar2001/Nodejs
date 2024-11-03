import { ApplicationError } from "../../error-handler/applicationError.js";
import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";

export default class userController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(req, res) {
    try {
      const { name, email, password, type } = req.body;
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new UserModel(name, email, hashedPassword, type);
      console.log("user", user);
      await this.userRepository.signUp(user);
      delete user.password;
      res.status(201).send(user);
    } catch (err) {
      throw new ApplicationError("SignUp Failed", 500);
    }
  }

  async signIn(req, res, next) {
    try {
      // 1.Find user by email
      const user = await this.userRepository.findByEmail(req.body.email);
      console.log(user);
      if (!user) {
        return res.status(400).send("Incorrect Credentails");
      } else {
        // 2.Compare password with hashed password.
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          //3.Create Token   ijodghfiusdfusid.jklsadfhjasodhfjls.ojisdhfojshf
          const token = jwt.sign(
            { userID: result.id, email: result.email },
            "44Rn4WEv4P2BKwNjDoKbGBFIXQWgAwBn",
            {
              expiresIn: "1h",
            }
          );
          // 4.Send token.
          return res.status(200).send(token);
        } else {
          return res.status(400).send("Incorrect Credentails");
        }
      }
    } catch (err) {
      console.log(err);
      return res.status(401).send("Something went wrong");
    }
  }
}
