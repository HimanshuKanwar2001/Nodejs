import { ApplicationError } from "../../error-handler/applicationError.js";
import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class userController {
  async signUp(req, res) {
    try {
      const { name, email, password, type } = req.body;
      const user = await UserModel.signUp(name, email, password, type);
      res.status(201).send(user);
    } catch (err) {
      throw new ApplicationError("SignUp Failed", 500);
    }
  }

  signIn(req, res) {
    const result = UserModel.signIn(req.body.email, req.body.password);
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
  }
}
