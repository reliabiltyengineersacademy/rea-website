'use server';

import { createClient } from '@/lib/supabase/server';
import { ContactMessage, DatabaseResponse } from '@/lib/types';

export async function createContactMessageAction(message: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<DatabaseResponse<ContactMessage>> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('contact_messages')
      .insert({
        name: message.name,
        email: message.email,
        subject: message.subject,
        message: message.message,
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
