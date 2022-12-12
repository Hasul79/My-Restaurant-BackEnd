const express = require('express');
const router= new express.Router();
const nodemailer = require("nodemailer");

router.post("/subscribe", (req, res)=>{
   const {email} = req.body;
  console.log(email) 

   try{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
     
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Sending Email With React And Nodejs",
           html: '<h1>Thank you for registering to our newsletter! </h1>'
    }
    
     transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log("Error", error)
        }else{
            console.log("Email sent" + info.response);
            res.status(201).json({status:201, info})
        }
     })

   }catch(error){
       res.status(401).json({status:401, error})
   }
});


module.exports = router