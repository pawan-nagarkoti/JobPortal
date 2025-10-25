import { transporter } from "./mailer.js";

// generate otp
export function generateOTP(value = 6) {
  let otp = "";
  for (let i = 0; i < value; i++) {
    otp += Math.floor(Math.random() * value);
  }
  return otp;
}

// email verification code
export const sendEmail = async ({ email, subject, text }, template) => {
  return await transporter.sendMail({
    from: "pawan@gmail.com",
    to: email,
    subject: subject,
    text: text,
    html: template,
  });
};
