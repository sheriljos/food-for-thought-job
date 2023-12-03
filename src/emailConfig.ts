import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';
import * as dotenv from 'dotenv';
dotenv.config();


// Nodemailer transporter
export const transporter = nodemailer.createTransport(smtpTransport({
  service: 'SMTP',
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: process.env.MAILIER_USER,
    pass: process.env.MAILER_PASSWORD,
  },
}));
