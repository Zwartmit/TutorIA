/*
  # Create user progress tracking table

  1. New Tables
    - `user_progress`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references clerk_user_mapping)
      - `type` (text, either 'guide' or 'assessment')
      - `content_id` (text, reference to guide or assessment ID)
      - `score` (integer, for assessments)
      - `completed_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES clerk_user_mapping(id) ON DELETE CASCADE NOT NULL,
  type text NOT NULL CHECK (type IN ('guide', 'assessment')),
  content_id text NOT NULL,
  score integer CHECK (score >= 0 AND score <= 100),
  completed_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, type, content_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Policies for user_progress
CREATE POLICY "Users can view their own progress"
  ON user_progress
  FOR SELECT
  TO authenticated
  USING (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Users can insert their own progress"
  ON user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Users can update their own progress"
  ON user_progress
  FOR UPDATE
  TO authenticated
  USING (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  )
  WITH CHECK (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );