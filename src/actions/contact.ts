'use server';

import { createClient as createServiceClient } from '@supabase/supabase-js';

import { ContactMessage, DatabaseResponse } from '@/lib/types';

export async function createContactMessageAction(message: {
  full_name: string;
  email: string;
  subject?: string;
  message: string;
  company?: string;
  phone?: string;
}): Promise<DatabaseResponse<ContactMessage>> {
  try {
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    const { data, error } = await supabase
      .from('contact_messages')
      .insert({
        full_name: message.full_name,
        email: message.email,
        subject: message.subject,
        message: message.message,
        company: message.company,
        phone: message.phone,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}
