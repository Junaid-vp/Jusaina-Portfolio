"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL ?? "Jusainavp2017@gmail.com";

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form fields and try again.",
    };
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #FCE4E8; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="margin: 0; color: #292322; font-size: 20px;">New Contact Form Message</h2>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #EEDDD8; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6F6462; font-size: 14px; width: 80px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; color: #292322; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6F6462; font-size: 14px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #292322; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #E96D91;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6F6462; font-size: 14px; vertical-align: top;">Subject</td>
                <td style="padding: 8px 0; color: #292322; font-size: 14px;">${subject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #EEDDD8; margin: 16px 0;" />
            <p style="color: #292322; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="text-align: center; color: #6F6462; font-size: 12px; margin-top: 16px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Unable to send your message right now. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you for reaching out! I will get back to you soon.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
