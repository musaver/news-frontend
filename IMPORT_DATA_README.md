# Importing Dummy Data into MySQL Database

This guide will help you import the seed data into your MySQL database to make the homepage fully dynamic.

## Prerequisites

- MySQL server running
- Database connection configured in your `.env` file
- MySQL client or command-line access

## Method 1: Using MySQL Command Line

### Step 1: Connect to MySQL
```bash
mysql -u your_username -p
```

### Step 2: Select Your Database
```sql
USE your_database_name;
```

### Step 3: Import the Seed Data
```sql
SOURCE /home/user/news-frontend/seed-data.sql;
```

Alternatively, run it from the command line directly:
```bash
mysql -u your_username -p your_database_name < /home/user/news-frontend/seed-data.sql
```

## Method 2: Using MySQL Workbench

1. Open MySQL Workbench
2. Connect to your database server
3. Select your database from the left sidebar
4. Go to **File → Run SQL Script**
5. Navigate to `/home/user/news-frontend/seed-data.sql`
6. Click **Run**

## Method 3: Using phpMyAdmin

1. Log into phpMyAdmin
2. Select your database from the left sidebar
3. Click on the **SQL** tab
4. Click on the **Import files** section
5. Click **Choose File** and select `seed-data.sql`
6. Click **Go** at the bottom

## Method 4: Copy and Paste

1. Open the `seed-data.sql` file in a text editor
2. Copy all the SQL statements
3. Log into your MySQL client (command line, Workbench, phpMyAdmin, etc.)
4. Select your database
5. Paste and execute the SQL statements

## What Gets Imported

The seed data includes:

### Authors (10 total)
- Emma Thompson
- Michael Chen
- Sarah Johnson
- David Rodriguez
- Jennifer Lee
- James Wilson
- Maria Garcia
- Robert Brown
- Lisa Anderson
- Chris Martinez

### Articles (50+ total across all categories)

#### Business (5 articles)
- Tech Giants Announce Record Quarterly Earnings
- Global Markets Reach New Heights
- Startups Secure Record $50 Billion in VC Funding
- E-Commerce Giants Expand Drone Delivery
- Corporate Sustainability Programs Show Impact

#### Finance (8 articles)
- Cryptocurrency Markets Hit New Milestone
- Global Banking System Embraces Blockchain
- Stock Market Rally Continues
- Investment Opportunities in Emerging Markets
- ESG Investing Becomes Mainstream
- Central Banks Coordinate Economic Stability
- Personal Finance Apps Transform Money Management
- Real Estate Investment Trusts Post Record Returns

#### Politics (6 articles)
- Historic Climate Accord Signed by 150 Nations
- Senate Passes Landmark Education Reform Bill
- International Trade Agreement Opens New Markets
- Supreme Court Ruling Shapes Digital Privacy Rights
- Congressional Committee Approves Healthcare Expansion
- Bipartisan Infrastructure Bill Promises $2T Investment

#### Health (7 articles)
- Revolutionary Alzheimer's Treatment Shows Results
- Breakthrough Gene Therapy for Cancer
- AI-Powered Diagnostics Reduce Cancer Detection Time
- New Mental Health Initiative Expands Access
- Telemedicine Adoption Reaches Record High
- Gut Health Linked to Improved Cognitive Function
- Wearable Technology Enables Early Heart Disease Detection

#### Fashion (5 articles)
- Sustainable Fashion Revolution
- Paris Fashion Week 2026 Preview
- Tech-Infused Clothing
- Luxury Brands Embrace Circular Economy
- Designer Spotlight: Rising Stars

#### Real Estate (3 articles)
- Smart Cities Initiative Transforms Urban Markets
- Mixed-Use Developments Lead Urban Revolution
- Green Building Standards Become Mandatory

#### Travel (3 articles)
- Space Tourism Becomes Accessible
- Sustainable Tourism Initiatives Transform Destinations
- Hidden Gems: Undiscovered Travel Destinations

#### Entertainment (3 articles)
- Blockbuster Season: Most Anticipated Films of 2026
- Music Industry Evolution: Virtual Concerts
- Award-Winning Director Announces Epic Series

#### Sports (3 articles)
- Championship Finals: Underdog Team Stuns World
- Rising Stars: Young Athletes Breaking Records
- Olympic Committee Approves New Sports Categories

#### Tech (3 articles)
- Quantum Computing Milestone
- Next-Gen Smartphones Feature Advanced AI
- Cybersecurity Breakthrough

#### Podcast-Related (3 articles)
- Tech Frontiers Podcast
- Global Perspectives Podcast
- Sustainable Future Podcast

## Verification

After importing, verify the data was imported successfully:

```sql
-- Check authors
SELECT COUNT(*) FROM user WHERE user_type = 'author';
-- Should return 10

-- Check articles
SELECT COUNT(*) FROM articles WHERE status = 'published';
-- Should return 50+

-- Check articles by category
SELECT category, COUNT(*) as count
FROM articles
WHERE status = 'published'
GROUP BY category
ORDER BY count DESC;
```

## Troubleshooting

### Error: Table doesn't exist
Run the migrations first:
```bash
npm run db:push
# or
npx drizzle-kit push:mysql
```

### Error: Duplicate entry
The database already has data with the same IDs. You can either:
- Clear the existing data: `TRUNCATE TABLE articles; TRUNCATE TABLE user;`
- Modify the IDs in `seed-data.sql`

### Error: Foreign key constraint fails
Make sure the `user` table exists and the inserts run in order (users first, then articles).

## Next Steps

After importing the data:

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Visit the homepage:**
   ```
   http://localhost:3000
   ```

3. **You should see:**
   - Dynamic articles loaded from the database
   - All categories populated with real data
   - Author information displayed
   - Cover images from the database or fallback images

## Notes

- All dates are set to November 2025 for consistency
- Cover images use Unsplash URLs
- Articles are marked as 'published' and will appear on the homepage immediately
- The homepage now fetches data from the database on each page load (Server-Side Rendering)

## Customization

To add your own data:
1. Follow the same INSERT format in `seed-data.sql`
2. Ensure `status = 'published'` for articles to appear on the homepage
3. Use valid category names (Business, Finance, Politics, Health, Fashion, Real Estate, Travel, Entertainment, Sports, Tech)
4. Include proper cover images URLs

---

**Happy coding! 🚀**
