'use server';

import { createClient as createServiceClient } from '@supabase/supabase-js';

export async function uploadCVFileAction(file: File, userId: string) {
  try {
    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ];

    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        error: 'Invalid file type. Please upload PDF, DOC, DOCX, PPT, or PPTX files only.'
      };
    }

    // Validate file size (10MB = 10 * 1024 * 1024 bytes)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return {
        success: false,
        error: 'File size too large. Please upload files smaller than 10MB.'
      };
    }

    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}-${Date.now()}.${fileExt}`;
    const filePath = `cv-uploads/${fileName}`;

    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();

    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from('cv-uploads')
      .upload(filePath, arrayBuffer, {
        contentType: file.type,
        upsert: false
      });

    if (error) {
      console.error('Error uploading file:', error);
      return {
        success: false,
        error: 'Failed to upload file. Please try again.'
      };
    }

    return {
      success: true,
      data: {
        path: data.path,
        fullPath: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cv-uploads/${data.path}`
      }
    };
  } catch (error) {
    console.error('Error in uploadCVFileAction:', error);
    return {
      success: false,
      error: 'An unexpected error occurred while uploading the file.'
    };
  }
}

export async function deleteCVFileAction(filePath: string) {
  try {
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    const { error } = await supabase.storage
      .from('cv-uploads')
      .remove([filePath]);

    if (error) {
      console.error('Error deleting file:', error);
      return {
        success: false,
        error: 'Failed to delete file.'
      };
    }

    return {
      success: true
    };
  } catch (error) {
    console.error('Error in deleteCVFileAction:', error);
    return {
      success: false,
      error: 'An unexpected error occurred while deleting the file.'
    };
  }
}
