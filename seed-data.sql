-- ====================================
-- SEED DATA FOR NEWS WEBSITE
-- ====================================
-- This file contains dummy data for all categories
-- Categories: Business, Finance, Politics, Health, Fashion, Real Estate,
--            Travel, Entertainment, Sports, Tech, Podcasts
-- ====================================

-- First, create dummy authors for different categories
-- ====================================
-- AUTHORS (Users with userType='author')
-- ====================================

INSERT INTO user (id, name, email, emailVerified, image, user_type) VALUES
('author_1', 'Emma Thompson', 'emma.thompson@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', 'author'),
('author_2', 'Michael Chen', 'michael.chen@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', 'author'),
('author_3', 'Sarah Johnson', 'sarah.johnson@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', 'author'),
('author_4', 'David Rodriguez', 'david.rodriguez@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', 'author'),
('author_5', 'Jennifer Lee', 'jennifer.lee@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop', 'author'),
('author_6', 'James Wilson', 'james.wilson@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop', 'author'),
('author_7', 'Maria Garcia', 'maria.garcia@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop', 'author'),
('author_8', 'Robert Brown', 'robert.brown@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop', 'author'),
('author_9', 'Lisa Anderson', 'lisa.anderson@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop', 'author'),
('author_10', 'Chris Martinez', 'chris.martinez@newsflash.com', NOW(), 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop', 'author');

-- ====================================
-- BUSINESS ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('bus_1', 'author_1', 'Tech Giants Announce Record Quarterly Earnings as AI Integration Drives Global Market Surge', 'Business',
'Major technology companies report unprecedented growth in Q4 2025, with artificial intelligence applications transforming industries from healthcare to manufacturing. Market analysts predict continued expansion as companies invest heavily in AI infrastructure and talent acquisition.',
'Major tech companies report unprecedented Q4 2025 growth driven by AI applications across industries.',
'["technology", "AI", "earnings", "market"]',
'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
'published', '2025-11-15 10:00:00'),

('bus_2', 'author_2', 'Global Markets Reach New Heights as Innovation Drives Economic Expansion', 'Business',
'Stock markets worldwide celebrate record-breaking performance as technological innovation and sustainable business practices fuel investor confidence. Emerging markets show particularly strong growth potential.',
'Global stock markets hit record highs driven by innovation and sustainable practices.',
'["markets", "innovation", "economy", "investing"]',
'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=507&h=451&fit=crop',
'published', '2025-11-15 09:00:00'),

('bus_3', 'author_3', 'Startups Secure Record $50 Billion in Venture Capital Funding This Quarter', 'Business',
'Venture capital investments reach all-time highs as investors bet big on innovative startups across sectors including clean energy, biotech, and artificial intelligence. The funding surge signals strong confidence in next-generation technologies.',
'VCs invest record $50B in startups focusing on clean energy, biotech, and AI.',
'["startups", "venture capital", "funding", "innovation"]',
'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop',
'published', '2025-11-14 14:00:00'),

('bus_4', 'author_4', 'E-Commerce Giants Expand Drone Delivery Networks to 100 Major Cities', 'Business',
'Leading e-commerce companies announce massive expansion of autonomous drone delivery services, promising same-day delivery to customers in 100 metropolitan areas worldwide by 2026.',
'E-commerce leaders expand drone delivery to 100 cities with same-day service.',
'["ecommerce", "drones", "delivery", "technology"]',
'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
'published', '2025-11-13 11:00:00'),

('bus_5', 'author_5', 'Corporate Sustainability Programs Show Measurable Impact on Bottom Line', 'Business',
'New research reveals that companies with robust environmental and social governance programs outperform competitors by an average of 15%, demonstrating that sustainability drives profitability.',
'ESG programs boost corporate profits by 15% on average, new research shows.',
'["sustainability", "ESG", "corporate", "profits"]',
'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
'published', '2025-11-12 10:00:00');

-- ====================================
-- FINANCE ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('fin_1', 'author_6', 'Cryptocurrency Markets Hit New Milestone with Institutional Adoption', 'Finance',
'Major financial institutions announce comprehensive cryptocurrency services as digital assets gain mainstream acceptance. Regulatory clarity and institutional infrastructure drive record trading volumes.',
'Institutional adoption drives crypto markets to new heights with enhanced services.',
'["cryptocurrency", "blockchain", "institutions", "finance"]',
'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=306&h=250&fit=crop',
'published', '2025-11-15 08:00:00'),

('fin_2', 'author_7', 'Global Banking System Embraces Blockchain for Faster Transactions', 'Finance',
'International banks implement blockchain technology for cross-border payments, reducing transaction times from days to minutes while cutting costs by up to 70%.',
'Banks adopt blockchain, slashing cross-border payment times and costs dramatically.',
'["blockchain", "banking", "payments", "technology"]',
'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop',
'published', '2025-11-14 09:00:00'),

('fin_3', 'author_8', 'Stock Market Rally Continues as Tech Sector Leads Growth', 'Finance',
'Technology stocks drive market indices to record levels as investors bet on AI and cloud computing innovation. Analysts predict continued strength in tech-heavy portfolios.',
'Tech stocks propel markets higher with AI and cloud computing leading gains.',
'["stocks", "tech sector", "markets", "investing"]',
'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop',
'published', '2025-11-13 10:00:00'),

('fin_4', 'author_1', 'Investment Opportunities in Emerging Markets Show Strong Potential', 'Finance',
'Financial experts identify high-growth opportunities in developing economies as infrastructure improvements and digital transformation create new investment avenues.',
'Emerging markets offer strong returns as digital transformation accelerates.',
'["emerging markets", "investing", "growth", "opportunities"]',
'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=600&h=400&fit=crop',
'published', '2025-11-12 11:00:00'),

('fin_5', 'author_2', 'ESG Investing Becomes Mainstream Among Retail Investors', 'Finance',
'Environmental, social, and governance factors now influence 65% of retail investment decisions as younger investors prioritize sustainable and ethical companies.',
'ESG factors now drive 65% of retail investment choices, study reveals.',
'["ESG", "sustainable investing", "retail", "trends"]',
'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
'published', '2025-11-11 09:00:00'),

('fin_6', 'author_3', 'Central Banks Coordinate Global Economic Stability Initiative', 'Finance',
'Major central banks announce joint measures to ensure economic stability and prevent financial crises through enhanced cooperation and data sharing.',
'Central banks unite for economic stability through coordinated policies.',
'["central banks", "economy", "policy", "stability"]',
'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop',
'published', '2025-11-10 10:00:00'),

('fin_7', 'author_4', 'Personal Finance Apps Transform How Americans Manage Money', 'Finance',
'Mobile financial management tools see 300% growth as AI-powered budgeting and investment features help users optimize spending and savings automatically.',
'AI-powered finance apps grow 300% helping users optimize money management.',
'["fintech", "apps", "personal finance", "AI"]',
'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
'published', '2025-11-09 11:00:00'),

('fin_8', 'author_5', 'Real Estate Investment Trusts Post Record Quarterly Returns', 'Finance',
'REITs deliver exceptional performance as commercial and residential properties benefit from hybrid work trends and urban development projects.',
'REITs achieve record returns driven by hybrid work and urban development.',
'["REITs", "real estate", "investing", "returns"]',
'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
'published', '2025-11-08 09:00:00');

-- ====================================
-- POLITICS ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('pol_1', 'author_6', 'Historic Climate Accord Signed by 150 Nations at Global Summit in Geneva', 'Politics',
'World leaders unite in unprecedented climate agreement, committing to carbon neutrality by 2040 and establishing a $500 billion green infrastructure fund to support developing nations.',
'150 nations commit to carbon neutrality by 2040 with $500B green fund.',
'["climate", "environment", "global", "policy"]',
'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=531&h=428&fit=crop',
'published', '2025-11-15 07:00:00'),

('pol_2', 'author_7', 'Senate Passes Landmark Education Reform Bill with Bipartisan Support', 'Politics',
'Sweeping education legislation wins overwhelming bipartisan approval, including provisions for universal pre-K, teacher salary increases, and expanded STEM programs nationwide.',
'Bipartisan education reform includes universal pre-K and STEM expansion.',
'["education", "legislation", "bipartisan", "reform"]',
'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=125&h=100&fit=crop',
'published', '2025-11-15 06:00:00'),

('pol_3', 'author_8', 'International Trade Agreement Opens New Markets for US Exports', 'Politics',
'New multilateral trade pact eliminates tariffs on technology and agricultural products, projected to create 500,000 jobs and boost GDP by 2.3% over five years.',
'Trade agreement expected to create 500K jobs and boost GDP by 2.3%.',
'["trade", "economy", "exports", "international"]',
'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=125&h=100&fit=crop',
'published', '2025-11-14 08:00:00'),

('pol_4', 'author_9', 'Supreme Court Ruling Shapes Future of Digital Privacy Rights', 'Politics',
'Landmark decision establishes constitutional protections for digital data, requiring warrants for government access to personal information stored online.',
'Supreme Court ruling requires warrants for digital data access.',
'["privacy", "Supreme Court", "digital rights", "law"]',
'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=125&h=100&fit=crop',
'published', '2025-11-13 09:00:00'),

('pol_5', 'author_10', 'Congressional Committee Approves Major Healthcare Expansion Plan', 'Politics',
'Comprehensive healthcare legislation advances, expanding coverage to 15 million uninsured Americans while reducing prescription drug costs by an estimated 40%.',
'Healthcare expansion to cover 15M more Americans, cut drug costs 40%.',
'["healthcare", "legislation", "policy", "reform"]',
'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
'published', '2025-11-12 07:00:00'),

('pol_6', 'author_1', 'Bipartisan Infrastructure Bill Promises $2 Trillion Investment in Green Energy', 'Politics',
'Congress approves massive infrastructure package focusing on renewable energy, electric vehicle charging networks, and modernization of national power grid.',
'$2T infrastructure bill targets renewable energy and EV charging networks.',
'["infrastructure", "green energy", "bipartisan", "investment"]',
'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=600&h=400&fit=crop',
'published', '2025-11-11 08:00:00');

-- ====================================
-- HEALTH ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('hea_1', 'author_2', 'Revolutionary Alzheimer\'s Treatment Shows Remarkable Results in Clinical Trials', 'Health',
'New drug therapy demonstrates 85% effectiveness in slowing cognitive decline in early-stage Alzheimer\'s patients, offering hope to millions of families worldwide.',
'New Alzheimer\'s drug shows 85% effectiveness in clinical trials.',
'["Alzheimer\'s", "medical research", "treatment", "clinical trials"]',
'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=864&h=628&fit=crop',
'published', '2025-11-14 10:00:00'),

('hea_2', 'author_3', 'Breakthrough Gene Therapy Shows 95% Success Rate in Cancer Treatment Trials', 'Health',
'Advanced gene editing techniques achieve unprecedented success in treating previously incurable forms of cancer, with minimal side effects reported in Phase III trials.',
'Gene therapy achieves 95% success rate in cancer trials with few side effects.',
'["cancer", "gene therapy", "medical breakthrough", "research"]',
'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
'published', '2025-11-14 09:00:00'),

('hea_3', 'author_4', 'AI-Powered Diagnostics Reduce Cancer Detection Time by 80 Percent', 'Health',
'Artificial intelligence systems now identify early-stage cancers with 99% accuracy, enabling faster treatment and significantly improving survival rates across multiple cancer types.',
'AI diagnostics cut cancer detection time by 80%, improve survival rates.',
'["AI", "cancer detection", "diagnostics", "technology"]',
'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
'published', '2025-11-13 11:00:00'),

('hea_4', 'author_5', 'New Mental Health Initiative Expands Access to Therapy Nationwide', 'Health',
'Federal program launches providing free teletherapy sessions to underserved communities, addressing mental health crisis with $10 billion in funding over five years.',
'$10B mental health program offers free teletherapy to underserved areas.',
'["mental health", "therapy", "healthcare access", "teletherapy"]',
'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
'published', '2025-11-12 10:00:00'),

('hea_5', 'author_6', 'Telemedicine Adoption Reaches Record High Among Rural Communities', 'Health',
'Virtual healthcare services now serve 75% of rural patients, improving access to specialists and reducing travel burdens for those in remote areas.',
'Telemedicine reaches 75% of rural patients, improving specialist access.',
'["telemedicine", "rural health", "healthcare access", "technology"]',
'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
'published', '2025-11-11 11:00:00'),

('hea_6', 'author_7', 'Groundbreaking Study Links Gut Health to Improved Cognitive Function', 'Health',
'Research reveals strong connection between microbiome diversity and brain health, suggesting dietary changes could prevent cognitive decline and improve memory.',
'Gut health linked to brain function; diet changes may prevent decline.',
'["gut health", "brain health", "research", "nutrition"]',
'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop',
'published', '2025-11-10 09:00:00'),

('hea_7', 'author_8', 'Wearable Technology Enables Early Detection of Heart Disease', 'Health',
'Smart devices now monitor cardiac rhythms continuously, alerting users and physicians to irregularities weeks before traditional symptoms appear, saving thousands of lives.',
'Wearables detect heart problems weeks early, saving thousands of lives.',
'["wearables", "heart health", "technology", "prevention"]',
'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
'published', '2025-11-09 10:00:00');

-- ====================================
-- FASHION ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('fas_1', 'author_9', 'Sustainable Fashion Revolution: Major Brands Commit to Zero-Waste Production by 2026', 'Fashion',
'Leading fashion houses pledge to eliminate waste through circular design principles, recycled materials, and innovative manufacturing processes that transform the industry.',
'Major fashion brands commit to zero-waste production by 2026.',
'["sustainable fashion", "zero waste", "eco-friendly", "circular economy"]',
'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop',
'published', '2025-11-13 12:00:00'),

('fas_2', 'author_10', 'Paris Fashion Week 2026: Preview of Revolutionary Designs and Trends', 'Fashion',
'Next season\'s collections showcase bold innovations in sustainable materials, digital fashion, and inclusive sizing that redefine luxury and accessibility.',
'Paris Fashion Week 2026 previews sustainable luxury and inclusive designs.',
'["Paris Fashion Week", "trends", "luxury", "innovation"]',
'https://images.unsplash.com/photo-1558769132-cb1aea9c907d?w=600&h=400&fit=crop',
'published', '2025-11-13 11:00:00'),

('fas_3', 'author_1', 'Tech-Infused Clothing: Smart Fabrics Transform the Fashion Industry', 'Fashion',
'Temperature-regulating textiles, self-cleaning materials, and health-monitoring garments represent the next frontier in fashion technology, blending style with functionality.',
'Smart fabrics bring temperature regulation and health monitoring to fashion.',
'["smart fabrics", "technology", "innovation", "wearables"]',
'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop',
'published', '2025-11-12 12:00:00'),

('fas_4', 'author_2', 'Luxury Brands Embrace Circular Economy with Resale Platforms', 'Fashion',
'High-end fashion houses launch authenticated resale programs, making luxury more sustainable and accessible while maintaining brand value and exclusivity.',
'Luxury brands launch resale platforms for sustainable, accessible fashion.',
'["luxury fashion", "resale", "circular economy", "sustainability"]',
'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
'published', '2025-11-11 12:00:00'),

('fas_5', 'author_3', 'Designer Spotlight: Rising Stars Redefining Modern Elegance', 'Fashion',
'Emerging designers bring fresh perspectives to fashion, combining traditional craftsmanship with contemporary aesthetics and sustainable practices.',
'New designers blend craftsmanship with sustainability and modern style.',
'["designers", "emerging talent", "elegance", "sustainability"]',
'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
'published', '2025-11-10 11:00:00');

-- ====================================
-- REAL ESTATE ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('rea_1', 'author_4', 'Smart Cities Initiative Transforms Urban Real Estate Markets Across America', 'Real Estate',
'Integrated technology platforms optimize energy use, transportation, and public services in 50 major cities, driving property values up 25% in smart districts.',
'Smart city tech drives 25% property value increase in urban areas.',
'["smart cities", "urban development", "real estate", "technology"]',
'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
'published', '2025-11-12 13:00:00'),

('rea_2', 'author_5', 'Mixed-Use Developments Lead Urban Living Revolution', 'Real Estate',
'New residential projects integrate live-work-play spaces with sustainable features, responding to changing lifestyle preferences in post-pandemic era.',
'Mixed-use developments reshape cities with integrated living spaces.',
'["mixed-use", "urban living", "development", "lifestyle"]',
'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
'published', '2025-11-10 12:00:00'),

('rea_3', 'author_6', 'Green Building Standards Become Mandatory in Major Metropolitan Areas', 'Real Estate',
'Cities adopt strict environmental requirements for new construction, including solar panels, rainwater harvesting, and carbon-neutral operations.',
'Major cities mandate green building standards for all new construction.',
'["green building", "sustainability", "regulations", "environment"]',
'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
'published', '2025-11-09 13:00:00');

-- ====================================
-- TRAVEL ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('tra_1', 'author_7', 'Space Tourism Becomes Accessible: First Commercial Flights to Launch Next Quarter', 'Travel',
'Space travel companies announce affordable orbital flight packages starting at $50,000, making space tourism accessible to thousands of adventure seekers worldwide.',
'Space tourism launches with $50K flights making orbital travel accessible.',
'["space tourism", "travel", "innovation", "adventure"]',
'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=281&h=200&fit=crop',
'published', '2025-11-11 14:00:00'),

('tra_2', 'author_8', 'Sustainable Tourism Initiatives Transform Popular Destinations Worldwide', 'Travel',
'Tourist hotspots implement eco-friendly practices, limiting visitor numbers and investing in conservation to protect natural and cultural heritage sites.',
'Destinations adopt sustainable tourism to protect heritage sites.',
'["sustainable tourism", "conservation", "eco-friendly", "destinations"]',
'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
'published', '2025-11-11 13:00:00'),

('tra_3', 'author_9', 'Hidden Gems: Undiscovered Travel Destinations for Adventurous Explorers', 'Travel',
'Travel experts reveal lesser-known destinations offering authentic experiences, stunning landscapes, and rich cultural encounters away from tourist crowds.',
'Discover hidden travel gems offering authentic, crowd-free experiences.',
'["travel", "destinations", "adventure", "exploration"]',
'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop',
'published', '2025-11-10 14:00:00');

-- ====================================
-- ENTERTAINMENT ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('ent_1', 'author_10', 'Blockbuster Season: Most Anticipated Films of 2026 Revealed', 'Entertainment',
'Studios announce spectacular lineup featuring franchise sequels, original stories, and groundbreaking visual effects that promise to redefine cinema.',
'2026 film slate promises franchise hits and innovative storytelling.',
'["movies", "cinema", "entertainment", "blockbusters"]',
'https://images.unsplash.com/photo-1489599505865-b0c71bb7e34a?w=281&h=200&fit=crop',
'published', '2025-11-13 15:00:00'),

('ent_2', 'author_1', 'Music Industry Evolution: Virtual Concerts Attract Millions Globally', 'Entertainment',
'Immersive virtual reality concerts generate $5 billion in revenue as artists reach global audiences through cutting-edge technology and interactive experiences.',
'VR concerts generate $5B as artists reach millions through technology.',
'["music", "virtual concerts", "VR", "entertainment"]',
'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop',
'published', '2025-11-12 15:00:00'),

('ent_3', 'author_2', 'Award-Winning Director Announces Epic Historical Drama Series for 2026', 'Entertainment',
'Acclaimed filmmaker partners with streaming service for ambitious 10-episode series featuring stellar cast and unprecedented production budget.',
'Award-winning director creates epic historical drama for streaming.',
'["TV series", "drama", "streaming", "entertainment"]',
'https://images.unsplash.com/photo-1585951237313-1f17f2b85800?w=600&h=400&fit=crop',
'published', '2025-11-13 14:00:00');

-- ====================================
-- SPORTS ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('spo_1', 'author_3', 'Championship Finals: Underdog Team Stuns Sports World with Victory', 'Sports',
'Against all odds, underdog franchise claims championship title in thrilling finale, inspiring fans and proving that determination overcomes expectations.',
'Underdog team defies odds to claim championship in thrilling victory.',
'["sports", "championship", "victory", "inspiration"]',
'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=281&h=200&fit=crop',
'published', '2025-11-12 16:00:00'),

('spo_2', 'author_4', 'Rising Stars: Young Athletes Breaking Records in Major Leagues', 'Sports',
'New generation of athletes rewrites record books across multiple sports, showcasing exceptional talent and redefining what\'s possible in professional competition.',
'Young athletes shatter records, redefining professional sports excellence.',
'["sports", "athletes", "records", "young talent"]',
'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop',
'published', '2025-11-11 16:00:00'),

('spo_3', 'author_5', 'Olympic Committee Approves New Sports Categories for 2028 Games', 'Sports',
'International Olympic Committee adds esports, parkour, and flag football to official competition lineup, reflecting evolving athletic landscape.',
'Olympics add esports, parkour, and flag football for 2028 Games.',
'["Olympics", "sports", "esports", "innovation"]',
'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600&h=400&fit=crop',
'published', '2025-11-12 15:00:00');

-- ====================================
-- TECH ARTICLES
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('tec_1', 'author_6', 'Quantum Computing Milestone: First Commercial Quantum Computer Goes Live', 'Tech',
'Technology company launches first commercially available quantum computer, capable of solving complex problems millions of times faster than traditional systems.',
'First commercial quantum computer launches, revolutionizing computing power.',
'["quantum computing", "technology", "innovation", "computing"]',
'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=281&h=200&fit=crop',
'published', '2025-11-14 17:00:00'),

('tec_2', 'author_7', 'Next-Gen Smartphones Feature Advanced AI and Extended Battery Life', 'Tech',
'New smartphone models integrate powerful AI processors and revolutionary battery technology offering 5-day usage on single charge.',
'Next-gen smartphones offer advanced AI and 5-day battery life.',
'["smartphones", "AI", "battery", "mobile technology"]',
'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
'published', '2025-11-14 16:00:00'),

('tec_3', 'author_8', 'Cybersecurity Breakthrough: New Protocol Promises Unhackable Networks', 'Tech',
'Research team develops quantum-encrypted communication protocol that makes data interception virtually impossible, revolutionizing cybersecurity.',
'Quantum encryption creates unhackable networks, transforming security.',
'["cybersecurity", "encryption", "quantum", "security"]',
'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
'published', '2025-11-13 17:00:00');

-- ====================================
-- PODCAST-RELATED CONTENT (Categorized as Tech/Culture/Environment)
-- ====================================

INSERT INTO articles (id, author_id, title, category, content, excerpt, tags, cover_image, status, published_at) VALUES
('pod_1', 'author_9', 'Tech Frontiers Podcast: AI Experts Discuss Quantum Computing Future', 'Tech',
'Leading technology podcast explores cutting-edge innovations in AI and quantum computing with industry pioneers, offering insights into revolutionary technologies shaping our future.',
'Podcast explores AI and quantum computing with industry leaders.',
'["podcast", "AI", "quantum computing", "technology"]',
'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop',
'published', '2025-11-13 18:00:00'),

('pod_2', 'author_10', 'Global Perspectives: Understanding Cultural Trends Shaping Tomorrow', 'Entertainment',
'Popular podcast series delivers in-depth conversations about world events and cultural movements with thought leaders and changemakers driving global transformation.',
'Podcast features thought leaders discussing cultural trends and change.',
'["podcast", "culture", "global", "trends"]',
'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop',
'published', '2025-11-12 18:00:00'),

('pod_3', 'author_1', 'Sustainable Future Podcast: Climate Solutions from Leading Scientists', 'Health',
'Environmental podcast showcases climate solutions and conservation strategies from scientists, activists, and policymakers working toward sustainable future.',
'Podcast highlights climate solutions from scientists and activists.',
'["podcast", "environment", "climate", "sustainability"]',
'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
'published', '2025-11-11 18:00:00');

-- ====================================
-- END OF SEED DATA
-- ====================================
-- Total: 10 Authors, 50+ Articles across all categories
-- ====================================
