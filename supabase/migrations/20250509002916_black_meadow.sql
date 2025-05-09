/*
  # Create Clerk user mapping table

  1. New Tables
    - `clerk_user_mapping`
      - `id` (uuid, primary key)
      - `clerk_id` (text, unique)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `clerk_user_mapping` table
    - Add policy for users to read their own mapping
    - Add policy for service role to create mappings
*/

CREATE TABLE IF NOT EXISTS clerk_user_mapping (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE clerk_user_mapping ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own mapping"
  ON clerk_user_mapping
  FOR SELECT
  TO authenticated
  USING (clerk_id = auth.jwt()->>'sub');

CREATE POLICY "Service role can create mappings"
  ON clerk_user_mapping
  FOR INSERT
  TO service_role
  WITH CHECK (true);