'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Header,
  Footer,
} from '@/components/homepage';
import TiptapEditor from '@/components/TiptapEditor';
import { useCategories } from '@/hooks/useCategories';

// SVG Icons
const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

const ImageIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21,15 16,10 5,21"/>
  </svg>
);

const TagIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5l9 9-5 5-9-9V3z"/>
  </svg>
);

const SaveIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5l9 9-5 5-9-9V3z"/>
  </svg>
);

const EyeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export default function CreateArticlePage() {
  const router = useRouter();
  const { categories } = useCategories();
  const [formData, setFormData] = useState({
    title: '',
    category: 'Politics',
    content: '',
    excerpt: '',
    tags: [] as string[],
    coverImage: '',
    status: 'draft'
  });

  const [currentTag, setCurrentTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSave = async (status: 'draft' | 'under_review' | 'published') => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`Error: ${data.error || 'Failed to create article'}`);
        return;
      }

      alert('Article created successfully!');
      router.push('/articles');
    } catch (error) {
      console.error('Error creating article:', error);
      alert('Failed to create article. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreview = () => {
    // Store data in sessionStorage for preview
    sessionStorage.setItem('previewArticle', JSON.stringify(formData));
    router.push('/author-dashboard/preview-article');
  };

  const categoryOptions = [
    'Politics',
    'Tech',
    'Entertainment',
    'Business',
    'Health',
    'Finance',
    'Fashion',
    'Real Estate',
    'Travel',
    'Sports'
  ];

  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Header categories={categories} />

      <main>
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="bg-white rounded-[12px] border border-[rgba(203,213,225,0.35)] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[rgba(203,213,225,0.35)]">
              <div>
                <h2 className="text-[#020a1c] text-[24px] leading-[32px] font-bold">
                  Create New Article
                </h2>
                <p className="text-[#657285] text-[14px] leading-[20px] mt-1">
                  Write and publish your article
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePreview}
                  className="flex items-center gap-2 px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors"
                >
                  <EyeIcon className="w-4 h-4" />
                  Preview
                </button>
                <button
                  onClick={() => router.back()}
                  className="w-8 h-8 rounded-full hover:bg-[#f7fafc] flex items-center justify-center transition-colors"
                >
                  <XIcon className="w-5 h-5 text-[#657285]" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                  Article Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter a compelling title..."
                  className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[16px] outline-none focus:border-[#cc0000] transition-colors"
                />
              </div>

              {/* Category & Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  >
                    {categoryOptions.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  >
                    <option value="draft">Draft</option>
                    <option value="under_review">Under Review</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              {/* Cover Image URL */}
              <div>
                <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                  Cover Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.coverImage}
                    onChange={(e) => handleInputChange('coverImage', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="flex-1 px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  />
                  <button className="px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Upload
                  </button>
                </div>
                {formData.coverImage && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-[rgba(203,213,225,0.35)]">
                    <img 
                      src={formData.coverImage} 
                      alt="Cover preview" 
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  placeholder="Brief summary of your article (150 characters max)..."
                  className="w-full px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors min-h-[80px]"
                  maxLength={150}
                />
                <p className="text-[#657285] text-[12px] mt-1">
                  {formData.excerpt.length}/150 characters
                </p>
              </div>

              {/* Tags */}
              <div>
                <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                  Tags
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    placeholder="Add a tag..."
                    className="flex-1 px-3 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] transition-colors"
                  />
                  <button 
                    onClick={handleAddTag}
                    className="px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors flex items-center gap-2"
                  >
                    <TagIcon className="w-4 h-4" />
                    Add
                  </button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center gap-2 px-3 py-1 border border-[rgba(203,213,225,0.5)] rounded text-[12px] font-medium"
                      >
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          className="hover:text-red-600"
                        >
                          <XIcon className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                  Article Content *
                </label>
                <TiptapEditor
                  value={formData.content}
                  onChange={(value) => handleInputChange('content', value)}
                  placeholder="Write your article content here... Use the toolbar for rich text formatting."
                />
                <p className="text-[#657285] text-[12px] mt-1">
                  {formData.content.replace(/<[^>]*>/g, '').split(' ').filter(w => w).length} words
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-[rgba(203,213,225,0.35)]">
              <button 
                onClick={() => router.back()}
                className="px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors"
              >
                Cancel
              </button>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSave('draft')}
                  disabled={!formData.title || !formData.content || isSubmitting}
                  className="px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] hover:bg-[#f7fafc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Saving...' : 'Save as Draft'}
                </button>

                <button
                  onClick={() => handleSave('under_review')}
                  disabled={!formData.title || !formData.content || isSubmitting}
                  className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SaveIcon className="w-4 h-4" />
                  {isSubmitting ? 'Creating...' : 'Create Article'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

