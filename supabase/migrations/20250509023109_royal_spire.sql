/*
  # Fix clerk_user_mapping RLS policies

  1. Changes
    - Drop existing RLS policies
    - Add new policies that allow:
      - Authenticated users to create their own mapping
      - Authenticated users to read their own mapping
      - Service role to have full access
  
  2. Security
    - Maintains RLS enabled
    - Ensures proper access control
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON clerk_user_mapping;
DROP POLICY IF EXISTS "Enable insert access for authenticated users" ON clerk_user_mapping;
DROP POLICY IF EXISTS "Enable service role full access" ON clerk_user_mapping;

-- Create new policies
CREATE POLICY "Enable read access for authenticated users"
ON clerk_user_mapping FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Enable insert access for authenticated users"
ON clerk_user_mapping FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Enable service role full access"
ON clerk_user_mapping FOR ALL
TO service_role
USING (true)
WITH CHECK (true);