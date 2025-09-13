'use server';

import { createClient as createServiceClient } from '@supabase/supabase-js';

import { createClient } from '@/lib/supabase/server';
import { Subscriber, DatabaseResponse } from '@/lib/types';

export async function subscribeToNewsletterAction(
  email: string
): Promise<DatabaseResponse<Subscriber>> {
  try {
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    const { data: existingSubscriber, error: checkError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      return { success: false, error: checkError.message };
    }

    if (existingSubscriber) {
      return {
        success: false,
        error: 'Email is already subscribed to our newsletter',
      };
    }

    const { data, error } = await supabase
      .from('subscribers')
      .insert({ email })
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

export async function unsubscribeFromNewsletterAction(
  email: string
): Promise<DatabaseResponse<void>> {
  try {
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    const { error } = await supabase
      .from('subscribers')
      .delete()
      .eq('email', email);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function getSubscriberCountAction(): Promise<
  DatabaseResponse<number>
> {
  try {
    const supabase = await createClient();

    const { count, error } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data: count || 0 };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}
