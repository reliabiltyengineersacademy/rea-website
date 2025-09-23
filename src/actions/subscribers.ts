'use server';

import { createClient as createServiceClient } from '@supabase/supabase-js';

export async function addSubscriberAction(
  email: string
): Promise<{ success: boolean; error?: string; data?: { id: string; email: string; subscribed_at: string } }> {
  try {
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    // Check if subscriber already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing subscriber:', checkError);
      return { success: false, error: checkError.message };
    }

    // If subscriber already exists, return success (don't duplicate)
    if (existingSubscriber) {
      console.log('Subscriber already exists:', email);
      return { success: true, data: existingSubscriber };
    }

    // Add new subscriber
    const { data, error } = await supabase
      .from('subscribers')
      .insert({ 
        email,
        subscribed_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding subscriber:', error);
      return { success: false, error: error.message };
    }

    console.log('Successfully added subscriber:', email);
    return { success: true, data };
  } catch (error) {
    console.error('Unexpected error in addSubscriberAction:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}
