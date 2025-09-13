'use server';

import {
  Webinar,
  DatabaseResponse,
  PaginationParams,
  PaginatedResponse,
} from '@/lib/types';
import { createClient } from '@/lib/supabase/server';

export async function getWebinarsAction(
  params?: PaginationParams & {
    category?: string;
    status?: 'upcoming' | 'completed';
    search?: string;
    sortBy?: 'scheduled_at' | 'title' | 'views';
    sortOrder?: 'asc' | 'desc';
  }
): Promise<DatabaseResponse<PaginatedResponse<Webinar>>> {
  try {
    const supabase = await createClient();

    let query = supabase
      .from('webinars')
      .select('*', { count: 'exact' })
      .order(params?.sortBy || 'scheduled_at', {
        ascending: params?.sortOrder === 'asc',
      });

    if (params?.category) {
      query = query.eq('category', params.category);
    }

    if (params?.status) {
      query = query.eq('status', params.status);
    }

    if (params?.search) {
      query = query.or(
        `title.ilike.%${params.search}%,description.ilike.%${params.search}%,speaker.ilike.%${params.search}%`
      );
    }

    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const offset = params?.offset || (page - 1) * limit;

    query = query.range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    const totalPages = Math.ceil((count || 0) / limit);

    return {
      success: true,
      data: {
        data: data || [],
        pagination: {
          page,
          limit,
          total: count || 0,
          totalPages,
        },
      },
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function getWebinarByIdAction(
  id: string
): Promise<DatabaseResponse<Webinar>> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('webinars')
      .select('*')
      .eq('id', id)
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

export async function getUpcomingWebinarsAction(
  limit?: number
): Promise<DatabaseResponse<Webinar[]>> {
  try {
    const supabase = await createClient();

    let query = supabase
      .from('webinars')
      .select('*')
      .eq('status', 'upcoming')
      .order('scheduled_at', { ascending: true });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data: data || [] };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function getWebinarCategoriesAction(): Promise<
  DatabaseResponse<string[]>
> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('webinars')
      .select('category')
      .not('category', 'is', null);

    if (error) {
      return { success: false, error: error.message };
    }

    const categories = [...new Set(data?.map((item) => item.category) || [])];

    return { success: true, data: categories };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function incrementWebinarViewsAction(
  id: string
): Promise<DatabaseResponse<void>> {
  try {
    const supabase = await createClient();

    const { error } = await supabase.rpc('increment_webinar_views', {
      webinar_id: id,
    });

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
