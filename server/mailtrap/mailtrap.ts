import { MailtrapClient } from "mailtrap";

// Mailtrap Email Sending API token (store it in .env)
const TOKEN = process.env.MAILTRAP_API_TOKEN as string;

if (!TOKEN) {
  throw new Error("Missing Mailtrap API token");
}

export const client = new MailtrapClient({ token: TOKEN });

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Patel MernStack",
};
