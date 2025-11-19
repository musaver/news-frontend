'use client'

import React, { useState, useEffect, useRef } from 'react';
import { DashboardLayout } from '@/components/homepage';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

// SVG Icons
const TrendingUpIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const UploadIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
  </svg>
);

interface UserPreferences {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  bio: string | null;
  emailNotifications: boolean;
  authorNotifications: boolean;
  weeklyNewsletter: boolean;
  commentReplies: boolean;
  darkMode: boolean;
}

export default function PreferencesPage() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserPreferences | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [authorNotifications, setAuthorNotifications] = useState(true);
  const [weeklyNewsletter, setWeeklyNewsletter] = useState(false);
  const [commentReplies, setCommentReplies] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch user preferences on mount
  useEffect(() => {
    if (status === 'authenticated') {
      fetchUserPreferences();
    }
  }, [status]);

  const fetchUserPreferences = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users/preferences');

      if (!response.ok) {
        throw new Error('Failed to fetch preferences');
      }

      const data = await response.json();

      if (data.success && data.user) {
        setUserData(data.user);
        setName(data.user.name || '');
        setBio(data.user.bio || '');
        setImage(data.user.image);
        setEmailNotifications(data.user.emailNotifications);
        setAuthorNotifications(data.user.authorNotifications);
        setWeeklyNewsletter(data.user.weeklyNewsletter);
        setCommentReplies(data.user.commentReplies);
        setDarkMode(data.user.darkMode);
      }
    } catch (error) {
      console.error('Error fetching preferences:', error);
      setMessage({ type: 'error', text: 'Failed to load preferences' });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setMessage({ type: 'error', text: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.' });
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setMessage({ type: 'error', text: 'File size exceeds 5MB limit.' });
      return;
    }

    try {
      setUploading(true);
      setMessage(null);

      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload image');
      }

      const uploadData = await uploadResponse.json();

      if (uploadData.success && uploadData.url) {
        setImage(uploadData.url);

        // Update user preferences with new image
        const updateResponse = await fetch('/api/users/preferences', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: uploadData.url }),
        });

        if (updateResponse.ok) {
          setMessage({ type: 'success', text: 'Profile picture updated successfully!' });
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage({ type: 'error', text: 'Failed to upload image. Please try again.' });
    } finally {
      setUploading(false);
    }
  };

  const handleSavePreferences = async () => {
    try {
      setSaving(true);
      setMessage(null);

      const response = await fetch('/api/users/preferences', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          bio,
          emailNotifications,
          authorNotifications,
          weeklyNewsletter,
          commentReplies,
          darkMode,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save preferences');
      }

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Preferences saved successfully!' });
        setUserData(data.user);

        // Clear success message after 3 seconds
        setTimeout(() => setMessage(null), 3000);
      }
    } catch (error) {
      console.error('Error saving preferences:', error);
      setMessage({ type: 'error', text: 'Failed to save preferences. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <DashboardLayout activeTab="preferences">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#cc0000]"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <DashboardLayout activeTab="preferences">
        <div className="text-center py-12">
          <p className="text-[#657285] text-[16px]">Please log in to access preferences.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout activeTab="preferences">
      <div className="space-y-6">
        {/* Header */}
        <h1 className="text-[#020a1c] text-[28px] leading-[36px] font-bold">
          Preferences & Settings
        </h1>

        {/* Message Alert */}
        {message && (
          <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            {message.text}
          </div>
        )}

        {/* Account Settings */}
        <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
          <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
            Account Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                Profile Picture
              </label>
              <div className="flex items-center gap-4">
                {image ? (
                  <img
                    src={image}
                    alt={name || 'Profile'}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-xl font-semibold">
                      {name ? name.charAt(0).toUpperCase() : '?'}
                    </span>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="px-3 py-1.5 text-[13px] font-medium border border-[rgba(203,213,225,0.35)] rounded-md text-[#020a1c] hover:bg-[#f7fafc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {uploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#cc0000]"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <UploadIcon />
                      Change Photo
                    </>
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000] transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={userData?.email || ''}
                disabled
                className="w-full px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] bg-gray-50 text-gray-500 cursor-not-allowed"
              />
              <p className="text-[#657285] text-[12px] mt-1">Email cannot be changed</p>
            </div>

            <div>
              <label className="text-[#020a1c] text-[14px] font-medium mb-2 block">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-[rgba(203,213,225,0.35)] rounded-lg text-[14px] outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000] transition-colors resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            <button
              onClick={handleSavePreferences}
              disabled={saving}
              className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
          <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
            Notification Preferences
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#020a1c] text-[14px] font-medium">
                  Email Notifications
                </p>
                <p className="text-[#657285] text-[12px]">
                  Receive updates via email
                </p>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotifications ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#020a1c] text-[14px] font-medium">
                  New Articles from Followed Authors
                </p>
                <p className="text-[#657285] text-[12px]">
                  Get notified when authors you follow post
                </p>
              </div>
              <button
                onClick={() => setAuthorNotifications(!authorNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${authorNotifications ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${authorNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#020a1c] text-[14px] font-medium">
                  Weekly Newsletter
                </p>
                <p className="text-[#657285] text-[12px]">
                  Top stories delivered to your inbox
                </p>
              </div>
              <button
                onClick={() => setWeeklyNewsletter(!weeklyNewsletter)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${weeklyNewsletter ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${weeklyNewsletter ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#020a1c] text-[14px] font-medium">
                  Comment Replies
                </p>
                <p className="text-[#657285] text-[12px]">
                  When someone replies to your comment
                </p>
              </div>
              <button
                onClick={() => setCommentReplies(!commentReplies)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${commentReplies ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${commentReplies ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSavePreferences}
                disabled={saving}
                className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Save Preferences'}
              </button>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-white p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px]">
          <h3 className="text-[#020a1c] text-[18px] leading-[24px] font-bold mb-6">
            Display Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#020a1c] text-[14px] font-medium">
                  Dark Mode
                </p>
                <p className="text-[#657285] text-[12px]">
                  Switch to dark theme
                </p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${darkMode ? 'bg-[#cc0000]' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSavePreferences}
                disabled={saving}
                className="px-4 py-2 bg-[#cc0000] hover:bg-[#b30000] text-white rounded-lg text-[14px] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Save Preferences'}
              </button>
            </div>
          </div>
        </div>

        {/* Become an Author */}
        <div className="p-6 border border-[rgba(203,213,225,0.35)] rounded-[12px] bg-gradient-to-br from-[#cc0000] to-[#990000] text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[20px] leading-[26px] font-bold mb-2">
                Become an Author
              </h3>
              <p className="text-white/90 text-[14px] leading-[22px] mb-4">
                Share your voice with the world. Start writing and publishing articles on NewsFlash.
              </p>
              <button className="px-4 py-2 bg-white text-[#cc0000] hover:bg-white/90 rounded-lg text-[14px] font-semibold transition-colors">
                Apply Now
              </button>
            </div>
            <TrendingUpIcon className="w-12 h-12 text-white/50" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
