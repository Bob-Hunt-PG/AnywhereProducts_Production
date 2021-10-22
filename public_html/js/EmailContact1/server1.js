const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

// instantiate an express app
const app = express();

//make the contact page the the first page on the app
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

//port will be 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


// Set-up the POST route via Nodemailer
// 
// 1) Host: depends on the email service you are using:
//  Gmail: smtp.gmail.com
//  Outlook: smtp-mail.outlook.com
//  Hotmail: smtp.live.com
// 
// 2) Port: Set to 587 by default but feel free to check out this article (https://www.pepipost.com/blog/25-465-587-2525-choose-the-right-smtp-port/) 
//  to learn which port number is best for your email.
// 
// 3) Auth: Next, we provide the credentials needed to authorize Nodemailer
//  to use your email as the sender. Since these are private information, they will be stored
//  in the .env file as environment variables.
//  here's the transporter object for my example (using a hotmail email address).

// const transporter = nodemailer.createTransport({
//     host: "smtp.live.com", //replace with your email provider
//     port: 587,
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASS,
//     },
//   });
  
// *** Note: Gmail users need to allow third party access to let Nodemailer send emails.
//   So turn on the 'Less Secure Apps' settings by following instructions here.
//   (https://support.google.com/accounts/answer/6010255?hl=en)

// Now we have our transporter object. Next, we need to verify this connection
//  to make the credentials are correct and Nodemailer is authorized to send emails from that address.

// //verify connection configuration
// transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

// Finally, we create our POST route to do the following:

// Accepts the form data submitted and parse it using multiparty.
// After parsing it, create a mail object with from, to, subject and text properties.
// Use transporter.sendMail() to send the email and done.
// Here's what the code looks like:

// app.post("/send", (req, res) => {
//     //1.
//     let form = new multiparty.Form();
//     let data = {};
//     form.parse(req, function (err, fields) {
//       console.log(fields);
//       Object.keys(fields).forEach(function (property) {
//         data[property] = fields[property].toString();
//       });
  
//       //2. You can configure the object however you want
//       const mail = {
//         from: data.name,
//         to: process.env.EMAIL,
//         subject: data.subject,
//         text: `${data.name} <${data.email}> \n${data.message}`,
//       };
  
//       //3.
//       transporter.sendMail(mail, (err, data) => {
//         if (err) {
//           console.log(err);
//           res.status(500).send("Something went wrong.");
//         } else {
//           res.status(200).send("Email successfully sent to recipient!");
//         }
//       });
//     });
//   });
  
  
