-- ======================================
-- Comments Module Migration
-- ======================================
-- This migration creates the comments table for article comments and nested replies
-- Run this SQL query manually in your MySQL database

-- Create comments table
CREATE TABLE IF NOT EXISTS `comments` (
  `id` VARCHAR(255) PRIMARY KEY,
  `article_id` VARCHAR(255) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `parent_id` VARCHAR(255) DEFAULT NULL,
  `content` TEXT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- Foreign key constraints
  CONSTRAINT `fk_comments_article` FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_comments_user` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_comments_parent` FOREIGN KEY (`parent_id`) REFERENCES `comments`(`id`) ON DELETE CASCADE,

  -- Indexes for better query performance
  INDEX `idx_article_id` (`article_id`),
  INDEX `idx_user_id` (`user_id`),
  INDEX `idx_parent_id` (`parent_id`),
  INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ======================================
-- Notes:
-- ======================================
-- - `id`: Unique identifier for each comment (UUID format)
-- - `article_id`: Links comment to an article (foreign key to articles.id)
-- - `user_id`: Links comment to a user (foreign key to user.id)
-- - `parent_id`: NULL for top-level comments, references another comment.id for replies
-- - `content`: The comment text content
-- - `created_at`: Timestamp when comment was created
-- - `updated_at`: Timestamp when comment was last updated
--
-- Foreign key cascades:
-- - ON DELETE CASCADE: If an article, user, or parent comment is deleted,
--   all associated comments will be automatically deleted
--
-- Indexes:
-- - Optimize queries for fetching comments by article, user, parent, and date
