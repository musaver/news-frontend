import React from 'react';
import {
  Header,
  Footer,
} from '@/components/homepage';
import Image from 'next/image';
import { imgContainer } from "@/imports/svg-4a9ab";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { user, articles, categories } from '@/lib/schema';
import { eq, desc, and } from 'drizzle-orm';

interface Author {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

interface Article {
  id: string;
  title: string;
  category: string;
  content: string;
  excerpt: string | null;
  tags: string[] | null;
  coverImage: string | null;
  publishedAt: Date | null;
  createdAt: Date;
  author: {
    id: string;
    name: string | null;
    image: string | null;
  } | null;
}

interface AuthorData {
  author: Author;
  articles: Article[];
}

async function getAuthorData(id: string): Promise<AuthorData | null> {
  try {
    // Fetch the author
    const [author] = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      })
      .from(user)
      .where(eq(user.id, id));

    if (!author) {
      return null;
    }

    // Fetch all published articles by this author
    const authorArticles = await db
      .select({
        id: articles.id,
        title: articles.title,
        category: categories.name,
        content: articles.content,
        excerpt: articles.excerpt,
        tags: articles.tags,
        coverImage: articles.coverImage,
        publishedAt: articles.publishedAt,
        createdAt: articles.createdAt,
        author: {
          id: user.id,
          name: user.name,
          image: user.image,
        },
      })
      .from(articles)
      .innerJoin(user, eq(articles.authorId, user.id))
      .innerJoin(categories, eq(articles.categoryId, categories.id))
      .where(and(
        eq(articles.authorId, id),
        eq(articles.status, "published")
      ))
      .orderBy(desc(articles.publishedAt));

    return {
      author,
      articles: authorArticles,
    };
  } catch (error) {
    console.error('Error fetching author data:', error);
    return null;
  }
}

async function getAllAuthors(): Promise<Author[]> {
  try {
    // Fetch all users who have at least one published article
    const authors = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      })
      .from(user)
      .innerJoin(articles, eq(user.id, articles.authorId))
      .where(eq(articles.status, "published"))
      .groupBy(user.id);

    return authors;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

