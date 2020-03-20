const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yauheni.parakhnevich@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome onboard, ${name}! Let me know how it\'s going`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yauheni.parakhnevich@gmail.com',
        subject: 'Sorry to see you leaving',
        text: `Thank you, ${name}. We will be happy to see you again`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}