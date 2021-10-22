const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

var dotenv =require('dotenv');
dotenv.config();
var ap_user = process.env.AP_UserTest;
var ap_password = process.env.AP_PasswordTest;
// var ap_user = process.env.AP_User;
// var ap_password = process.env.AP_Password;


// Middleware
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res)=>{
        res.send(__dirname + '/public/contactform.html')
});

app.post('/', (req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // **Real information needs to be stored in environment variables**
            user: ap_user,
            password: ap_password
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'bhunt@pioritygroup.com',
        subject: `Message from ${req.body.fullName}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send ('error');
        }else{
            console.log('Email');
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});