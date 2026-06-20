import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, role } = await request.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!role || (role !== "commuter" && role !== "enterprise")) {
      return NextResponse.json(
        { error: "Invalid role selected." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY env variable");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Prepare Subscriber welcome email content
    const subscriberHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to GreenRoute</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; color: #1a2e26; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #ffffff; border: 1px solid #e1e8e5; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
            .header { background: #064e3b; padding: 32px; text-align: center; }
            .header h1 { color: #34d399; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
            .content { padding: 40px 32px; }
            .role-badge { display: inline-block; background: #d1fae5; color: #065f46; font-size: 12px; font-weight: 700; text-transform: uppercase; padding: 4px 12px; border-radius: 12px; margin-bottom: 20px; }
            h2 { color: #064e3b; font-size: 20px; font-weight: 700; margin-top: 0; }
            p { font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 24px; }
            .cta-button { display: inline-block; background: #10b981; color: #ffffff; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 8px; margin-bottom: 24px; }
            .footer { background: #f3f4f6; padding: 24px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>GreenRoute</h1>
            </div>
            <div class="content">
              <span class="role-badge">${role === "enterprise" ? "Enterprise" : "Commuter"} Beta</span>
              <h2>Thank you for signing up!</h2>
              <p>We are excited to welcome you to GreenRoute — South Africa's first carbon intelligence platform built for Cape Town.</p>
              
              ${
                role === "enterprise"
                  ? `<p>Our enterprise solution helps teams auto-detect, calculate, and report on Scope 3 commuter emissions. A member of our team will contact you shortly to help set up your organization's dashboard.</p>`
                  : `<p>As a commuter, you're helping lead the shift to green transport in Cape Town. We will notify you as soon as the first beta slots open in your area so you can start tracking and reducing your daily transit footprint.</p>`
              }
              
              <p>In the meantime, feel free to visit our landing page to explore Cape Town's carbon intelligence stats.</p>
              
              <a href="https://greenroute.lync.digital" class="cta-button">Visit GreenRoute</a>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} GreenRoute. Cape Town, South Africa.
            </div>
          </div>
        </body>
      </html>
    `;

    // Prepare Founder notification email content
    const founderHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Beta Signup</title>
          <style>
            body { font-family: sans-serif; color: #333; line-height: 1.5; }
            .container { max-width: 500px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
            h2 { color: #064e3b; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            td { padding: 8px; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; width: 120px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New GreenRoute Beta Sign-up!</h2>
            <p>A new user has requested beta access. Details below:</p>
            <table>
              <tr>
                <td class="label">Email:</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td class="label">Role:</td>
                <td style="text-transform: capitalize;">${role}</td>
              </tr>
              <tr>
                <td class="label">Signup Time:</td>
                <td>${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
        </body>
      </html>
    `;

    const fromEmail = process.env.FROM_EMAIL || "GreenRoute <noreply@greenrout.digital>";
    const founderEmail = process.env.FOUNDER_EMAIL || "mr@mroqa.site";

    // Send welcome email to Subscriber
    const sendToSubscriber = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: "Welcome to the GreenRoute Beta!",
        html: subscriberHtml,
      }),
    });

    // Send copy notification to Founder
    const sendToFounder = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [founderEmail],
        subject: `[New Beta Signup] ${email} (${role})`,
        html: founderHtml,
      }),
    });

    // Run both requests in parallel
    const [subRes, founderRes] = await Promise.all([
      sendToSubscriber,
      sendToFounder,
    ]);

    const subData = await subRes.json();
    const founderData = await founderRes.json();

    if (!subRes.ok) {
      console.error("Resend error sending to subscriber:", subData);
      throw new Error(subData.message || "Failed to send subscriber email");
    }

    if (!founderRes.ok) {
      console.error("Resend error sending to founder:", founderData);
      // Don't crash the request if only the founder email fails, but log it
    }

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error: any) {
    console.error("Error handling beta signup:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
