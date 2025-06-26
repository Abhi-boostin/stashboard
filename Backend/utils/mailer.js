import nodemailer from "nodemailer";
console.log("All ENV:", process.env);

console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL, "SMTP_PASSWORD:", process.env.SMTP_PASSWORD);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abhiboostinsmtp@gmail.com", // yourappemail@gmail.com
    pass: "dyov jdio urgm giac" // your app password
  },
});

export const sendOTPEmail = async (to, otp) => {
  await transporter.sendMail({
    from: `"Stashboard" <${process.env.SMTP_EMAIL}>`,
    to,
    subject: "Your OTP Code for Stashboard",
    text: `Your OTP code is: ${otp}. Use it wisely! If you didn’t request this, blame your cat walking on the keyboard. Thanks for trusting us with your inventory—may your stock always be in your favor! 😄📦`,
    html: `<p>Your OTP code is: <b>${otp}</b></p>`,
  });
};
