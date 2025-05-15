/*
  # Create forum tables with Clerk user mapping

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references clerk_user_mapping)
      - `title` (text)
      - `content` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `likes_count` (integer)
      - `comments_count` (integer)
      
    - `comments`
      - `id` (uuid, primary key)
      - `post_id` (uuid, references posts)
      - `user_id` (uuid, references clerk_user_mapping)
      - `content` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      
    - `likes`
      - `id` (uuid, primary key)
      - `post_id` (uuid, references posts)
      - `user_id` (uuid, references clerk_user_mapping)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated and public access
*/

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES clerk_user_mapping(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  likes_count integer DEFAULT 0,
  comments_count integer DEFAULT 0
);

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES clerk_user_mapping(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create likes table
CREATE TABLE IF NOT EXISTS likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES clerk_user_mapping(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(post_id, user_id)
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  -- Posts policies
  DROP POLICY IF EXISTS "Posts are viewable by everyone" ON posts;
  DROP POLICY IF EXISTS "Users can insert their own posts" ON posts;
  DROP POLICY IF EXISTS "Users can update their own posts" ON posts;
  DROP POLICY IF EXISTS "Users can delete their own posts" ON posts;
  
  -- Comments policies
  DROP POLICY IF EXISTS "Comments are viewable by everyone" ON comments;
  DROP POLICY IF EXISTS "Users can insert their own comments" ON comments;
  DROP POLICY IF EXISTS "Users can update their own comments" ON comments;
  DROP POLICY IF EXISTS "Users can delete their own comments" ON comments;
  
  -- Likes policies
  DROP POLICY IF EXISTS "Likes are viewable by everyone" ON likes;
  DROP POLICY IF EXISTS "Users can insert their own likes" ON likes;
  DROP POLICY IF EXISTS "Users can delete their own likes" ON likes;
END $$;

-- Policies for posts
CREATE POLICY "Posts are viewable by everyone"
  ON posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can insert their own posts"
  ON posts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Users can update their own posts"
  ON posts
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

CREATE POLICY "Users can delete their own posts"
  ON posts
  FOR DELETE
  TO authenticated
  USING (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

-- Policies for comments
CREATE POLICY "Comments are viewable by everyone"
  ON comments
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can insert their own comments"
  ON comments
  FOR INSERT
  TO authenticated
  WITH CHECK (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Users can update their own comments"
  ON comments
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

CREATE POLICY "Users can delete their own comments"
  ON comments
  FOR DELETE
  TO authenticated
  USING (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

-- Policies for likes
CREATE POLICY "Likes are viewable by everyone"
  ON likes
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can insert their own likes"
  ON likes
  FOR INSERT
  TO authenticated
  WITH CHECK (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Users can delete their own likes"
  ON likes
  FOR DELETE
  TO authenticated
  USING (
    user_id IN (
      SELECT id FROM clerk_user_mapping WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

-- Create function to update post counts
CREATE OR REPLACE FUNCTION update_post_counts()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF TG_TABLE_NAME = 'likes' THEN
      UPDATE posts SET likes_count = likes_count + 1 WHERE id = NEW.post_id;
    ELSIF TG_TABLE_NAME = 'comments' THEN
      UPDATE posts SET comments_count = comments_count + 1 WHERE id = NEW.post_id;
    END IF;
  ELSIF TG_OP = 'DELETE' THEN
    IF TG_TABLE_NAME = 'likes' THEN
      UPDATE posts SET likes_count = likes_count - 1 WHERE id = OLD.post_id;
    ELSIF TG_TABLE_NAME = 'comments' THEN
      UPDATE posts SET comments_count = comments_count - 1 WHERE id = OLD.post_id;
    END IF;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS update_post_likes_count ON likes;
DROP TRIGGER IF EXISTS update_post_comments_count ON comments;

-- Create triggers for updating counts
CREATE TRIGGER update_post_likes_count
AFTER INSERT OR DELETE ON likes
FOR EACH ROW
EXECUTE FUNCTION update_post_counts();

CREATE TRIGGER update_post_comments_count
AFTER INSERT OR DELETE ON comments
FOR EACH ROW
EXECUTE FUNCTION update_post_counts();