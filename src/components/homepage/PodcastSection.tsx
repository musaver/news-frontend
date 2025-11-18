import React from 'react';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { Article } from '@/types/article';

interface PodcastSectionProps {
  mockImages: {
    podcast: string;
    podcastThumb1: string;
    podcastThumb2: string;
    podcastThumb3: string;
  };
  articles: Article[];
}

const PodcastSection = ({ mockImages, articles }: PodcastSectionProps) => {
  const podcastArticles = articles.slice(0, 3);
  const fallbackThumbs = [mockImages.podcastThumb1, mockImages.podcastThumb2, mockImages.podcastThumb3];

  return (
    <section className="bg-[#f7fafc] py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 relative">
          <Link href={`/news-details/${podcastArticles[0]?.id}`} className="rounded-lg overflow-hidden block">
            <img
              src={podcastArticles[0]?.coverImage || mockImages.podcast}
              alt="Podcast"
              className="w-full h-full object-cover"
            />
          </Link>

          <div className="bg-white rounded-lg border border-slate-300/30 p-6 space-y-6">
            <div>
              <SectionHeader title="Podcast" showViewAll={true} />
              <p className="text-slate-700 mt-6 leading-relaxed">
                Discover our curated collection of top podcasts covering technology, culture, environment, and more. Stay informed and entertained with expert insights and engaging conversations.
              </p>
            </div>

            <div className="space-y-6">
              {podcastArticles.map((podcast, index) => (
                <div key={podcast.id || index} className="flex gap-4">
                  <Link href={`/news-details/${podcast.id}`} className="rounded-lg overflow-hidden w-[140px] h-[110px] flex-shrink-0">
                    <img
                      src={podcast.coverImage || fallbackThumbs[index % fallbackThumbs.length]}
                      alt={podcast.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 space-y-1">
                    <Link href={`/news-details/${podcast.id}`}>
                      <h4 className="text-base text-[#cc0000] font-semibold hover:text-[#cc0000] transition-colors">{podcast.title}</h4>
                    </Link>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {podcast.excerpt || podcast.content.substring(0, 150) + '...'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
