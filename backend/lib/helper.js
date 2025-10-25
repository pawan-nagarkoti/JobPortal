import { transporter } from "./mailer.js";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

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

// reset token generate
export const decodeToken = (token) => {
  return CryptoJS.SHA256(token).toString(CryptoJS.enc.Hex);
};

export async function generateResetToken() {
  const rawToken = uuidv4() + Date.now().toString(); // random unique string
  const hashedToken = decodeToken(rawToken); // stored on DB
  return { rawToken, hashedToken };
}
