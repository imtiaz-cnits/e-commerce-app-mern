const nodemailer = require("nodemailer");

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: "mail.brickspabna.com",
        port: 587,
        secure: false,
        auth: {user: "info@brickspabna.com", pass: '_AfFqCQ~YxB?'},
        tls: {rejectUnauthorized: false}
    });

    let mailOptions = {
        from: 'MERN Ecommerce Solution <info@brickspabna.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    }

    return await transporter.sendMail(mailOptions);
};

module.exports = EmailSend;