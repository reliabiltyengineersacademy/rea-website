-- Create membership_applications table
CREATE TABLE IF NOT EXISTS membership_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  experience VARCHAR(20) NOT NULL,
  industry VARCHAR(100) NOT NULL,
  interests TEXT[] DEFAULT '{}',
  certifications TEXT,
  referrer VARCHAR(100),
  professional_statement TEXT NOT NULL,
  membership_tier VARCHAR(50) NOT NULL,
  preferred_chapter VARCHAR(100),
  payment_preference VARCHAR(50),
  wants_newsletter BOOLEAN DEFAULT false,
  ethics_agreed BOOLEAN NOT NULL DEFAULT false,
  privacy_agreed BOOLEAN NOT NULL DEFAULT false,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_membership_applications_email ON membership_applications(email);
CREATE INDEX IF NOT EXISTS idx_membership_applications_company ON membership_applications(company);
CREATE INDEX IF NOT EXISTS idx_membership_applications_country ON membership_applications(country);
CREATE INDEX IF NOT EXISTS idx_membership_applications_industry ON membership_applications(industry);
CREATE INDEX IF NOT EXISTS idx_membership_applications_tier ON membership_applications(membership_tier);
CREATE INDEX IF NOT EXISTS idx_membership_applications_submitted_at ON membership_applications(submitted_at);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_membership_applications_updated_at 
    BEFORE UPDATE ON membership_applications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting new applications (anyone can submit)
CREATE POLICY "Anyone can submit membership application" ON membership_applications
    FOR INSERT WITH CHECK (true);

-- Create policy for reading applications (only authenticated users with proper role)
-- You may want to adjust this based on your authentication setup
CREATE POLICY "Authenticated users can read applications" ON membership_applications
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy for updating applications (only the applicant or admin)
-- This allows users to update their own applications if needed
CREATE POLICY "Users can update their own applications" ON membership_applications
    FOR UPDATE USING (auth.email() = email);

-- Grant necessary permissions
GRANT ALL ON membership_applications TO authenticated;
GRANT ALL ON membership_applications TO anon;
