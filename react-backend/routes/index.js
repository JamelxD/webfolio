const express = require('express');
const router = express.Router();

router.post('/mail', async (req, res, next) => {
  try {
    const nodemailer = require("nodemailer");

    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      sendmail: true,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const from = `"${req.body.firstName} ${req.body.lastName}" <${req.body.email}>`;
    let info = await transporter.sendMail({
      from: from,
      to: "jamelmorr@gmail.com",
      subject: req.body.subject,
      text: req.body.message,
    });

    res.send(info);
    console.log("Message sent: %s", info.messageId);
  } catch (e) {
    res.error()
  }
});

module.exports = router;
