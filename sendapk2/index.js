const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
const corsHandler = cors({ origin: true }); 

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aryan2004ahuja@gmail.com',
    pass: 'iwlw lrhp ybwp xgwt'
  }
});

app.get("/", (req, res) => {
  res.send("Hello This is going good")
})

app.post('/api', (req, res) => {
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
    text: `Hi ${name},\n\nHere is your APK download link: https://appdistribution.firebase.dev/i/c51dc7b8d8c6a5e7\n\nThank you for trying our app!`
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