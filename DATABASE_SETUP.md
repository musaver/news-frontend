# Database Setup Guide - Fixing Hero Images Issue

## Problem Summary

**Hero section images are not showing** on the homepage and category pages.

### Root Cause

The issue is **NOT** with the image components or image URLs. The root cause is:

1. **Missing database configuration** - Environment variables for MySQL connection are not set
2. **Database connection timeout** - All database queries fail with `connect ETIMEDOUT`
3. **Empty article arrays** - When no articles are fetched, the `FeaturedSection` component returns `null` (line 19-20 in `src/components/homepage/FeaturedSection.tsx`)
4. **No hero rendered** - Since the component returns null, no hero images are displayed

### Server Logs Showing the Issue

```
Error fetching categories: connect ETIMEDOUT
Error fetching Business articles: connect ETIMEDOUT
Error fetching latest articles: connect ETIMEDOUT
```

## Solution

### Step 1: Configure Database Environment Variables

A `.env.local` file has been created with placeholder values. You need to update it with your actual MySQL credentials:

```bash
# Edit .env.local with your actual database credentials
DB_HOST=localhost          # Your MySQL host (localhost, 127.0.0.1, or remote IP)
DB_USER=root              # Your MySQL username
DB_PASS=your_password     # Your MySQL password
DB_NAME=news_frontend     # Your database name
```

### Step 2: Set Up MySQL Database

#### Option A: Using Existing MySQL Installation

If you already have MySQL installed:

1. **Start MySQL server:**
   ```bash
   # On macOS
   brew services start mysql

   # On Ubuntu/Debian
   sudo systemctl start mysql

   # On Windows
   net start MySQL
   ```

2. **Create the database:**
   ```bash
   mysql -u root -p
   ```
   ```sql
   CREATE DATABASE news_frontend;
   EXIT;
   ```

3. **Run migrations to create tables:**
   ```bash
   npm run db:push
   ```

4. **Import seed data:**
   ```bash
   mysql -u root -p news_frontend < seed-data.sql
   ```

#### Option B: Using Docker

If you prefer using Docker:

1. **Create `docker-compose.yml`:**
   ```yaml
   version: '3.8'
   services:
     mysql:
       image: mysql:8.0
       restart: always
       environment:
         MYSQL_ROOT_PASSWORD: password
         MYSQL_DATABASE: news_frontend
       ports:
         - "3306:3306"
       volumes:
         - mysql_data:/var/lib/mysql

   volumes:
     mysql_data:
   ```

2. **Start MySQL container:**
   ```bash
   docker-compose up -d
   ```

3. **Update `.env.local`:**
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=password
   DB_NAME=news_frontend
   ```

4. **Run migrations:**
   ```bash
   npm run db:push
   ```

5. **Import seed data:**
   ```bash
   docker exec -i $(docker-compose ps -q mysql) mysql -uroot -ppassword news_frontend < seed-data.sql
   ```

### Step 3: Restart Development Server

After configuring the database:

1. **Kill existing dev server** (if running):
   ```bash
   # Press Ctrl+C in the terminal running npm run dev
   ```

2. **Start the server again:**
   ```bash
   npm run dev
   ```

3. **Verify the fix:**
   - Visit http://localhost:3000
   - Hero images should now appear
   - All articles should load from the database

## Verification

After setup, verify the data was imported successfully:

```sql
-- Connect to MySQL
mysql -u root -p news_frontend

-- Check authors (should return 10)
SELECT COUNT(*) FROM user WHERE user_type = 'author';

-- Check published articles (should return 50+)
SELECT COUNT(*) FROM articles WHERE status = 'published';

-- Check hero article for homepage
SELECT id, title, category, cover_image
FROM articles
WHERE status = 'published'
ORDER BY published_at DESC
LIMIT 1;
```

## What the Seed Data Contains

- **10 Authors** - Emma Thompson, Michael Chen, Sarah Johnson, etc.
- **50+ Articles** across categories:
  - Business (5 articles)
  - Finance (8 articles)
  - Politics (6 articles)
  - Health (7 articles)
  - Fashion (5 articles)
  - Real Estate, Travel, Entertainment, Sports, Tech (3-5 each)
- **Cover Images** - All articles include Unsplash image URLs

## Troubleshooting

### Issue: "connect ETIMEDOUT" still appearing

**Cause:** Database is not running or not accessible

**Solution:**
1. Check if MySQL is running: `sudo systemctl status mysql` (Linux) or `brew services list` (macOS)
2. Verify credentials in `.env.local` are correct
3. Test connection: `mysql -h localhost -u root -p`

### Issue: "Table doesn't exist"

**Cause:** Database schema not created

**Solution:**
```bash
npm run db:push
```

### Issue: "Duplicate entry" error when importing seed data

**Cause:** Data already exists in the database

**Solution:**
```sql
-- Clear existing data first
USE news_frontend;
TRUNCATE TABLE articles;
TRUNCATE TABLE user;
```

Then import again:
```bash
mysql -u root -p news_frontend < seed-data.sql
```

### Issue: Port 3306 already in use

**Cause:** Another MySQL instance is running

**Solution:**
- Stop the other instance, or
- Use a different port in `docker-compose.yml` and update `.env.local`

## Technical Details

### Why Hero Images Weren't Showing

1. **Component Logic** (`src/components/homepage/FeaturedSection.tsx`):
   ```typescript
   const FeaturedSection = ({ mockImages, articles }: FeaturedSectionProps) => {
     const featuredArticle = articles[0];

     if (!featuredArticle) {
       return null; // Returns null when articles array is empty
     }

     const imageUrl = featuredArticle.coverImage || mockImages.featuredArticle;
     // ... rest of the component
   }
   ```

2. **Database Fetch** (`src/app/page.tsx`):
   ```typescript
   const businessArticles = await fetchArticlesByCategory('Business');
   // Returns [] when database connection fails
   ```

3. **Result**: Empty array → No featured article → Component returns null → No hero image

### The Image Component is Working Correctly

The `OptimizedImage` component in `src/components/OptimizedImage.tsx` has:
- ✅ Error handling with fallback SVG
- ✅ Loading states with skeleton
- ✅ Lazy loading with IntersectionObserver
- ✅ Proper eager loading for hero images (`lazy={false}`)

The component is not the issue - it never received articles to display.

## Next Steps

1. ✅ Configure `.env.local` with your database credentials
2. ✅ Set up MySQL database
3. ✅ Run migrations: `npm run db:push`
4. ✅ Import seed data: `mysql -u root -p news_frontend < seed-data.sql`
5. ✅ Restart dev server: `npm run dev`
6. ✅ Verify hero images appear on homepage and category pages

---

**Need Help?**

If you continue experiencing issues:
1. Check the development server logs for specific error messages
2. Verify database connection: `mysql -h localhost -u root -p news_frontend`
3. Ensure all environment variables are set correctly in `.env.local`
4. Restart the development server after any `.env.local` changes
