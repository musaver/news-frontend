import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, Tag, Save, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Article {
  id: number;
  title: string;
  status: string;
  category: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  content?: string;
  excerpt?: string;
  tags?: string[];
  coverImage?: string;
}

interface ArticleEditorProps {
  article?: Article | null;
  onSave: (article: Article) => void;
  onClose: () => void;
  mode: 'create' | 'edit';
}

export function ArticleEditor({ article, onSave, onClose, mode }: ArticleEditorProps) {
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
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (article && mode === 'edit') {
      setFormData({
        title: article.title || '',
        category: article.category || 'Politics',
        content: article.content || '',
        excerpt: article.excerpt || '',
        tags: article.tags || [],
        coverImage: article.coverImage || '',
        status: article.status || 'draft'
      });
    }
  }, [article, mode]);

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

  const handleSave = (status: 'draft' | 'under_review' | 'published') => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    const savedArticle: Article = {
      id: article?.id || Date.now(),
      title: formData.title,
      category: formData.category,
      date: article?.date || dateStr,
      status: status,
      views: article?.views || 0,
      likes: article?.likes || 0,
      comments: article?.comments || 0,
      shares: article?.shares || 0,
      content: formData.content,
      excerpt: formData.excerpt,
      tags: formData.tags,
      coverImage: formData.coverImage
    };

    onSave(savedArticle);
  };

  const categories = [
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-[12px] w-full max-w-4xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(203,213,225,0.35)]">
          <div>
            <h2 className="text-[#020a1c] text-[24px] leading-[32px] font-['Satoshi:Bold',_sans-serif] font-bold">
              {mode === 'create' ? 'Create New Article' : 'Edit Article'}
            </h2>
            <p className="text-[#657285] text-[14px] leading-[20px] font-['Satoshi:Regular',_sans-serif] mt-1">
              {mode === 'create' ? 'Write and publish your article' : 'Update your article content'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPreview(!preview)}
              className="gap-2"
            >
              <Eye className="w-4 h-4" />
              {preview ? 'Edit' : 'Preview'}
            </Button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#f7fafc] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-[#657285]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(100vh-280px)] overflow-y-auto">
          {!preview ? (
            <div className="space-y-6">
              {/* Title */}
              <div>
                <Label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                  Article Title *
                </Label>
                <Input
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter a compelling title..."
                  className="font-['Satoshi:Regular',_sans-serif] text-[16px]"
                />
              </div>

              {/* Category & Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                    Category *
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="font-['Satoshi:Regular',_sans-serif]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat} className="font-['Satoshi:Regular',_sans-serif]">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                    Status
                  </Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                    <SelectTrigger className="font-['Satoshi:Regular',_sans-serif]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft" className="font-['Satoshi:Regular',_sans-serif]">Draft</SelectItem>
                      <SelectItem value="under_review" className="font-['Satoshi:Regular',_sans-serif]">Under Review</SelectItem>
                      <SelectItem value="published" className="font-['Satoshi:Regular',_sans-serif]">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Cover Image URL */}
              <div>
                <Label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                  Cover Image URL
                </Label>
                <div className="flex gap-2">
                  <Input
                    value={formData.coverImage}
                    onChange={(e) => handleInputChange('coverImage', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="font-['Satoshi:Regular',_sans-serif]"
                  />
                  <Button variant="outline" size="sm" className="gap-2 flex-shrink-0">
                    <ImageIcon className="w-4 h-4" />
                    Upload
                  </Button>
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
                <Label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                  Excerpt
                </Label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  placeholder="Brief summary of your article (150 characters max)..."
                  className="font-['Satoshi:Regular',_sans-serif] min-h-[80px]"
                  maxLength={150}
                />
                <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif] mt-1">
                  {formData.excerpt.length}/150 characters
                </p>
              </div>

              {/* Tags */}
              <div>
                <Label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                  Tags
                </Label>
                <div className="flex gap-2 mb-3">
                  <Input
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    placeholder="Add a tag..."
                    className="font-['Satoshi:Regular',_sans-serif]"
                  />
                  <Button variant="outline" size="sm" onClick={handleAddTag} className="gap-2 flex-shrink-0">
                    <Tag className="w-4 h-4" />
                    Add
                  </Button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="gap-2 font-['Satoshi:Medium',_sans-serif]">
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          className="hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <Label className="text-[#020a1c] text-[14px] font-['Satoshi:Medium',_sans-serif] mb-2 block">
                  Article Content *
                </Label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  placeholder="Write your article content here... Use markdown for formatting."
                  className="font-['Satoshi:Regular',_sans-serif] min-h-[400px]"
                />
                <p className="text-[#657285] text-[12px] font-['Satoshi:Regular',_sans-serif] mt-1">
                  {formData.content.split(' ').filter(w => w).length} words
                </p>
              </div>
            </div>
          ) : (
            // Preview Mode
            <div className="space-y-6">
              {formData.coverImage && (
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={formData.coverImage} 
                    alt={formData.title} 
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800';
                    }}
                  />
                </div>
              )}
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="font-['Satoshi:Medium',_sans-serif]">
                    {formData.category}
                  </Badge>
                  <span className="text-[#657285] text-[14px] font-['Satoshi:Regular',_sans-serif]">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h1 className="text-[#020a1c] text-[32px] leading-[40px] font-['Satoshi:Bold',_sans-serif] font-bold mb-4">
                  {formData.title || 'Untitled Article'}
                </h1>
                
                {formData.excerpt && (
                  <p className="text-[#657285] text-[18px] leading-[28px] font-['Satoshi:Regular',_sans-serif] mb-4">
                    {formData.excerpt}
                  </p>
                )}
                
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {formData.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="font-['Satoshi:Regular',_sans-serif]">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="border-t border-[rgba(203,213,225,0.35)] pt-6 mt-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-[#020a1c] text-[16px] leading-[28px] font-['Satoshi:Regular',_sans-serif] whitespace-pre-wrap">
                      {formData.content || 'No content yet...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-[rgba(203,213,225,0.35)]">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => handleSave('draft')}
              disabled={!formData.title || !formData.content}
            >
              Save as Draft
            </Button>
            
            {mode === 'edit' && article?.status !== 'published' && (
              <Button
                variant="outline"
                onClick={() => handleSave('under_review')}
                disabled={!formData.title || !formData.content}
                className="border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                Submit for Review
              </Button>
            )}
            
            <Button
              onClick={() => handleSave(article?.status === 'published' ? 'published' : 'under_review')}
              disabled={!formData.title || !formData.content}
              className="bg-[#cc0000] hover:bg-[#b30000] text-white font-['Satoshi:Semi_Bold',_sans-serif] gap-2"
            >
              <Save className="w-4 h-4" />
              {mode === 'create' ? 'Create Article' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
