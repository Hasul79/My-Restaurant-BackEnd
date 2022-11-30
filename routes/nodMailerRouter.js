// const nodemailer = require('nodemailer');


// function sendMail(){
// let mailTransporter = nodemailer.createTransport({
//     service:  "gmail",
//     auth:{
//         user:"hasmikminasyan.1979@gmail.com",
//         pass: "vnyfpgeuzstexyek"
//     }
// })
// let details = {
//     from :"hasmikminasyan.1979@gmail.com",
//     to: "hatuk2@mail.ru",
//    subject: "testing our nodemailer",
//     text: "Hello my dear"
// }

// mailTransporter.sendMail(details, (err)=>{
//     if(err){
//         console.log("it has en error", err )
//     }
//     else {
//         console.log("email has sent!")
//     }
//  })
// }

// app.post('/sendmail', (req, res)=>{
//     sendMail()
//     res.send("Բարի գալուստ My pizza")
// })


const express = require('express');
const router= new express.Router();
const nodemailer = require("nodemailer");

router.post("/register", (req, res)=>{
   const {email} = req.body;


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
        subject: "Sending Email With REact And Nodejs",
           html: '<h1>Congratulation You Successfully Send Email</h1><br /><p> My GITHUB page , welcome ..</p> <br /> <h2>https://github.com/Hasul79</h2>'
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

   }
});


module.exports = router