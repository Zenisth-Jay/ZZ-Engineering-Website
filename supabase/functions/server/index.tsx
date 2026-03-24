import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { Resend } from "npm:resend";
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
app.get("/make-server-734039a7/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact Form Endpoint
app.post("/make-server-734039a7/contact", async (c) => {
  try {
    const { name, email, phone, service, message } = await c.req.json();
    
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return c.json({ error: "Server misconfiguration: Missing email API key" }, 500);
    }

    const resend = new Resend(resendApiKey);
    const adminEmail = Deno.env.get('ADMIN_EMAIL');

    if (!adminEmail) {
      console.error("Missing ADMIN_EMAIL");
       return c.json({ error: "Server misconfiguration: Missing admin email" }, 500);
    }

    console.log("Sending email to:", adminEmail);

    const { data, error } = await resend.emails.send({
      from: 'Zion Engineering Contact <onboarding@resend.dev>',
      to: [adminEmail],
      reply_to: email,
      subject: `New Inquiry: ${service || 'General'} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F172A; border-bottom: 2px solid #F59E0B; padding-bottom: 10px;">New Website Inquiry</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #F59E0B;">${email}</a></p>
            <p style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin-bottom: 10px;"><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #0F172A;">Message:</h3>
            <p style="line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            This email was sent from the Zion Engineering website contact form.
          </p>
        </div>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, data });

  } catch (e) {
    console.error("Server Error:", e);
    return c.json({ error: e.message || "Internal Server Error" }, 500);
  }
});

Deno.serve(app.fetch);
