import jwt from 'jsonwebtoken';

const jwtAuth=(req,res,next)=>{


    
    // 1.Read the token
const token=req.headers['authorization'];
//Token 123123123dsfadfsafsafsadf.sdfwdsf342rtdfsafdffdfs.sdafgasdfasdf23dfXAFDSA

            
//2.if no token , return the error.
if(!token){
    return res.status(401).send("Unauthorized");
}

// 3.check if token is valid.
try{
    const payload=jwt.verify(token,"44Rn4WEv4P2BKwNjDoKbGBFIXQWgAwBn");
    // console.log("Payload",payload);
    req.userID=payload.userID;
}catch(error){
    // 4.return error
    console.log(error);
    return res.status(401).send("Unauthorized");
}
// 5.call next middleware
next();
}

export default jwtAuth;