const nodemailer = require('nodemailer');

async function mail(reciever, subject, html) {
    let transporter = await nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'buisnessbotsss@mail.ru',
            pass: 'ThuAaM6et6MymcmxavwU',
        },
    });
    let info = await transporter.sendMail({
        from: '"$neaker Bot" <buisnessbotsss@mail.ru>',
        to: reciever,
        subject: subject,
        html: html,
    });
    return info.messageId;

}

exports.mail = mail;