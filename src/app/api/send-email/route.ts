import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    //  // Email details
    // const mailOptions = {
    //   from: `"${name}" <${email}>`,
    //   to: process.env.EMAIL_TO,
    //   subject: "Portfolio Resume Inquiry",
    //   html: `
    //     <h2>Resume inquiry message</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // };

   // Email details
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender shown as the user's name
      replyTo: email, // When you click "Reply", it goes to the visitor's email
      to: process.env.EMAIL_TO, // Your email
      subject: "Portfolio Resume Inquiry",
      html: `
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