function formatDate(date: Date | null): string {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default async function AuthorDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getAuthorData(id);

  if (!data || !data.author) {
    notFound();
  }

  const { author, articles } = data;
  const allAuthors = await getAllAuthors();

  // Filter out current author from the list
  const otherAuthors = allAuthors.filter(a => a.id !== author.id).slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>

        <div className="bg-[#f7fafc] relative w-full h-[75px]" data-name="Category - Desktop">
          <div className="absolute h-[75px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1320px] px-6" data-name="CMS">
            {/* Left Text with Bullet */}
            <div className="absolute h-[22px] left-[24px] overflow-clip top-1/2 translate-y-[-50%]" data-name="Left Text">
              <div className="absolute bg-[#cc0000] h-[15px] left-0 top-1/2 translate-y-[-50%] w-[4px]" data-name="bullet" />
              <div className="absolute flex flex-col font-normal h-[22px] justify-center leading-[0] left-[14px] not-italic text-[#020a1c] text-[14.25px] top-1/2 translate-y-[-50%]">
                <p className="leading-[22px]">Author</p>
              </div>
            </div>

            {/* Right Watermark Text with Gradient Mask - Desktop Only */}
            <div className="hidden md:block absolute bottom-[-10px] h-[94.8px] right-[24px] w-[415.53px]" data-name="Mask Group">
              <div
                className="absolute flex flex-col font-['Inter:Black',_sans-serif] font-black h-[94.8px] justify-center leading-[0] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[415.53px_94.8px] not-italic text-[68.18px] top-1/2 translate-y-[-50%] w-full"
                style={{ maskImage: `url('${imgContainer}')` }}
              >
                <p className="leading-[94.8px]" style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: '0.7px rgb(101 114 133)' }}>
                  {author.name || 'Author'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block">
          <div className="max-w-[1320px] mx-auto px-6 py-12">
            <div className="grid grid-cols-[380px_1fr] gap-12">
              {/* Left Column - Author Info */}
              <div className="space-y-8">
                {/* Author Photo & Name */}
                <div className="flex flex-col gap-4 items-start">
                  <div className="overflow-clip relative rounded-full shrink-0 w-[150px] h-[150px]">
                    {author.image ? (
                      <img
                        alt={author.name || 'Author'}
                        className="absolute h-full w-full left-0 top-0 object-cover"
                        src={author.image}
                      />
                    ) : (
                      <div className="absolute h-full w-full left-0 top-0 bg-slate-200 flex items-center justify-center text-slate-600 text-4xl font-bold">
                        {author.name?.charAt(0) || 'A'}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-normal text-[20.281px] leading-[24px] text-[#020a1c]">
                      {author.name || 'Author'}
                    </h1>
                    <p className="font-normal text-[12.906px] leading-[18.2px] text-[#657285]">
                      Author
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Contact */}
                <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.125px] text-nowrap">
                          <p className="leading-[22px] whitespace-pre">Contact</p>
                        </div>
                      </div>
                    </div>
                    {author.email && (
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16.313px] text-nowrap">
                              <a href={`mailto:${author.email}`} className="leading-[22.6px] whitespace-pre hover:text-[#cc0000] transition-colors">
                                {author.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Other Authors */}
                {otherAuthors.length > 0 && (
                  <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
                    <div className="box-border content-stretch flex items-center overflow-clip pl-0 py-0 relative shrink-0">
                      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                        <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]"></div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.75px] text-nowrap">
                              <p className="leading-[22px] whitespace-pre">Other Authors</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center overflow-x-auto pb-2">
                      {otherAuthors.map((otherAuthor) => (
                        <Link
                          key={otherAuthor.id}
                          href={`/authors/${otherAuthor.id}`}
                          className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity"
                        >
                          <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                            {otherAuthor.image ? (
                              <img
                                alt={otherAuthor.name || 'Author'}
                                className="absolute h-full w-full object-cover"
                                src={otherAuthor.image}
                              />
                            ) : (
                              <div className="absolute h-full w-full flex items-center justify-center text-slate-600 font-bold">
                                {otherAuthor.name?.charAt(0) || 'A'}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Latest Articles */}
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-[15px] bg-[#cc0000]"></div>
                  <h2 className="font-normal text-[14.5px] leading-[22px] text-[#020a1c]">
                    Latest Articles from {author.name || 'this Author'}
                  </h2>
                </div>

                {/* Articles Grid */}
                {articles.length > 0 ? (
                  <div className="grid grid-cols-3 gap-6">
                    {articles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/news-details/${article.id}`}
                        className="flex flex-col gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        {/* Article Image */}
                        <div className="h-[150px] overflow-clip rounded-lg relative w-full bg-slate-200">
                          {article.coverImage ? (
                            <img
                              alt={article.title}
                              className="absolute h-full w-full object-cover"
                              src={article.coverImage}
                            />
                          ) : (
                            <div className="absolute h-full w-full flex items-center justify-center text-slate-400">
                              No image
                            </div>
                          )}
                        </div>
                        {/* Article Meta */}
                        <div className="flex items-center gap-1.5">
                          <span className="font-normal text-[10.875px] leading-[15.6px] text-[#657285]">
                            {article.category}
                          </span>
                          <div className="bg-slate-300 rounded-full w-[3px] h-[3px]"></div>
                          <span className="font-normal text-[11.25px] leading-[15.6px] text-[#657285]">
                            {formatDate(article.publishedAt)}
                          </span>
                        </div>
                        {/* Article Title */}
                        <h3 className="font-normal text-[14.75px] leading-[19.2px] text-[#020a1c] line-clamp-3">
                          {article.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#657285] text-center py-12">No articles published yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden">
          <div className="max-w-[768px] mx-auto px-4 py-8">
            <div className="space-y-8">
              {/* Author Info Section */}
              <div className="space-y-6">
                {/* Author Photo & Name */}
                <div className="flex flex-col gap-4 items-start">
                  <div className="overflow-clip relative rounded-full shrink-0 w-[120px] h-[120px]">
                    {author.image ? (
                      <img
                        alt={author.name || 'Author'}
                        className="absolute h-full w-full left-0 top-0 object-cover"
                        src={author.image}
                      />
                    ) : (
                      <div className="absolute h-full w-full left-0 top-0 bg-slate-200 flex items-center justify-center text-slate-600 text-3xl font-bold">
                        {author.name?.charAt(0) || 'A'}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-normal text-[20.281px] leading-[24px] text-[#020a1c]">
                      {author.name || 'Author'}
                    </h1>
                    <p className="font-normal text-[12.906px] leading-[18.2px] text-[#657285]">
                      Author
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Contact */}
                <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[15.125px] text-nowrap">
                          <p className="leading-[22px] whitespace-pre">Contact</p>
                        </div>
                      </div>
                    </div>
                    {author.email && (
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[16.313px] text-nowrap">
                              <a href={`mailto:${author.email}`} className="leading-[22.6px] whitespace-pre hover:text-[#cc0000] transition-colors">
                                {author.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(203,213,225,0.35)] w-full"></div>

                {/* Other Authors */}
                {otherAuthors.length > 0 && (
                  <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
                    <div className="box-border content-stretch flex items-center overflow-clip pl-0 py-0 relative shrink-0">
                      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
                        <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]"></div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.75px] text-nowrap">
                              <p className="leading-[22px] whitespace-pre">Other Authors</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center overflow-x-auto pb-2">
                      {otherAuthors.map((otherAuthor) => (
                        <Link
                          key={otherAuthor.id}
                          href={`/authors/${otherAuthor.id}`}
                          className="overflow-clip relative rounded-[99px] shrink-0 size-[50px] cursor-pointer hover:opacity-80 transition-opacity"
                        >
                          <div className="absolute inset-0 rounded-[99px] bg-slate-200">
                            {otherAuthor.image ? (
                              <img
                                alt={otherAuthor.name || 'Author'}
                                className="absolute h-full w-full object-cover"
                                src={otherAuthor.image}
                              />
                            ) : (
                              <div className="absolute h-full w-full flex items-center justify-center text-slate-600 font-bold">
                                {otherAuthor.name?.charAt(0) || 'A'}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Latest Articles Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-[15px] bg-[#cc0000]"></div>
                  <h2 className="font-normal text-[14.5px] leading-[22px] text-[#020a1c]">
                    Latest Articles from {author.name || 'this Author'}
                  </h2>
                </div>

                {/* Articles Grid */}
                {articles.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {articles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/news-details/${article.id}`}
                        className="flex flex-col gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        {/* Article Image */}
                        <div className="h-[120px] overflow-clip rounded-lg relative w-full bg-slate-200">
                          {article.coverImage ? (
                            <img
                              alt={article.title}
                              className="absolute h-full w-full object-cover"
                              src={article.coverImage}
                            />
                          ) : (
                            <div className="absolute h-full w-full flex items-center justify-center text-slate-400 text-xs">
                              No image
                            </div>
                          )}
                        </div>
                        {/* Article Meta */}
                        <div className="flex items-center gap-1.5">
                          <span className="font-normal text-[10.875px] leading-[15.6px] text-[#657285]">
                            {article.category}
                          </span>
                          <div className="bg-slate-300 rounded-full w-[3px] h-[3px]"></div>
                          <span className="font-normal text-[11.25px] leading-[15.6px] text-[#657285]">
                            {formatDate(article.publishedAt)}
                          </span>
                        </div>
                        {/* Article Title */}
                        <h3 className="font-normal text-[13px] leading-[18px] text-[#020a1c] line-clamp-3">
                          {article.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#657285] text-center py-12">No articles published yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
