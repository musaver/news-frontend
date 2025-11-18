'use client'

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

// Toolbar Button Component
const ToolbarButton = ({
  onClick,
  active,
  disabled,
  children,
  title
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`p-2 rounded hover:bg-[#f7fafc] transition-colors ${
      active ? 'bg-[#f7fafc] text-[#cc0000]' : 'text-[#657285]'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);

export default function TiptapEditor({ value, onChange, placeholder }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[400px] px-3 py-2',
      },
    },
  });

  // Update editor content when value changes externally
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-[rgba(203,213,225,0.35)] rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-[rgba(203,213,225,0.35)] bg-[#f7fafc]">
        {/* Text Formatting */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          title="Bold (Ctrl+B)"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
          </svg>
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          title="Italic (Ctrl+I)"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4h8 M8 20h8 M15 4L9 20"/>
          </svg>
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive('strike')}
          title="Strikethrough"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18 M8 5h8a4 4 0 0 1 0 8H8 M8 17h8"/>
          </svg>
        </ToolbarButton>

        <div className="w-px h-6 bg-[rgba(203,213,225,0.35)] mx-1" />

        {/* Headings */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          active={editor.isActive('heading', { level: 1 })}
          title="Heading 1"
        >
          <span className="text-sm font-bold">H1</span>
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          <span className="text-sm font-bold">H2</span>
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          active={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          <span className="text-sm font-bold">H3</span>
        </ToolbarButton>

        <div className="w-px h-6 bg-[rgba(203,213,225,0.35)] mx-1" />

        {/* Lists */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          title="Bullet List"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01"/>
          </svg>
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          title="Ordered List"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6h11 M9 12h11 M9 18h11 M3 6v3 M3 12v3 M3 18v3 M6 7H3 M6 13H3 M6 19H3"/>
          </svg>
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
          title="Blockquote"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8h2.5A2.5 2.5 0 0 1 11 10.5V11a2.5 2.5 0 0 1-2.5 2.5H6 M6 15h2.5A2.5 2.5 0 0 1 11 17.5V18a2.5 2.5 0 0 1-2.5 2.5H6 M13 8h2.5A2.5 2.5 0 0 1 18 10.5V11a2.5 2.5 0 0 1-2.5 2.5H13 M13 15h2.5A2.5 2.5 0 0 1 18 17.5V18a2.5 2.5 0 0 1-2.5 2.5H13"/>
          </svg>
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          active={editor.isActive('codeBlock')}
          title="Code Block"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </ToolbarButton>

        <div className="w-px h-6 bg-[rgba(203,213,225,0.35)] mx-1" />

        {/* Horizontal Rule */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Horizontal Rule"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16"/>
          </svg>
        </ToolbarButton>

        <div className="w-px h-6 bg-[rgba(203,213,225,0.35)] mx-1" />

        {/* Undo/Redo */}
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo (Ctrl+Z)"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6m-6-6l6-6"/>
          </svg>
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo (Ctrl+Y)"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 0 0-8 8v2m18-10l-6 6m6-6l-6-6"/>
          </svg>
        </ToolbarButton>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="tiptap-editor"
      />

      {/* Add custom styles for the editor */}
      <style jsx global>{`
        .tiptap-editor .ProseMirror {
          outline: none;
          min-height: 400px;
          padding: 12px;
        }

        .tiptap-editor .ProseMirror p.is-editor-empty:first-child::before {
          color: #adb5bd;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }

        .tiptap-editor .ProseMirror h1 {
          font-size: 2em;
          font-weight: bold;
          margin-top: 0.67em;
          margin-bottom: 0.67em;
        }

        .tiptap-editor .ProseMirror h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin-top: 0.83em;
          margin-bottom: 0.83em;
        }

        .tiptap-editor .ProseMirror h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin-top: 1em;
          margin-bottom: 1em;
        }

        .tiptap-editor .ProseMirror p {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }

        .tiptap-editor .ProseMirror ul,
        .tiptap-editor .ProseMirror ol {
          padding-left: 1.5em;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }

        .tiptap-editor .ProseMirror ul {
          list-style-type: disc;
        }

        .tiptap-editor .ProseMirror ol {
          list-style-type: decimal;
        }

        .tiptap-editor .ProseMirror li {
          margin-top: 0.25em;
          margin-bottom: 0.25em;
        }

        .tiptap-editor .ProseMirror blockquote {
          border-left: 3px solid #cbd5e0;
          padding-left: 1em;
          margin-left: 0;
          margin-right: 0;
          font-style: italic;
          color: #657285;
        }

        .tiptap-editor .ProseMirror code {
          background-color: #f7fafc;
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-size: 0.9em;
        }

        .tiptap-editor .ProseMirror pre {
          background-color: #020a1c;
          color: #f7fafc;
          padding: 1em;
          border-radius: 8px;
          overflow-x: auto;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }

        .tiptap-editor .ProseMirror pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
          font-size: 0.875em;
        }

        .tiptap-editor .ProseMirror hr {
          border: none;
          border-top: 2px solid #cbd5e0;
          margin: 2em 0;
        }

        .tiptap-editor .ProseMirror strong {
          font-weight: bold;
        }

        .tiptap-editor .ProseMirror em {
          font-style: italic;
        }

        .tiptap-editor .ProseMirror s {
          text-decoration: line-through;
        }
      `}</style>
    </div>
  );
}
