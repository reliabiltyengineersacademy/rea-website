import nodemailer from 'nodemailer';
import { createClient as createServiceClient } from '@supabase/supabase-js';
import { MembershipFormData } from '@/validations/membership';

export async function sendMembershipNotificationEmailNodemailer(
  formData: MembershipFormData,
  cvFilePath?: string | null
) {
  try {
    // Initialize Supabase client for file download
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
      },
    });

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      role,
      country,
      experience,
      industry,
      interests,
      certs,
      referrer,
      statement,
      tier,
      chapter,
      payment,
      news,
    } = formData;

    // Download CV file if provided
    let cvAttachment = null;
    if (cvFilePath) {
      try {
        const { data: fileData, error: downloadError } = await supabase.storage
          .from('cv-uploads')
          .download(cvFilePath);

        if (downloadError) {
          console.error('Error downloading CV file:', downloadError);
        } else if (fileData) {
          // Convert blob to buffer
          const arrayBuffer = await fileData.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          
          // Get file extension from path
          const fileExtension = cvFilePath.split('.').pop() || 'pdf';
          const fileName = `${firstName}_${lastName}_CV.${fileExtension}`;
          
          cvAttachment = {
            filename: fileName,
            content: buffer,
            contentType: `application/${fileExtension === 'pdf' ? 'pdf' : 'octet-stream'}`,
          };
          
          console.log('CV file prepared for attachment:', fileName);
        }
      } catch (error) {
        console.error('Error preparing CV attachment:', error);
        // Continue without attachment if there's an error
      }
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New G-ARMP Membership Application</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 25px; }
            .section h3 { color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #6b7280; margin-left: 8px; }
            .interests { display: flex; flex-wrap: wrap; gap: 8px; }
            .interest-tag { background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New G-ARMP Membership Application</h1>
              <p>Application received on ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
            </div>
            
            <div class="content">
              <div class="section">
                <h3>Personal Information</h3>
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${firstName} ${lastName}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value">${phone || 'Not provided'}</span>
                </div>
              </div>

              <div class="section">
                <h3>Professional Information</h3>
                <div class="field">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>
                <div class="field">
                  <span class="label">Role/Title:</span>
                  <span class="value">${role}</span>
                </div>
                <div class="field">
                  <span class="label">Country:</span>
                  <span class="value">${country}</span>
                </div>
                <div class="field">
                  <span class="label">Experience:</span>
                  <span class="value">${experience} years</span>
                </div>
                <div class="field">
                  <span class="label">Industry:</span>
                  <span class="value">${industry}</span>
                </div>
              </div>

              <div class="section">
                <h3>Professional Interests</h3>
                <div class="interests">
                  ${interests && interests.length > 0 
                    ? interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')
                    : '<span class="value">None selected</span>'
                  }
                </div>
              </div>

              <div class="section">
                <h3>Additional Information</h3>
                <div class="field">
                  <span class="label">Certifications:</span>
                  <span class="value">${certs || 'None provided'}</span>
                </div>
                <div class="field">
                  <span class="label">How they heard about G-ARMP:</span>
                  <span class="value">${referrer || 'Not specified'}</span>
                </div>
                <div class="field">
                  <span class="label">Professional Statement:</span>
                  <div class="value" style="margin-top: 8px; padding: 12px; background: white; border-radius: 4px; border: 1px solid #e5e7eb;">
                    ${statement}
                  </div>
                </div>
              </div>

              <div class="section">
                <h3>Membership Details</h3>
                <div class="field">
                  <span class="label">Membership Tier:</span>
                  <span class="value">${tier}</span>
                </div>
                <div class="field">
                  <span class="label">Preferred Chapter:</span>
                  <span class="value">${chapter || 'Not specified'}</span>
                </div>
                <div class="field">
                  <span class="label">Payment Preference:</span>
                  <span class="value">${payment || 'Not specified'}</span>
                </div>
                <div class="field">
                  <span class="label">Newsletter Subscription:</span>
                  <span class="value">${news ? 'Yes - Subscribed' : 'No'}</span>
                </div>
                ${cvFilePath ? `
                <div class="field">
                  <span class="label">CV Uploaded:</span>
                  <span class="value">Yes - File attached to this email</span>
                </div>
                ` : `
                <div class="field">
                  <span class="label">CV Uploaded:</span>
                  <span class="value">No</span>
                </div>
                `}
              </div>

              <div class="footer">
                <p>This application was submitted through the G-ARMP membership form.</p>
                <p>Please review and follow up with the applicant as needed.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions: {
      from: string | undefined;
      to: string;
      subject: string;
      html: string;
      attachments?: Array<{
        filename: string;
        content: Buffer;
        contentType: string;
      }>;
    } = {
      from: process.env.GMAIL_USER,
      to: 'reliabiltyengineersacademy@gmail.com',
      subject: `New G-ARMP Membership Application - ${firstName} ${lastName} (${company})`,
      html: emailHtml,
    };

    // Add CV attachment if available
    if (cvAttachment) {
      mailOptions.attachments = [cvAttachment];
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, data: info };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email notification',
    };
  }
}
