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
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    let info = await transporter.sendMail({
      from: `"Website Contact" <contact@karimjaouhar.com>`,
      replyTo: email,
      to: 'jadjaouhar5@gmail.com',
      subject: `Contact Form Submission - ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Reason for Contact:</strong> ${reason}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log(error);
  }
}
