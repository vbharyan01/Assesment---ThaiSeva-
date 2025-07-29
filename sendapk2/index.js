const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

const app = express();
const corsHandler = cors({ origin: true }); 

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aryan2004ahuja@gmail.com',
    pass: 'iwlwlrhpybwpxgwt'
  }
});

app.post('/', (req, res) => {
  const { name, email } = req.body;
  console.log("Received POST request with:", req.body); 

  if (!name || !email) {
    console.log("Missing name or email"); 
    return res.status(400).send({ success: false, message: "Name or email missing" });
  }

  const mailOptions = {
    from: 'aryan2004ahuja@gmail.com',
    to: email,
    subject: 'Your APK Download Link',
    text: `Hi ${name},\n\nHere is your APK download link: https://drive.google.com/uc?export=download&id=1uWcPZLYKgcylzh5TduSxhIyuEcfobKYH\n\nThank you for trying our app!`
  };

  console.log("Attempting to send email to:", email); 

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Failed to send email:", error); 
      return res.status(500).send({ success: false, message: "Email send failed", error });
    } else {
      console.log("Email sent successfully:", info.response); // ✅
      return res.status(200).send({ success: true, message: "Email sent successfully" });
    }
  });
});

// ✅ Wrapping entire Express app with CORS handler for Firebase
exports.sendApkLink = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => app(req, res));
});
