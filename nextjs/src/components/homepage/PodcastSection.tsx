import React from 'react';
import SectionHeader from './SectionHeader';

interface PodcastSectionProps {
  mockImages: {
    podcast: string;
    podcastThumb1: string;
    podcastThumb2: string;
    podcastThumb3: string;
  };
}

const PodcastSection = ({ mockImages }: PodcastSectionProps) => (
  <section className="bg-[#f7fafc] py-20">
    <div className="max-w-[1320px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={mockImages.podcast} 
            alt="Podcast"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="bg-white rounded-lg border border-slate-300/30 p-6 space-y-6">
          <div>
            <SectionHeader title="Podcast" showViewAll={true} />
            <p className="text-slate-700 mt-6 leading-relaxed">
              Dive into our Top 5 selection of the best podcasts, featuring everything from latest tech to trending tunes. Press the play button now!
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: 'Tech Tomorrow',
                description: 'Stay ahead of the curve with the latest advancements in technology. From AI breakthroughs to the futur… of space exploration, each episode',
                image: mockImages.podcastThumb1
              },
              {
                title: 'Culture Connect', 
                description: 'Explore the rich tapestry of global cultures in this podcast that takes you on a journey across continents.… Each episode features in-depth',
                image: mockImages.podcastThumb2
              },
              {
                title: 'The Green Voices',
                description: 'Tune into the most pressing environmental issues of our time. From climate change to conservati… efforts, this podcast features',
                image: mockImages.podcastThumb3
              }
            ].map((podcast, index) => (
              <div key={index} className="flex gap-4">
                <div className="rounded-lg overflow-hidden w-[140px] h-[110px] flex-shrink-0">
                  <img 
                    src={podcast.image} 
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-base text-[#cc0000] font-semibold">{podcast.title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{podcast.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PodcastSection;