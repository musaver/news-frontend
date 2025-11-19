import {
  mysqlTable,
  varchar,
  datetime,
  text,
  primaryKey,
  json,
  timestamp,
  int,
  boolean,
} from 'drizzle-orm/mysql-core';

// ✅ User table (required)
export const user = mysqlTable('user', {
  id: varchar('id', { length: 255 }).primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: datetime('emailVerified'),
  image: text('image'),
  userType: varchar('user_type', { length: 50 }).notNull().default('user'), // 'user' or 'author'
  bio: text('bio'),
  authorDesignation: varchar('author_designation', { length: 255 }),
  // Notification preferences
  emailNotifications: boolean('email_notifications').notNull().default(true),
  authorNotifications: boolean('author_notifications').notNull().default(true),
  weeklyNewsletter: boolean('weekly_newsletter').notNull().default(false),
  commentReplies: boolean('comment_replies').notNull().default(true),
  // Display settings
  darkMode: boolean('dark_mode').notNull().default(false),
});

// ✅ Accounts table (OAuth support: Google, Facebook)
export const account = mysqlTable(
  'account',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: datetime('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: text('id_token'),
    session_state: varchar('session_state', { length: 255 }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.provider, table.providerAccountId] }),
  })
);

// ✅ Sessions table (for session-based auth, even if using JWT)
export const sessions = mysqlTable('sessions', {
  sessionToken: varchar('sessionToken', { length: 255 }).primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  expires: datetime('expires').notNull(),
});

// ✅ Verification tokens (for email OTP, magic links)
export const verification_tokens = mysqlTable(
  'verification_tokens',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    otp: varchar('otp', { length: 255 }).notNull(),
    expires: datetime('expires').notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.identifier, table.token, table.otp] }),
  })
);

// ✅ Categories table (for article categories)
export const categories = mysqlTable('categories', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ✅ Articles table (for news articles created by authors)
export const articles = mysqlTable('articles', {
  id: varchar('id', { length: 255 }).primaryKey(),
  authorId: varchar('author_id', { length: 255 }).notNull(), // Foreign key to user.id
  title: varchar('title', { length: 500 }).notNull(),
  categoryId: int('category_id').notNull(), // Foreign key to categories.id
  content: text('content').notNull(),
  excerpt: varchar('excerpt', { length: 150 }),
  tags: json('tags').$type<string[]>(),
  coverImage: text('cover_image'),
  status: varchar('status', { length: 50 }).notNull().default('draft'), // 'draft', 'under_review', 'published'
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  publishedAt: datetime('published_at'),
});

// ✅ Comments table (for comments on articles with nested replies support)
export const comments = mysqlTable('comments', {
  id: varchar('id', { length: 255 }).primaryKey(),
  articleId: varchar('article_id', { length: 255 }).notNull(), // Foreign key to articles.id
  userId: varchar('user_id', { length: 255 }).notNull(), // Foreign key to user.id
  parentId: varchar('parent_id', { length: 255 }), // Self-referencing for replies (null for top-level comments)
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
});

// ✅ Saved Articles table (for users to save articles for later reading)
export const savedArticles = mysqlTable('saved_articles', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(), // Foreign key to user.id
  articleId: varchar('article_id', { length: 255 }).notNull(), // Foreign key to articles.id
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ✅ Article Visits table (for tracking article detail page visits)
export const articleVisits = mysqlTable('article_visits', {
  id: varchar('id', { length: 255 }).primaryKey(),
  articleId: varchar('article_id', { length: 255 }).notNull(), // Foreign key to articles.id
  userId: varchar('user_id', { length: 255 }), // Foreign key to user.id (nullable for anonymous visits)
  visitedAt: timestamp('visited_at').notNull().defaultNow(),
  ipAddress: varchar('ip_address', { length: 45 }), // IPv4 or IPv6 address
  userAgent: text('user_agent'), // Browser and device information
});
