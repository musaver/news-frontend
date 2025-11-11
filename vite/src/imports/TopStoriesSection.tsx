import imgWUSa65KrK8Qboe92Fcbj6LXpo2UJpg from "figma:asset/cdbd26f6642cc800f7472898d5c8e58df6e56ce8.png";
import imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg from "figma:asset/1fc3e7faf42b10c6656188c7582ed5c975bfd82a.png";
import imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg from "figma:asset/ca8b64e52ffb6913cef606d8d759851d3f013467.png";
import imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg from "figma:asset/0e98d91359ec311902b782518507b4a13078b21b.png";
import imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg from "figma:asset/bf6b1ab96f0245367060fe83ecd3c718cfb105e3.png";
import imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg from "figma:asset/db0f642032e2a177ddb992ac654d59cbf19a6c21.png";
import imgAXak9AHzVg115TjUny1Yw7Ll94Jpg from "figma:asset/3c4fc92d4071fe48921d42677b9966356af090d2.png";
import imgActiveIHOlyDcj050N5XfipAyaWShJaJpg from "figma:asset/e17bff5234d530dd27f71117df85dfb0484f4eaa.png";
import imgActiveEuJs2G8YndKpCni4BUar7BKw4VmJpg from "figma:asset/638304a2b73989458164a37571e5f91cd289fe4a.png";
import imgActiveItMcmByZhywRiIpiQ3C69Q4Uds0Jpg from "figma:asset/669c35452fe29ca46f8378365d0c0c5eb2633cb2.png";
import imgActiveMgReaTfYzZhzbGFuVBuPIvXbky8Jpg from "figma:asset/78ba1ffdcbed63ec631cab70a9a6760dcd976d55.png";
import img3Bg6DbLvYizb3S9S6IDTzSsw9RwJpg from "figma:asset/789172bc6e60d4b6bac3660d51e504660c09ff73.png";
import imgFmhL5GnqfOzUewc85GjDHnoP60Jpg from "figma:asset/2970085a861088514d795380ced45d85702a6093.png";
import imgUJ0THpy0DJez1IdltmncZ5ADcI8Jpg from "figma:asset/79a1ae39d580ff37c2106c0782a77005e8b4e1e8.png";
import imgJjMbB0HkdIEw2MZhy87YGq7JjAJpg from "figma:asset/583f4aea5011119298c95712ee6e5bb2df9b7ea4.png";
import imgPhotoYaKHjHargn0KKefshKMiii72AgJpg from "figma:asset/b6c50a5076c56cc4d08b98fba90fdd9a563df433.png";
import imgVbTbiPvjA8FnWKb3WM1CUh3XoJpg from "figma:asset/2e2e91b644507af6ff6d755e7aa800a82564efc4.png";
import img3R5TZJnhVxRAvD1UnuRfFTlfKcJpg from "figma:asset/b678e07febb2b84647a55736db554a4d4a2bc32d.png";
import imgUJjmygpXuubbfyWqUr9JvVv0LZaJpg from "figma:asset/a3976810f1e3b94e7cba1e19936a219c4f6e9a7b.png";
import { imgOverlay, imgOverlay1 } from "./svg-c2598";

interface TopStoriesSectionProps {
  onArticleClick?: (article: any) => void;
}

