export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  read_time: number;
  image: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface Webinar {
  id: string;
  title: string;
  description: string;
  speaker: string;
  category: string;
  scheduled_at: string;
  duration: number;
  status: 'upcoming' | 'completed';
  video_id?: string;
  thumbnail?: string;
  views: number;
  registration_url?: string;
  recording_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}

export interface EmailCampaign {
  id: string;
  subject: string;
  body: string;
  sent_at: string;
  created_at: string;
  updated_at: string;
}

export interface DatabaseResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
