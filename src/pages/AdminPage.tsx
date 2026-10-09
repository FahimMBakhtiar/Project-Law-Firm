import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  getStoredArticles,
  saveArticle,
  deleteArticle,
  resetArticlesToDefault,
  exportArticlesAsJSON,
  importArticlesFromJSON,
  getStoredConsultationEnquiries,
} from '../utils/storage';
import { Article, LegalCategory, ArticleContentSection, ConsultationEnquiry } from '../types';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  RefreshCw,
  Search,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Shield,
  Layers,
  ArrowRight,
  ExternalLink,
  Save,
  X,
  Inbox,
  User,
} from 'lucide-react';

const CATEGORIES: LegalCategory[] = [
  'Employment Disputes',
  'Immigration & Asylum',
  'Property & Conveyancing',
  'Family & Divorce',
  'Personal Injury',
  'Civil & Commercial',
  'Wills & Probate',
  'Business & Corporate',
  'Legal Updates',
  'Firm News',
];

export const AdminPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [enquiries, setEnquiries] = useState<ConsultationEnquiry[]>([]);
  const [activeTab, setActiveTab] = useState<'articles' | 'enquiries'>('articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [previewArticle, setPreviewArticle] = useState<Article | null>(null);
  const [importText, setImportText] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const loadData = () => {
    setArticles(getStoredArticles());
    setEnquiries(getStoredConsultationEnquiries());
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalArticles = articles.length;
  const publishedArticles = articles.filter((a) => a.status === 'published').length;
  const draftArticles = articles.filter((a) => a.status === 'draft').length;

  const showFeedback = (text: string, type: 'success' | 'error') => {
    setFeedbackMessage({ text, type });
    setTimeout(() => setFeedbackMessage(null), 4000);
  };

  const handleCreateNew = () => {
    const newArt: Article = {
      id: `art-${Date.now()}`,
      slug: `new-article-${Date.now().toString().slice(-4)}`,
      title: 'Untitled Legal Insight',
      subtitle: '',
      category: 'Employment Disputes',
      author: 'Md Hanif',
      authorRole: 'Solicitor',
      authorVerified: true,
      publishedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      readTime: '5 min read',
      excerpt: 'Brief overview of this legal article...',
      featured: false,
      status: 'draft',
      statutoryReferences: ['Equality Act 2010'],
      tags: ['Legal Update'],
      sections: [
        {
          heading: 'Overview & Background',
          paragraphs: [
            'Write the introductory analysis of the statute or case background here.',
          ],
        },
      ],
    };
    setEditingArticle(newArt);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;
    if (!editingArticle.title.trim()) {
      showFeedback('Article title cannot be blank.', 'error');
      return;
    }
    if (!editingArticle.slug.trim()) {
      showFeedback('Article URL slug cannot be blank.', 'error');
      return;
    }

    saveArticle(editingArticle);
    loadData();
    showFeedback(`Article "${editingArticle.title}" saved successfully.`, 'success');
    setEditingArticle(null);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      deleteArticle(id);
      loadData();
      showFeedback(`Article "${title}" was deleted.`, 'success');
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all articles to original reference demo content? Any custom articles will be overwritten.')) {
      resetArticlesToDefault();
      loadData();
      showFeedback('Articles restored to default sample collection.', 'success');
    }
  };

  const handleExport = () => {
    const jsonStr = exportArticlesAsJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `karkon-legal-articles-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showFeedback('Articles exported as JSON backup.', 'success');
  };

  const handleImportSubmit = () => {
    if (!importText.trim()) return;
    const res = importArticlesFromJSON(importText);
    if (res.success) {
      loadData();
      setShowImportModal(false);
      setImportText('');
      showFeedback(`Successfully imported ${res.count} articles!`, 'success');
    } else {
      showFeedback(`Import error: ${res.error}`, 'error');
    }
  };

  const filteredArticles = articles.filter((a) => {
    const q = searchQuery.toLowerCase();
    return a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q) || a.author.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Publisher Studio' }]} />

        {/* Demonstration Security Disclaimer (Mandatory) */}
        <div className="bg-amber-50 rounded-xl border border-amber-300 p-4 sm:p-5 text-amber-900 text-xs flex items-start gap-3 shadow-xs">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sm block text-amber-950">
              Demonstration Publishing Interface Notice
            </span>
            <p className="leading-relaxed">
              This administrative interface is provided for local demonstration and client review. Articles and draft states are persisted locally in browser storage (<code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono">localStorage</code>). In a live production environment, this module connects to a secure backend or headless CMS (e.g. Strapi, Contentful, or PostgreSQL) with role-based staff authentication.
            </p>
          </div>
        </div>

        {/* Header & KPI Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                Editorial Content Studio
              </span>
              <div className="h-[1px] w-8 bg-[#C5A059]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#0A192F] font-bold mt-1">
              Article Publishing &amp; Enquiry Dashboard
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Draft, edit, publish, export, and manage client enquiries locally.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCreateNew}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A192F] hover:bg-[#112240] text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4 text-[#C5A059]" />
              <span>Write New Article</span>
            </button>

            <button
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-medium rounded-md transition-colors"
              title="Download articles as JSON"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={() => setShowImportModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-medium rounded-md transition-colors"
              title="Import JSON articles"
            >
              <Upload className="w-3.5 h-3.5 text-slate-500" />
              <span>Import JSON</span>
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-500 text-xs font-medium rounded-md transition-colors"
              title="Reset to default sample articles"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Sample</span>
            </button>
          </div>
        </div>

        {/* Feedback Alert */}
        {feedbackMessage && (
          <div
            className={`p-3 rounded-lg text-xs font-medium flex items-center gap-2 border ${
              feedbackMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                : 'bg-red-50 text-red-900 border-red-200'
            }`}
          >
            {feedbackMessage.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-red-600" />
            )}
            <span>{feedbackMessage.text}</span>
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block font-medium">Total Articles</span>
              <span className="text-2xl font-bold font-serif text-[#0A192F]">{totalArticles}</span>
            </div>
            <FileText className="w-8 h-8 text-slate-300" />
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block font-medium">Published Live</span>
              <span className="text-2xl font-bold font-serif text-emerald-700">{publishedArticles}</span>
            </div>
            <CheckCircle className="w-8 h-8 text-emerald-200" />
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block font-medium">Draft Articles</span>
              <span className="text-2xl font-bold font-serif text-amber-600">{draftArticles}</span>
            </div>
            <Clock className="w-8 h-8 text-amber-200" />
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block font-medium">Captured Enquiries</span>
              <span className="text-2xl font-bold font-serif text-[#0A192F]">{enquiries.length}</span>
            </div>
            <Inbox className="w-8 h-8 text-slate-300" />
          </div>
        </div>

        {/* Sub-Tabs: Articles vs Enquiries */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'articles'
                ? 'bg-[#0A192F] text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Articles Directory ({articles.length})
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'enquiries'
                ? 'bg-[#0A192F] text-white'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Client Enquiries Log ({enquiries.length})
          </button>
        </div>

        {/* Tab 1: Articles Directory Table */}
        {activeTab === 'articles' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-4 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>

              <span className="text-xs text-slate-500">
                Displaying {filteredArticles.length} of {articles.length} articles
              </span>
            </div>

            {/* Articles Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-[#FAF9F6] text-slate-800 border-b border-slate-200 font-semibold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Title &amp; URL Slug</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Author</th>
                    <th className="py-3 px-4">Published</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredArticles.map((art) => (
                    <tr key={art.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-slate-900 max-w-xs">
                        <span className="font-serif font-bold text-sm block truncate text-[#0A192F]">
                          {art.title}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 block truncate">
                          /insights/{art.slug}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="text-slate-600">{art.category}</span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span>{art.author}</span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-500">
                        {art.publishedDate}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                            art.status === 'published'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {art.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap space-x-2">
                        <Link
                          to={`/insights/${art.slug}`}
                          className="inline-flex items-center p-1.5 text-slate-500 hover:text-[#0A192F] rounded hover:bg-slate-100"
                          title="View Live/Preview Page"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => setEditingArticle(art)}
                          className="inline-flex items-center p-1.5 text-[#0A192F] hover:text-[#C5A059] rounded hover:bg-slate-100"
                          title="Edit Article"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(art.id, art.title)}
                          className="inline-flex items-center p-1.5 text-red-500 hover:text-red-700 rounded hover:bg-red-50"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Enquiries Log */}
        {activeTab === 'enquiries' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#0A192F]">
                Received Client Consultation Leads ({enquiries.length})
              </h3>
              <span className="text-xs text-slate-500">
                Logged during local demonstration sessions
              </span>
            </div>

            {enquiries.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                No consultation enquiries submitted yet. Test the consultation form to see incoming leads here.
              </div>
            ) : (
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="p-4 sm:p-5 hover:bg-slate-50 transition-colors space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#0A192F]">{enq.fullName}</span>
                        <span className="font-mono text-xs text-slate-400">({enq.referenceNumber})</span>
                        <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded uppercase font-semibold">
                          {enq.service}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">
                        {new Date(enq.submittedAt).toLocaleString('en-GB')}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                      <span><strong>Email:</strong> {enq.email}</span>
                      <span><strong>Phone:</strong> {enq.phone}</span>
                      <span><strong>Urgency:</strong> <span className="capitalize">{enq.urgency}</span></span>
                      <span><strong>Preferred:</strong> <span className="capitalize">{enq.preferredContact}</span></span>
                    </div>

                    <div className="bg-[#FAF9F6] p-3 rounded text-xs text-slate-800 italic border border-slate-200">
                      {enq.message}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* EDIT MODAL / FULL SCREEN EDITOR */}
        {editingArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
              <form onSubmit={handleSave} className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0A192F]">
                      {editingArticle.id.startsWith('art-') && !articles.some((a) => a.id === editingArticle.id)
                        ? 'Create New Article'
                        : 'Edit Legal Article'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Changes are reflected immediately on the public Insights page when set to Published.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEditingArticle(null)}
                    className="p-1 text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Form fields */}
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">Article Title *</label>
                      <input
                        type="text"
                        required
                        value={editingArticle.title}
                        onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900 font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">URL Slug *</label>
                      <input
                        type="text"
                        required
                        value={editingArticle.slug}
                        onChange={(e) => setEditingArticle({ ...editingArticle, slug: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900 font-mono text-[11px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700">Subtitle / Case Citation</label>
                    <input
                      type="text"
                      value={editingArticle.subtitle || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, subtitle: e.target.value })}
                      placeholder="e.g. Carmichael v National Power plc [1999] UKHL 47"
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">Practice Category</label>
                      <select
                        value={editingArticle.category}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, category: e.target.value as LegalCategory })
                        }
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">Author Name</label>
                      <input
                        type="text"
                        value={editingArticle.author}
                        onChange={(e) => setEditingArticle({ ...editingArticle, author: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-700">Status</label>
                      <select
                        value={editingArticle.status}
                        onChange={(e) =>
                          setEditingArticle({ ...editingArticle, status: e.target.value as 'published' | 'draft' })
                        }
                        className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900 font-semibold"
                      >
                        <option value="published">Published (Live to public)</option>
                        <option value="draft">Draft (Private in admin)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700">Excerpt / Brief Lead Summary *</label>
                    <textarea
                      rows={2}
                      required
                      value={editingArticle.excerpt}
                      onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900"
                    />
                  </div>

                  {/* Main Section Content Editor */}
                  <div className="space-y-1 pt-2">
                    <label className="font-semibold text-slate-700 block">
                      Main Content Paragraphs (Structured Content)
                    </label>
                    <textarea
                      rows={6}
                      value={editingArticle.sections[0]?.paragraphs.join('\n\n') || ''}
                      onChange={(e) => {
                        const newParagraphs = e.target.value.split('\n\n').filter((p) => p.trim().length > 0);
                        const updatedSections: ArticleContentSection[] = [
                          {
                            heading: editingArticle.sections[0]?.heading || 'Legal Analysis',
                            paragraphs: newParagraphs,
                          },
                        ];
                        setEditingArticle({ ...editingArticle, sections: updatedSections });
                      }}
                      placeholder="Enter legal analysis paragraphs separated by blank lines..."
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900 font-sans leading-relaxed"
                    />
                    <span className="text-[11px] text-slate-400">
                      Separate distinct paragraphs with a blank line.
                    </span>
                  </div>

                  {/* Statutory References */}
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700">
                      Statutory &amp; Case Law Citations (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={editingArticle.statutoryReferences?.join(', ') || ''}
                      onChange={(e) =>
                        setEditingArticle({
                          ...editingArticle,
                          statutoryReferences: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                        })
                      }
                      placeholder="e.g. Equality Act 2010 s.13, Carmichael v National Power plc [1999]"
                      className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-slate-900"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setEditingArticle(null)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md text-xs hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0A192F] hover:bg-[#112240] text-white text-xs font-semibold rounded-md shadow-xs"
                    >
                      <Save className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Save &amp; Persist</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* JSON Import Modal */}
        {showImportModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-serif text-lg font-bold text-[#0A192F]">
                  Import Articles JSON
                </h3>
                <button onClick={() => setShowImportModal(false)} className="text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Paste valid JSON containing an array of article objects to restore previous backups or ingest bulk articles.
              </p>

              <textarea
                rows={8}
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder='[ { "id": "art-1", "title": "Example...", "slug": "example" } ]'
                className="w-full px-3 py-2 bg-[#FAF9F6] border border-slate-300 rounded text-xs font-mono text-slate-800"
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setShowImportModal(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-600 rounded text-xs hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleImportSubmit}
                  className="px-4 py-2 bg-[#0A192F] text-white rounded text-xs font-semibold hover:bg-[#112240]"
                >
                  Validate &amp; Import
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
