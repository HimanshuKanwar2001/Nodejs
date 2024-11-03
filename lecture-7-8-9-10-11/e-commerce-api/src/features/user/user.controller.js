import { ApplicationError } from "../../error-handler/applicationError.js";
import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import UserRepository from "./user.repository.js";

export default class userController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(req, res) {
    try {
      const { name, email, password, type } = req.body;
      const user = new UserModel(name, email, password, type);
      console.log("user", user);
      await this.userRepository.signUp(user);
      res.status(201).send(user);
    } catch (err) {
      throw new ApplicationError("SignUp Failed", 500);
    }
  }

  async signIn(req, res, next) {
    try {
      const result = await this.userRepository.signIn(
        req.body.email,
        req.body.password
      );
      if (!result) {
        return res.status(400).send("Incorrect Credentails");
      } else {
        //1.Create Token ijodghfiusdfusid.jklsadfhjasodhfjls.ojisdhfojshf
        const token = jwt.sign(
          { userID: result.id, email: result.email },
          "44Rn4WEv4P2BKwNjDoKbGBFIXQWgAwBn",
          {
            expiresIn: "1h",
          }
        );
        // 2.Send token.
        return res.status(200).send(token);
      }
    } catch (err) {
      console.log(err);
      return res.status(401).send("Something went wrong");
    }
  }
}
