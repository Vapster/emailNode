const express = require('express');
const router = express.Router();
const mail = require('../emails/account')

router.post('/email/mailme', (req, res) => {
    //console.log(process.env.SENDGRID_API_Key);
    mail.sendMail(req.body.email, req.body.name);
    res.send("send")
});

module.exports = router