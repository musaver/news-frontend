# Article Creation Feature Setup

## Overview
This feature allows authors to create articles (news) from the author dashboard. Only logged-in users with `userType = 'author'` can create articles.

## Database Migration

To set up the articles table in your database, run the following migration:

```bash
mysql -u your_username -p your_database_name < migration_add_articles_table.sql
```

Or connect to your MySQL database and execute the SQL commands from `migration_add_articles_table.sql`.

## Article Fields

The articles table includes the following fields:
- **id**: Unique identifier (UUID)
- **author_id**: Foreign key to user.id
- **title**: Article title (required, max 500 chars)
- **category**: Article category (required, max 100 chars)
- **content**: Article content (required, TEXT)
- **excerpt**: Brief summary (optional, max 150 chars)
- **tags**: Array of tags (JSON, optional)
- **cover_image**: Cover image URL (optional, TEXT)
- **status**: Article status - 'draft', 'under_review', or 'published' (default: 'draft')
- **created_at**: Timestamp when article was created
- **updated_at**: Timestamp when article was last updated
- **published_at**: Timestamp when article was published (null for drafts)

## API Endpoint

**POST /api/articles**

Creates a new article. Requires authentication and author role.

### Request Body:
```json
{
  "title": "Article Title",
  "category": "Politics",
  "content": "Article content...",
  "excerpt": "Brief summary",
  "tags": ["tag1", "tag2"],
  "coverImage": "https://example.com/image.jpg",
  "status": "draft"
}
```

### Response (Success):
```json
{
  "success": true,
  "message": "Article created successfully.",
  "articleId": "uuid-here"
}
```

### Response (Error):
```json
{
  "error": "Error message"
}
```

## Usage

1. Ensure user is logged in with `userType = 'author'`
2. Navigate to `/create-article`
3. Fill in the article form with title, category, content, etc.
4. Click "Save as Draft" or "Create Article" to submit
5. Article will be saved to the database and user redirected to articles page

## Security

- Only authenticated users can access the API
- Only users with `userType = 'author'` can create articles
- Session verification is done via NextAuth
- Foreign key constraint ensures articles are linked to valid authors
