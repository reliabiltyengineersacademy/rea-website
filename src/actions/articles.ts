'use server';

import {
  Article,
  DatabaseResponse,
  PaginationParams,
  PaginatedResponse,
} from '@/lib/types';
import { createClient } from '@/lib/supabase/server';

export async function getArticlesAction(
  params?: PaginationParams & {
    category?: string;
    search?: string;
    sortBy?: 'created_at' | 'title' | 'read_time';
    sortOrder?: 'asc' | 'desc';
  }
): Promise<DatabaseResponse<PaginatedResponse<Article>>> {
  try {
    const supabase = await createClient();

    let query = supabase
      .from('articles')
      .select('*', { count: 'exact' })
      .order(params?.sortBy || 'created_at', {
        ascending: params?.sortOrder === 'asc',
      });

    if (params?.category) {
      query = query.eq('category', params.category);
    }

    if (params?.search) {
      query = query.or(
        `title.ilike.%${params.search}%,excerpt.ilike.%${params.search}%,content.ilike.%${params.search}%`
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

export async function getArticleByIdAction(
  id: string
): Promise<DatabaseResponse<Article>> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('articles')
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

export async function getFeaturedArticlesAction(): Promise<
  DatabaseResponse<Article[]>
> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6);

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

export async function getArticleCategoriesAction(): Promise<
  DatabaseResponse<string[]>
> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('articles')
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
