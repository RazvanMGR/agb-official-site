// api/contact.ts — Fonction Node.js sur Vercel en ESM
import nodemailer from "nodemailer";

export const config = {
  runtime: "nodejs", // pas Edge
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch {}
  }

  const { name, email, message, hp_field } = body || {};

  // Honeypot anti-spam
  if (hp_field) return res.status(200).json({ ok: true });

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Champs manquants" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AGB Site" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: "Contact — Homepage",
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>Nouveau message du site</h2>
        <p><b>Nom :</b> ${name}</p>
        <p><b>Email :</b> ${email}</p>
        <pre style="white-space:pre-wrap">${message}</pre>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "Erreur serveur" });
  }
}
