import { Resend } from 'resend';
import { createClient as createServiceClient } from '@supabase/supabase-js';

import { ConsultationBooking } from '@/lib/types';
import { MembershipFormData } from '@/validations/membership';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMembershipNotificationEmail(
  formData: MembershipFormData,
  cvFilePath?: string | null
) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return { success: false, error: 'Email service not configured' };
    }

    // Initialize Supabase client for file download
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

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
              <p>Application received on ${new Date().toLocaleDateString(
                'en-US',
                {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )}</p>
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
                  ${
                    interests && interests.length > 0
                      ? interests
                          .map(
                            (interest) =>
                              `<span class="interest-tag">${interest}</span>`
                          )
                          .join('')
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
                ${
                  cvFilePath
                    ? `
                <div class="field">
                  <span class="label">CV Uploaded:</span>
                  <span class="value">Yes - File attached to this email</span>
                </div>
                `
                    : `
                <div class="field">
                  <span class="label">CV Uploaded:</span>
                  <span class="value">No</span>
                </div>
                `
                }
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

    const emailData: {
      from: string;
      to: string[];
      subject: string;
      html: string;
      attachments?: Array<{
        filename: string;
        content: Buffer;
        contentType: string;
      }>;
    } = {
      from: 'G-ARMP Membership <noreply@reliabilityengineersacademy.com>',
      to: ['reliabiltyengineersacademy@gmail.com'],
      subject: `New G-ARMP Membership Application - ${firstName} ${lastName} (${company})`,
      html: emailHtml,
    };

    // Add CV attachment if available
    if (cvAttachment) {
      emailData.attachments = [cvAttachment];
    }

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Unexpected error sending email:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Failed to send email notification',
    };
  }
}

export async function sendConsultationBookingNotificationToAdmin(
  booking: ConsultationBooking
) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return { success: false, error: 'Email service not configured' };
    }

    const adminEmail =
      process.env.ADMIN_EMAIL || 'admin@reliabilityengineersacademy.com';

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };

    const formatTime = (timeString: string) => {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      return `${displayHour}:${minutes} ${ampm}`;
    };

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Consultation Booking Request</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { padding: 20px; }
            .booking-details { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .client-info { background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .message-section { background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666; }
            .button { display: inline-block; background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
            .urgent { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; color: #2c3e50;">New Consultation Booking Request</h1>
              <p style="margin: 5px 0 0 0; color: #666;">Reliability Engineers Academy - Admin Notification</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <p><strong>Action Required:</strong> A new consultation booking has been submitted and requires your review.</p>
              </div>
              
              <div class="client-info">
                <h3 style="margin-top: 0;">Client Information</h3>
                <p><strong>Name:</strong> ${booking.client_name}</p>
                <p><strong>Email:</strong> ${booking.client_email}</p>
                ${booking.client_phone ? `<p><strong>Phone:</strong> ${booking.client_phone}</p>` : ''}
                ${booking.company ? `<p><strong>Company:</strong> ${booking.company}</p>` : ''}
              </div>
              
              <div class="booking-details">
                <h3 style="margin-top: 0;">Consultation Details</h3>
                <p><strong>Date:</strong> ${formatDate(booking.consultation_date)}</p>
                <p><strong>Time:</strong> ${formatTime(booking.consultation_time)}</p>
                <p><strong>Duration:</strong> ${booking.duration_minutes} minutes</p>
                <p><strong>Status:</strong> ${booking.status}</p>
                <p><strong>Booking ID:</strong> ${booking.id}</p>
              </div>
              
              ${
                booking.message
                  ? `
              <div class="message-section">
                <h3 style="margin-top: 0;">Client Message</h3>
                <p style="margin: 0; white-space: pre-wrap;">${booking.message}</p>
              </div>
              `
                  : ''
              }
              
              <p>Please log into the admin dashboard to confirm, deny, or reschedule this consultation.</p>
              
              <a href="${process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.reliabilityengineersacademy.com'}/consultations" class="button">
                View in Admin Dashboard
              </a>
            </div>
            
            <div class="footer">
              <p>This is an automated notification email for admin users.</p>
              <p>Reliability Engineers Academy Admin Panel</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Reliability Engineers Academy <noreply@reliabilityengineersacademy.com>',
      to: [adminEmail],
      subject: `New Consultation Booking - ${booking.client_name} - ${formatDate(booking.consultation_date)}`,
      html,
    });

    if (error) {
      console.error('Error sending admin notification email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Failed to send admin notification email',
    };
  }
}
