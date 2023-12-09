const User = require("../Models/Users");
const nodemailer = require("nodemailer");
exports.registerUser=async(req,res)=>{
   const data=req.body
  
   let transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL,
       pass: process.env.PASS,
     },
   });

   let mailOptions = {
     from: process.env.EMAIL,
     to: process.env.TOMAIL,
     subject: "New User Registration",
     text: `
     Name :${data.name}
     E-mail: ${data.email}
     Phone-No: ${data.number}
     Budget :${data.budget}
     Home: ${data.home}
     `,
   };

   transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
       console.log(error);
     } else {
       console.log("Email sent: " + info.response);
     }
   });
   const user = new User(req.body);
   await user.save();
   res.send(data)


}
