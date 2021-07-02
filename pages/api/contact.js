import nodemailer from "nodemailer";

export default async (req, res) => {
  const { fullName, number, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "buildearth.web@gmail.com",
      pass: "BE786123",
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "buildearth.web@gmail.com",
      subject: `Contact form submission from ${fullName}`,
      html: `<h3>You have a new contact form submission</h3>
            <p><strong>Name: </strong> ${fullName}</p>
            <p><strong>Phone: </strong> ${number}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Subject: </strong> ${subject}</p>
            <p><strong>Message: </strong> ${message}</p>
            
            `,
    });

    console.log("Message sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json(req.body);
};
