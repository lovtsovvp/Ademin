import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-9b54e9f0/health", (c) => {
  return c.json({ status: "ok" });
});

// Email endpoint
app.post("/make-server-9b54e9f0/send-email", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Resend's test email
        to: "ademinproduction@gmail.com", // Your email
        subject: `Новое сообщение от ${name}`,
        html: `
          <h2>Новое сообщение с сайта</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Телефон:</strong> ${phone || "Не указан"}</p>
          <p><strong>Сообщение:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      return c.json({ error: "Failed to send email", details: result }, 500);
    }

    // Save contact form submission to KV store
    await kv.set(`contact:${Date.now()}`, {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    return c.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);