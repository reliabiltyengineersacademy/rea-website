'use server';

import { revalidatePath } from 'next/cache';
import { createClient as createServiceClient } from '@supabase/supabase-js';

import {
  membershipSchema,
  type MembershipFormData,
} from '@/validations/membership';
import { uploadCVFileAction } from './file-upload';
import { addSubscriberAction } from './subscribers';
import { sendMembershipNotificationEmail } from '@/lib/email';

export async function createMembershipApplicationAction(
  data: MembershipFormData,
  cvFile?: File
) {
  try {
    const validatedData = membershipSchema.parse(data);

    if (validatedData.hpt && validatedData.hpt.trim() !== '') {
      return {
        success: false,
        error: 'Invalid submission',
      };
    }

    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    let cvFilePath = null;
    if (cvFile) {
      const uploadResult = await uploadCVFileAction(
        cvFile,
        validatedData.email
      );
      if (!uploadResult.success) {
        return {
          success: false,
          error: uploadResult.error,
        };
      }
      cvFilePath = uploadResult.data?.path || null;
    }

    const { data: membershipData, error } = await supabase
      .from('membership_applications')
      .insert([
        {
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone || null,
          company: validatedData.company,
          role: validatedData.role,
          country: validatedData.country,
          experience: validatedData.experience,
          industry: validatedData.industry,
          interests: validatedData.interests || [],
          certifications: validatedData.certs || null,
          referrer: validatedData.referrer || null,
          professional_statement: validatedData.statement,
          membership_tier: validatedData.tier,
          preferred_chapter: validatedData.chapter || null,
          payment_preference: validatedData.payment || null,
          wants_newsletter: validatedData.news || false,
          ethics_agreed: validatedData.ethics,
          privacy_agreed: validatedData.privacy,
          cv_file_path: cvFilePath,
          submitted_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error creating membership application:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return {
        success: false,
        error: `Failed to submit application: ${error.message}`,
      };
    }

    if (validatedData.news) {
      try {
        const subscriberResult = await addSubscriberAction(validatedData.email);

        if (!subscriberResult.success) {
          console.warn('Failed to add subscriber:', subscriberResult.error);
        }
      } catch (error) {
        console.warn('Error adding subscriber:', error);
      }
    }

    try {
      const emailResult = await sendMembershipNotificationEmail(
        validatedData,
        cvFilePath
      );
      if (!emailResult.success) {
        console.warn('Failed to send email notification:', emailResult.error);
      }
    } catch (error) {
      console.warn('Error sending email notification:', error);
    }

    revalidatePath('/membership');

    return {
      success: true,
      data: membershipData,
    };
  } catch (error) {
    console.error('Error in createMembershipApplicationAction:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return {
        success: false,
        error: 'Please check your form data and try again.',
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
