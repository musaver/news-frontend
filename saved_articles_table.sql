-- ============================================
-- SQL Query for Saved Articles Table
-- ============================================
-- This script creates the saved_articles table
-- for storing user-saved articles
-- ============================================

-- Create the saved_articles table
CREATE TABLE IF NOT EXISTS `saved_articles` (
  `id` VARCHAR(255) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `article_id` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_user_id` (`user_id`),
  INDEX `idx_article_id` (`article_id`),
  UNIQUE INDEX `idx_user_article` (`user_id`, `article_id`),
  CONSTRAINT `fk_saved_articles_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_saved_articles_article` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table Description:
-- ============================================
-- id: Unique identifier for each saved article entry (UUID)
-- user_id: Foreign key reference to user.id (the user who saved the article)
-- article_id: Foreign key reference to articles.id (the article that was saved)
-- created_at: Timestamp when the article was saved
--
-- Indexes:
-- - Primary key on id for unique identification
-- - Index on user_id for faster queries of user's saved articles
-- - Index on article_id for faster lookups of article save status
-- - Unique composite index on (user_id, article_id) to prevent duplicate saves
--
-- Foreign Keys:
-- - ON DELETE CASCADE: When a user or article is deleted, their saved entries are automatically removed
-- - ON UPDATE CASCADE: When user_id or article_id is updated, saved entries are automatically updated
-- ============================================
