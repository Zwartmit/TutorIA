/*
  # Update clerk_user_mapping RLS policies

  1. Changes
    - Drop existing RLS policies for clerk_user_mapping table
    - Add new policies that properly handle:
      - Service role can manage all mappings
      - Authenticated users can read their own mapping
      - Authenticated users can create their own mapping
  
  2. Security
    - Maintains RLS enabled on clerk_user_mapping table
    - Ensures users can only access their own mapping data
    - Service role retains full access for system operations
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Service role can create mappings" ON clerk_user_mapping;
DROP POLICY IF EXISTS "Users can read their own mapping" ON clerk_user_mapping;

-- Create new policies
CREATE POLICY "Enable read access for authenticated users"
ON clerk_user_mapping FOR SELECT
TO authenticated
USING (
  clerk_id = auth.jwt() ->> 'sub'
);

CREATE POLICY "Enable insert access for authenticated users"
ON clerk_user_mapping FOR INSERT
TO authenticated
WITH CHECK (
  clerk_id = auth.jwt() ->> 'sub'
);

CREATE POLICY "Enable service role full access"
ON clerk_user_mapping FOR ALL
TO service_role
USING (true)
WITH CHECK (true);