import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  const { name, email, reason, message } = req.body
  
  try {
    await sendEmail(name, email, reason, message)
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false })
  }
}

async function sendEmail(name, email, reason, message) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'karimjawhar5@gmail.com', // replace with your email address
        pass: process.env.GMAIL_PASSWORD, // replace with your email password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Webiste Form" <karimjawhar5@gmail.com>',
      to: 'karimjawhar5@gmail.com',
      subject: `New Contact Form Submission - ${reason}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Reason for Contact:</strong> ${reason}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log(error);
  }
}
