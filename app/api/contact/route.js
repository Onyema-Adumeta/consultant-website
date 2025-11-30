// app/api/contact/route.js
// Place this file in your Next.js project at: app/api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, company, service, message } = body;

    // Configure your email service
    // For Gmail, you'll need to create an "App Password"
    // Go to: Google Account > Security > 2-Step Verification > App passwords
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your app password
      },
    });

    // Responsive HTML Email Template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>New Contact Form Submission</title>
      <style>
        /* Reset styles */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; }
        
        /* Responsive styles */
        @media only screen and (max-width: 600px) {
          .email-container { width: 100% !important; }
          .content-padding { padding: 20px !important; }
          .mobile-hide { display: none !important; }
          .mobile-center { text-align: center !important; }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f4;" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding: 40px 0;">
            
            <!-- Main Container -->
            <table class="email-container" role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" cellpadding="0" cellspacing="0">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                    New Contact Form Submission
                  </h1>
                  <p style="margin: 10px 0 0; color: #ffffff; font-size: 14px;">
                    Credence Consulting
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td class="content-padding" style="padding: 40px 30px;">
                  
                  <!-- Contact Details -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                    
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-left: 4px solid #14b8a6; border-radius: 4px;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 15px;">
                              <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                              <p style="margin: 5px 0 0; font-size: 16px; color: #111827; font-weight: 600;">${fullName}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-left: 4px solid #3b82f6; border-radius: 4px;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 15px;">
                              <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                              <p style="margin: 5px 0 0; font-size: 16px; color: #111827; font-weight: 600;">
                                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-left: 4px solid #14b8a6; border-radius: 4px;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 15px;">
                              <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                              <p style="margin: 5px 0 0; font-size: 16px; color: #111827; font-weight: 600;">${company || 'Not provided'}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-left: 4px solid #3b82f6; border-radius: 4px;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 15px;">
                              <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Service Requested</p>
                              <p style="margin: 5px 0 0; font-size: 16px; color: #111827; font-weight: 600;">${service}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-left: 4px solid #14b8a6; border-radius: 4px;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 15px;">
                              <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                              <p style="margin: 10px 0 0; font-size: 15px; color: #374151; line-height: 1.6;">${message}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                  </table>
                  
                  <!-- CTA Button -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 10px;" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" style="padding: 20px 0;">
                        <a href="mailto:${email}" style="display: inline-block; padding: 14px 30px; background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; font-weight: 600; border-radius: 6px; font-size: 16px;">
                          Reply to ${fullName}
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0; font-size: 14px; color: #6b7280;">
                    This email was sent from your website contact form
                  </p>
                  <p style="margin: 10px 0 0; font-size: 12px; color: #9ca3af;">
                    Credence Consulting © ${new Date().getFullYear()}
                  </p>
                </td>
              </tr>
              
            </table>
            
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textVersion = `
New Contact Form Submission

Name: ${fullName}
Email: ${email}
Company: ${company || 'Not provided'}
Service: ${service}

Message:
${message}

---
This email was sent from your website contact form.
Credence Consulting © ${new Date().getFullYear()}
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Allow easy reply to the contact
      subject: `New Contact Form: ${service} - ${fullName}`,
      text: textVersion,
      html: htmlTemplate,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}