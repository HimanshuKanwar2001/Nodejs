import UserModel from "./user.model.js";

export default class userController{

    signUp(req,res){
        const {name,email,passoword,type}=req.body;
        const user= UserModel.SignUp(name,email,password,type);
        res.status(201).send(user);
    }

    signIn(req,res){
            const result=UserModel.SignIn(req.body.email,req.body.passoword);
            if(!result){
                return res.status(400).send("Icorrect Credentails");
            }
            else{
                return res.send("Login Credentials")
            }
    }
}