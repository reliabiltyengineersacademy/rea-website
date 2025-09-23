-- Add CV file path column to membership_applications table (if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'membership_applications' 
        AND column_name = 'cv_file_path'
    ) THEN
        ALTER TABLE membership_applications 
        ADD COLUMN cv_file_path TEXT;
    END IF;
END $$;

-- Create index for CV file path queries (if it doesn't exist)
CREATE INDEX IF NOT EXISTS idx_membership_applications_cv_file_path 
ON membership_applications(cv_file_path);
