# Categories Table Migration Guide

## Overview

This migration normalizes the database by creating a separate `categories` table and replacing category names in the `articles` table with foreign key references to category IDs.

## What Changed

### 1. Database Schema

#### New Table: `categories`
```sql
CREATE TABLE `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL UNIQUE,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
```

#### Updated Table: `articles`
- **Removed**: `category` VARCHAR(100) column
- **Added**: `category_id` INT column with foreign key reference to `categories(id)`

### 2. Code Changes

#### Schema (`src/lib/schema.ts`)
- Added new `categories` table definition
- Updated `articles` table to use `categoryId` instead of `category`

#### API Routes
Updated to join with categories table and translate between category names (frontend) and category IDs (database):
- `src/app/api/articles/public/route.ts`
- `src/app/api/articles/route.ts`
- `src/app/api/articles/[id]/route.ts`

#### Pages
Updated to join with categories table when querying articles:
- `src/app/page.tsx`
- `src/app/category/page.tsx`

## Running the Migration

### Prerequisites
- MySQL database access
- Backup your database before running the migration

### Steps

1. **Run the SQL migration file**:
   ```bash
   mysql -u your_username -p your_database_name < migration_create_categories_table.sql
   ```

   Or using MySQL client:
   ```sql
   USE your_database_name;
   SOURCE /home/user/news-frontend/migration_create_categories_table.sql;
   ```

2. **Verify the migration**:
   ```sql
   -- Check categories were created
   SELECT * FROM categories;

   -- Check articles now have category_id
   SELECT a.id, a.title, a.category_id, c.name as category_name
   FROM articles a
   LEFT JOIN categories c ON a.category_id = c.id
   LIMIT 10;
   ```

3. **Test the application**:
   ```bash
   npm run dev
   ```

## Migration Details

The SQL migration performs the following steps:

1. Creates the `categories` table with auto-increment ID, unique name, and slug
2. Extracts unique categories from existing `articles` table
3. Inserts them into the new `categories` table
4. Adds `category_id` column to `articles` (temporarily nullable)
5. Updates all articles to set `category_id` based on category name
6. Makes `category_id` NOT NULL after all rows are updated
7. Adds foreign key constraint from `articles.category_id` to `categories.id`
8. Drops the old `category` column from articles

## Categories Extracted

The following categories will be extracted from your existing articles:
- Business
- Finance
- Politics
- Health
- Fashion
- Real Estate
- Travel
- Entertainment
- Sports
- Tech

## Frontend Impact

**No changes required to frontend code!**

The API layer handles the translation:
- Frontend still sends/receives category names (e.g., "Business", "Finance")
- Backend translates to/from category IDs when working with the database
- All existing frontend components continue to work without modification

## Benefits

1. **Data Integrity**: Category names are consistent across all articles
2. **Better Performance**: Smaller storage footprint (INT vs VARCHAR)
3. **Easier Maintenance**: Update category name in one place
4. **Future Extensibility**: Easy to add category metadata (description, icon, etc.)
5. **Query Performance**: Faster joins and filtering on INT primary keys

## Rollback

If you need to rollback this migration:

```sql
-- Add category column back
ALTER TABLE articles ADD COLUMN category VARCHAR(100);

-- Populate with category name from join
UPDATE articles a
INNER JOIN categories c ON a.category_id = c.id
SET a.category = c.name;

-- Make it NOT NULL
ALTER TABLE articles MODIFY COLUMN category VARCHAR(100) NOT NULL;

-- Add index
ALTER TABLE articles ADD KEY idx_category (category);

-- Drop foreign key and category_id
ALTER TABLE articles
DROP FOREIGN KEY fk_articles_category,
DROP COLUMN category_id;

-- Optionally drop categories table
DROP TABLE categories;
```

## Troubleshooting

### Error: Foreign key constraint fails
- Ensure all articles have valid category_id values before adding the constraint
- Check for any NULL category_id values: `SELECT * FROM articles WHERE category_id IS NULL;`

### Error: Duplicate entry for category name
- The categories table requires unique category names
- Check for case differences or extra spaces in category names

### API returns NULL for category
- Verify the join in your queries includes the categories table
- Check that the category_id foreign key relationship is correct

## Next Steps

After successful migration:
1. Monitor application logs for any category-related errors
2. Consider adding category management endpoints (create/update/delete categories)
3. Consider adding category metadata (description, color, icon)
4. Update any analytics or reporting queries to use the new structure

---

**Migration Created**: 2025-11-15
**Database Version**: After this migration, you're using normalized categories structure
