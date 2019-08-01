const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_Key);

const sendMail = (email, name) => {
    const msg = {
        to: email,
        from: 'chokropatel1122@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: `hey, ${name} how is going`,
    };
    sgMail.send(msg);
}

module.exports = {
    sendMail
}