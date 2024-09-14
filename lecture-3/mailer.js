// 1 import nodemailer

const nodemailer=require('nodemailer');
require('dotenv').config();


// 2. Configure email and send it 

async function sendMail(){



    // 1. Create an email transporter
    // SMTP(Simple Mail Transfer Protocol)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.USER,
            pass:process.env.PASS
        },
    });


    //2 . Configure email content
    const mailOptions={
        from: 'himanshu.kanwar.instinct@gmail.com',
        to:"hkanwar2000001@gmail.com",
        subject:"Welcome to NOdeJS App",
        text:"THis is an email using nodemailer in nodejs"
    };

    //3.Send the email.
    try{
        const result =await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

    }
    catch(err){
        console.log("Email send failed with error :",err);
    }

}


sendMail();