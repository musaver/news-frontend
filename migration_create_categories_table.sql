-- Migration: Create categories table and normalize articles
-- Date: 2025-11-15
-- Description: Extract categories into separate table and replace with foreign keys in articles table

-- Step 1: Create the categories table
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL UNIQUE,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `idx_name` (`name`),
  KEY `idx_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Step 2: Extract unique categories from articles and insert into categories table
-- We'll create a slug by lowercasing and replacing spaces with hyphens
INSERT INTO `categories` (`name`, `slug`)
SELECT DISTINCT
  `category` as `name`,
  LOWER(REPLACE(`category`, ' ', '-')) as `slug`
FROM `articles`
WHERE `category` IS NOT NULL AND `category` != ''
ORDER BY `category`;

-- Step 3: Add category_id column to articles table (temporarily nullable)
ALTER TABLE `articles`
ADD COLUMN `category_id` INT NULL AFTER `title`;

-- Step 4: Update articles to set category_id based on category name
UPDATE `articles` a
INNER JOIN `categories` c ON a.`category` = c.`name`
SET a.`category_id` = c.`id`;

-- Step 5: Add index on category_id before making it NOT NULL
ALTER TABLE `articles`
ADD KEY `idx_category_id` (`category_id`);

-- Step 6: Make category_id NOT NULL now that all rows have been updated
ALTER TABLE `articles`
MODIFY COLUMN `category_id` INT NOT NULL;

-- Step 7: Add foreign key constraint
ALTER TABLE `articles`
ADD CONSTRAINT `fk_articles_category`
FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
ON DELETE RESTRICT ON UPDATE CASCADE;

-- Step 8: Drop the old category column and its index
ALTER TABLE `articles`
DROP INDEX `idx_category`,
DROP COLUMN `category`;

-- Verification queries
-- Check categories table
SELECT * FROM `categories` ORDER BY `id`;

-- Check that all articles have valid category_id
SELECT
  a.id,
  a.title,
  a.category_id,
  c.name as category_name
FROM `articles` a
LEFT JOIN `categories` c ON a.category_id = c.id
LIMIT 10;

-- Count articles per category
SELECT
  c.name,
  COUNT(a.id) as article_count
FROM `categories` c
LEFT JOIN `articles` a ON c.id = a.category_id
GROUP BY c.id, c.name
ORDER BY article_count DESC;