export function TopStoriesSection({ onArticleClick }: TopStoriesSectionProps) {
  const handleArticleClick = (article: any) => {
    if (onArticleClick) {
      onArticleClick(article);
    }
  };

  return (
    <div className="content-stretch flex flex-col items-center relative w-full">
      {/* Health News Section */}
      <div className="bg-[rgba(226,232,240,0.2)] relative shrink-0 w-full" data-name="Section - Health News">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[24px] py-[48px] relative w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-center max-w-[1320px] overflow-clip relative shrink-0 w-[1320px]" data-name="Container">
              {/* Section Header */}
              <div className="box-border content-stretch flex gap-[20px] items-center justify-center overflow-clip pl-[2px] pr-[4px] py-0 relative shrink-0" data-name="With Line">
                <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0" data-name="Section Title">
                  <div className="bg-[#cc0000] h-[15px] shrink-0 w-[4px]" data-name="content → bullet" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.625px] text-nowrap">
                        <p className="leading-[22px] whitespace-pre">Health</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col grow h-px items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
                  <div className="basis-0 bg-[rgba(203,213,225,0.35)] grow min-h-px min-w-px shrink-0 w-[1149.64px]" data-name="Dark" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="View All">
                  <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - View All">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020a1c] text-[14.5px] text-nowrap">
                          <p className="leading-[22px] whitespace-pre">view all</p>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 size-[10px]" data-name="Container" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
                {/* Large Photo */}
                <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Photo - Top Stories">
                  <div className="content-stretch flex flex-col h-[628px] items-start justify-center relative shrink-0 w-[864px]" data-name="Large Section Photo">
                    <div 
                      className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full cursor-pointer" 
                      data-name="Active"
                      onClick={() => handleArticleClick({
                        category: 'Health',
                        date: 'Sep 23, 2024',
                        title: 'The Future of Healthcare Workforce Shines Bright as Non-Clinical Roles Evolve',
                        excerpt: 'The healthcare sector is experiencing a significant shift as non-clinical roles gain importance.',
                        content: 'The healthcare sector is experiencing a significant shift as non-clinical roles gain importance in the rapidly evolving landscape. Driven by technological advancements and changing patient needs, positions in healthcare administration, technology, and support services are becoming increasingly vital to the industry\'s success.',
                        image: imgWUSa65KrK8Qboe92Fcbj6LXpo2UJpg
                      })}
                    >
                      <div className="absolute inset-0 rounded-[8px]" data-name="wUSa65krK8qboe92FCBJ6lXpo2U.jpg">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                          <img alt="" className="absolute h-full left-[-4.73%] max-w-none top-0 w-[109.46%]" src={imgWUSa65KrK8Qboe92Fcbj6LXpo2UJpg} />
                        </div>
                      </div>
                      <div className="absolute inset-0" data-name="Overlay:mask-group">
                        <div className="absolute bg-[#020a1c] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%] rounded-[12px]" data-name="Overlay" style={{ maskImage: `url('${imgOverlay}')` }} />
                      </div>
                      <div className="absolute bottom-[23.59px] content-stretch flex flex-col gap-[3.01px] items-start left-[2.78%] overflow-clip right-[17.22%]" data-name="Link - Container">
                        <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
                          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Section Title">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Category">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                                <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(255,255,255,0.6)] text-nowrap">
                                  <p className="leading-[15.6px] text-[10.875px] whitespace-pre">Health</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-[rgba(255,255,255,0.6)] rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                              <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(255,255,255,0.6)] text-nowrap">
                                <p className="leading-[15.6px] text-[11.25px] whitespace-pre">Sep 23, 2024</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-border content-stretch flex flex-col items-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full" data-name="Headline → Heading 4">
                          <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full">
                            <p className="leading-[21.6px] text-[16.594px]">The Future of Healthcare Workforce Shines Bright as Non-Clinical Roles Evolve</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Health Articles Sidebar */}
                <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-start p-[18px] relative rounded-[8px] shrink-0 w-[432px]" data-name="Article - Articles → Health News">
                  {[
                    {
                      image: imgActiveEhdHqNeavRMfm6Duj3EX7NYktmAJpg,
                      category: 'Health',
                      date: 'Sep 13, 2024',
                      title: 'Personalized Nutrition for Chronic Disease Management'
                    },
                    {
                      image: imgActiveUGpXt5AigglMd9KG6My0Fx4Jwc8Jpg,
                      category: 'Health',
                      date: 'Sep 3, 2024',
                      title: 'Breakthrough in Diabetes Treatment: New Drug Offers Hope for Millions'
                    },
                    {
                      image: imgActiveR9DqieJqIogDc5DRnnVEwY8ZsJpg,
                      category: 'Health',
                      date: 'Aug 23, 2024',
                      title: 'Shaping the Future of U.S. Healthcare'
                    },
                    {
                      image: imgActiveIzkb4Ycz7FVZhvkjzSFecg8G3QMJpg,
                      category: 'Health',
                      date: 'Aug 13, 2024',
                      title: 'Research Unveils Potential Cure for Cystic Fibrosis'
                    },
                    {
                      image: imgActiveHj3LyqwZsZh0Qed7Xqn2Sgy670Jpg,
                      category: 'Health',
                      date: 'Aug 3, 2024',
                      title: 'Enhancing Doctor-Patient Communication for Better Health Outcomes'
                    }
                  ].map((article, index) => (
                    <div 
                      key={index} 
                      className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity" 
                      data-name="Story Wrapper → Link - Small Photo + Text Right [Desktop]"
                      onClick={() => handleArticleClick({ ...article, content: 'Health news content', excerpt: article.title })}
                    >
                      <div className="content-stretch flex h-[100px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[125px]" data-name="Figure - container">
                        <div className="h-full relative rounded-[8px] shrink-0 w-[125px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                            <img alt="" className="absolute h-full left-[-10.06%] max-w-none top-0 w-[120.12%]" src={article.image} />
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="content">
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Article - headline">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Section Name + Date Posted">
                            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Section Title">
                              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                                  <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[10.875px] text-nowrap">
                                    <p className="leading-[15.6px] whitespace-pre">{article.category}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-slate-300 rounded-[99px] shrink-0 size-[3px]" data-name="Divider" />
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="DATE">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                                <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#657285] text-[11.063px] text-nowrap">
                                  <p className="leading-[15.6px] whitespace-pre">{article.date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="article">
                            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                              <div className="flex flex-col font-['Satoshi:Regular',_sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#020a1c] text-[14.75px] w-full">
                                <p className="line-clamp-2">{article.title}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
