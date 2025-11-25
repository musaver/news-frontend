-- Migration: Add articles table
-- Date: 2025-11-15
-- Description: Create articles table for news content created by authors

CREATE TABLE IF NOT EXISTS `articles` (
  `id` VARCHAR(255) NOT NULL,
  `author_id` VARCHAR(255) NOT NULL,
  `title` VARCHAR(500) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  `excerpt` VARCHAR(150),
  `tags` JSON,
  `cover_image` TEXT,
  `status` VARCHAR(50) NOT NULL DEFAULT 'draft',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `published_at` DATETIME,
  PRIMARY KEY (`id`),
  KEY `idx_author_id` (`author_id`),
  KEY `idx_status` (`status`),
  KEY `idx_category` (`category`),
  KEY `idx_created_at` (`created_at`),
  CONSTRAINT `fk_articles_author` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Verification query: Check the created table structure
-- DESCRIBE `articles`;

-- Verification query: Check articles count
-- SELECT COUNT(*) as total_articles FROM `articles`;
