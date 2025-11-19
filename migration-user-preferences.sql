-- Migration: Add user preferences columns to user table
-- Date: 2025-11-19
-- Description: Adds bio, notification preferences, and display settings columns to support dynamic user preferences

-- Add bio column
ALTER TABLE `user`
ADD COLUMN `bio` TEXT NULL AFTER `user_type`;

-- Add notification preference columns
ALTER TABLE `user`
ADD COLUMN `email_notifications` TINYINT(1) NOT NULL DEFAULT 1 AFTER `bio`,
ADD COLUMN `author_notifications` TINYINT(1) NOT NULL DEFAULT 1 AFTER `email_notifications`,
ADD COLUMN `weekly_newsletter` TINYINT(1) NOT NULL DEFAULT 0 AFTER `author_notifications`,
ADD COLUMN `comment_replies` TINYINT(1) NOT NULL DEFAULT 1 AFTER `weekly_newsletter`;

-- Add display settings column
ALTER TABLE `user`
ADD COLUMN `dark_mode` TINYINT(1) NOT NULL DEFAULT 0 AFTER `comment_replies`;

-- Verify the changes
DESCRIBE `user`;

-- Optional: Check the updated table structure
SELECT
  COLUMN_NAME,
  COLUMN_TYPE,
  IS_NULLABLE,
  COLUMN_DEFAULT,
  COLUMN_KEY
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'u970484384_yl'
  AND TABLE_NAME = 'user'
ORDER BY ORDINAL_POSITION;
