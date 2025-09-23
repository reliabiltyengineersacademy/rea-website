-- Safe storage policies for CV uploads
-- This script handles existing policies gracefully

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Anyone can upload CVs" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can read CVs" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own CVs" ON storage.objects;

-- Create policies for CV uploads
CREATE POLICY "Anyone can upload CVs" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'cv-uploads');

CREATE POLICY "Authenticated users can read CVs" ON storage.objects
FOR SELECT USING (bucket_id = 'cv-uploads' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update their own CVs" ON storage.objects
FOR UPDATE USING (bucket_id = 'cv-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create policy for deleting CVs (users can delete their own files)
CREATE POLICY "Users can delete their own CVs" ON storage.objects
FOR DELETE USING (bucket_id = 'cv-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);
