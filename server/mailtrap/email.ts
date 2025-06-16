// import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
// import { client, sender } from "./mailtrap";

// export const sendVerificationEmail = async (email: string, verificationToken: string) => {
//     const recipient = [{ email }];
//     try {
//         const res = await client.send({
//             from: sender,
//             to: recipient,
//             subject: 'Verify your email',
//             html:htmlContent.replace("{verificationToken}", verificationToken),
//             category: 'Email Verification'
//         });
//     } catch (error) {
//         console.log(error);
//         throw new Error("Failed to send email verification")

//     }
// }
// export const sendWelcomeEmail = async (email: string, name: string) => {
//     const recipient = [{ email }];
//     const htmlContent = generateWelcomeEmailHtml(name);
//     try {
//         const res = await client.send({
//             from: sender,
//             to: recipient,
//             subject: 'Welcome to FastEats',
//             html:htmlContent,
//             template_variables:{
//                 company_info_name:"FastEats",
//                 name:name
//             }
//         });
//     } catch (error) {
//         console.log(error);
//         throw new Error("Failed to send welcome email")
//     }
// }
// export const sendPasswordResetEmail = async (email:string, resetURL:string) => {
//     const recipient = [{ email }];
//     const htmlContent = generatePasswordResetEmailHtml(resetURL);
//     try {
//         const res = await client.send({
//             from: sender,
//             to: recipient,
//             subject: 'Reset your password',
//             html:htmlContent,
//             category:"Reset Password"
//         });
//     } catch (error) {
//         console.log(error);
//         throw new Error("Failed to reset password")
//     }
// }
// export const sendResetSuccessEmail = async (email:string) => {
//     const recipient = [{ email }];
//     const htmlContent = generateResetSuccessEmailHtml();
//     try {
//         const res = await client.send({
//             from: sender,
//             to: recipient,
//             subject: 'Password Reset Successfully',
//             html:htmlContent,
//             category:"Password Reset"
//         });
//     } catch (error) {
//         console.log(error);
//         throw new Error("Failed to send password reset success email");
//     }
// }

import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true if port is 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sender = `"Patel Eats" <${process.env.SMTP_USER}>`;

// Verification Email
export const sendVerificationEmail = async (email: string, verificationToken: string) => {
  const htmlBody = htmlContent.replace("{verificationToken}", verificationToken);

  try {
    await transporter.sendMail({
      from: sender,
      to: email,
      subject: 'Verify your email',
      html: htmlBody,
    });
  } catch (error) {
    console.error("Verification Email Error:", error);
    throw new Error("Failed to send email verification");
  }
};

// Welcome Email
export const sendWelcomeEmail = async (email: string, name: string) => {
  const htmlBody = generateWelcomeEmailHtml(name);

  try {
    await transporter.sendMail({
      from: sender,
      to: email,
      subject: 'Welcome to FastEats',
      html: htmlBody,
    });
  } catch (error) {
    console.error("Welcome Email Error:", error);
    throw new Error("Failed to send welcome email");
  }
};

// Password Reset Email
export const sendPasswordResetEmail = async (email: string, resetURL: string) => {
  const htmlBody = generatePasswordResetEmailHtml(resetURL);

  try {
    await transporter.sendMail({
      from: sender,
      to: email,
      subject: 'Reset your password',
      html: htmlBody,
    });
  } catch (error) {
    console.error("Password Reset Email Error:", error);
    throw new Error("Failed to send password reset email");
  }
};

// Password Reset Success Email
export const sendResetSuccessEmail = async (email: string) => {
  const htmlBody = generateResetSuccessEmailHtml();

  try {
    await transporter.sendMail({
      from: sender,
      to: email,
      subject: 'Password Reset Successfully',
      html: htmlBody,
    });
  } catch (error) {
    console.error("Password Reset Success Email Error:", error);
    throw new Error("Failed to send password reset success email");
  }
};
