# Comments & Replies Module Implementation

This document describes the comprehensive comments module that has been added to the news details page.

## Features

✅ **Top-level Comments**: Users can post comments on articles
✅ **Nested Replies**: Users can reply to existing comments
✅ **Authentication Required**: Only logged-in users can post comments and replies
✅ **User Information**: Comments display user name and avatar
✅ **Real-time Updates**: Comments refresh automatically after posting
✅ **Responsive Design**: Fully responsive UI using Tailwind CSS
✅ **Theme Styles**: Uses the application's red (#cc0000) accent color

## Database Schema

### Comments Table

The `comments` table stores both top-level comments and replies using a self-referencing structure.

**Columns:**
- `id` (VARCHAR 255, PRIMARY KEY): Unique identifier (UUID)
- `article_id` (VARCHAR 255, NOT NULL): Foreign key to articles.id
- `user_id` (VARCHAR 255, NOT NULL): Foreign key to user.id
- `parent_id` (VARCHAR 255, NULL): Self-referencing foreign key for replies (NULL for top-level comments)
- `content` (TEXT, NOT NULL): The comment text
- `created_at` (TIMESTAMP): Creation timestamp
- `updated_at` (TIMESTAMP): Last update timestamp

**Relationships:**
- Cascading deletes: If an article, user, or parent comment is deleted, related comments are automatically removed
- Indexes on `article_id`, `user_id`, `parent_id`, and `created_at` for optimal query performance

## SQL Migration Query

Run this SQL query in your MySQL database to create the comments table:

```sql
-- ======================================
-- Comments Module Migration
-- ======================================

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
```

The full SQL file is also available at: `migrations/comments_schema.sql`

## API Endpoints

### POST /api/comments

Creates a new comment or reply.

**Authentication:** Required
**Request Body:**
```json
{
  "articleId": "string",
  "content": "string",
  "parentId": "string (optional, for replies)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Comment added successfully!",
  "comment": { /* comment object */ }
}
```

### GET /api/comments?articleId={id}

Fetches all comments for an article with nested replies.

**Authentication:** Not required
**Response:**
```json
{
  "success": true,
  "comments": [
    {
      "id": "string",
      "articleId": "string",
      "userId": "string",
      "userName": "string",
      "userImage": "string",
      "content": "string",
      "createdAt": "timestamp",
      "replies": [/* nested reply objects */]
    }
  ],
  "totalComments": 0
}
```

## Components

### 1. CommentsSection (`/src/components/comments/CommentsSection.tsx`)

Main container component that:
- Displays the comment count
- Shows a sign-in prompt for unauthenticated users
- Renders the comment form for logged-in users
- Fetches and displays all comments
- Shows loading and empty states

### 2. CommentForm (`/src/components/comments/CommentForm.tsx`)

Form component for submitting comments/replies:
- Textarea with character counter (max 5000)
- Validation for empty content
- Submit and cancel buttons
- Loading state during submission
- Error handling

### 3. CommentItem (`/src/components/comments/CommentItem.tsx`)

Individual comment display component:
- User avatar (image or initials)
- User name and timestamp
- Comment content
- Reply button (for authenticated users)
- Nested reply form
- Recursive rendering for nested replies

## UI Design

The comments module follows the application's theme:

- **Primary Color:** `#cc0000` (red) for buttons, links, and accents
- **Typography:** Consistent with article page styling
- **Spacing:** Proper padding and margins for readability
- **Avatars:** Circular user images or initials with red background
- **Time Format:** Relative time (e.g., "2h ago", "3d ago")
- **Nested Replies:** Indented with left border for visual hierarchy

## Integration

The comments section is integrated into the news details page at:
`/src/app/news-details/[id]/page.tsx`

It appears after the Related Articles section and before the Footer.

## Authentication Flow

1. **Unauthenticated Users:**
   - Can view all comments and replies
   - See a "Sign In to Comment" button
   - Cannot post comments or replies

2. **Authenticated Users:**
   - Can view all comments and replies
   - Can post new comments
   - Can reply to any comment
   - See their own profile information in posted comments

## File Structure

```
news-frontend/
├── migrations/
│   └── comments_schema.sql              # SQL migration file
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── comments/
│   │   │       └── route.ts             # Comments API endpoints
│   │   └── news-details/
│   │       └── [id]/
│   │           └── page.tsx             # Integrated comments section
│   ├── components/
│   │   └── comments/
│   │       ├── CommentsSection.tsx      # Main comments container
│   │       ├── CommentForm.tsx          # Comment submission form
│   │       ├── CommentItem.tsx          # Individual comment display
│   │       └── index.ts                 # Export barrel
│   └── lib/
│       └── schema.ts                    # Updated with comments table
```

## Testing Checklist

- [ ] Run SQL migration to create comments table
- [ ] Verify table creation in database
- [ ] Test posting a comment as logged-in user
- [ ] Test replying to a comment
- [ ] Test viewing comments as unauthenticated user
- [ ] Test character limit validation
- [ ] Test empty comment validation
- [ ] Test nested replies display
- [ ] Test responsive design on mobile
- [ ] Test real-time comment updates

## Future Enhancements

Potential improvements for the comments system:

- Edit/delete own comments
- Like/reaction system
- Comment moderation for admins
- Comment threading depth limit
- Pagination for large comment lists
- Rich text formatting in comments
- Mention (@username) functionality
- Email notifications for replies
- Report/flag inappropriate comments
- Sort comments (newest, oldest, most replied)

---

**Implementation Date:** 2025-11-18
**Author:** Claude AI Assistant
