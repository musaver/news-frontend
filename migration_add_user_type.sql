-- Migration: Add user_type column to user table
-- Date: 2025-11-15
-- Description: Add user_type column to differentiate between regular users and authors

-- Step 1: Add the user_type column with a default value
ALTER TABLE `user`
ADD COLUMN `user_type` VARCHAR(50) NOT NULL DEFAULT 'user' AFTER `image`;

-- Step 2: Update existing users to have 'user' as their user_type (optional, as default handles this)
UPDATE `user` SET `user_type` = 'user' WHERE `user_type` IS NULL OR `user_type` = '';

-- Step 3: (Optional) If you want to promote specific users to 'author', run queries like:
-- UPDATE `user` SET `user_type` = 'author' WHERE `email` = 'author@example.com';

-- Verification query: Check the updated table structure
-- DESCRIBE `user`;

-- Verification query: Check user types distribution
-- SELECT `user_type`, COUNT(*) as count FROM `user` GROUP BY `user_type`;
