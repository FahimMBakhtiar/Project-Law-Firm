import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPublishedArticles } from '../utils/storage';
import { LegalCategory, Article } from '../types';
import { IMAGES } from '../assets/images';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Scale,
  Sparkles,
  Tag,
} from 'lucide-react';

const CATEGORIES: ('All' | LegalCategory)[] = [
  'All',
  'Employment Disputes',
  'Immigration & Asylum',
  'Property & Conveyancing',
  'Family & Divorce',
  'Civil & Commercial',
];

export const InsightsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | LegalCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = getPublishedArticles();

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.tags.some((t) => t.toLowerCase().includes(query)) ||
      art.author.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  const getImageSrc = (imageKey?: string) => {
    if (imageKey === 'immigrationDocs') return IMAGES.immigrationDocs;
    if (imageKey === 'propertyHomes') return IMAGES.propertyHomes;
    if (imageKey === 'lawBooksScales') return IMAGES.lawBooksScales;
    if (imageKey === 'solicitorPortrait') return IMAGES.solicitorPortrait;
    return IMAGES.heroSkyline;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Legal Insights' }]} />

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 max-w-4xl mx-auto text-center space-y-4 shadow-xs">
          <div className="flex items-center justify-center gap-2">
            <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Legal Commentary &amp; Practice Guides
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F]">
            Legal Insights &amp; Updates
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Practical analyses of UK statutory changes, tribunal case law, nationality reforms, and procedural rights authored by legal practitioners.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by case name (e.g. Carmichael), statute, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Interactive filter buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#0A192F] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-[#0A192F] border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Banner (if no search filter is applied) */}
        {!searchQuery && activeCategory === 'All' && featuredArticle && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-semibold text-[#C5A059] uppercase tracking-wider text-[11px]">
                    Featured Landmark Analysis
                  </span>
                  <span>·</span>
                  <span>{featuredArticle.category}</span>
                  <span>·</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#0A192F] font-bold leading-snug">
                  <Link
                    to={`/insights/${featuredArticle.slug}`}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="font-semibold">{featuredArticle.author}</span>
                    <span className="text-slate-400">({featuredArticle.authorRole})</span>
                  </div>

                  <Link
                    to={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A192F] hover:bg-[#112240] text-white text-xs font-semibold rounded-md transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 h-full min-h-[260px] relative">
                <img
                  src={getImageSrc(featuredArticle.imageKey)}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#0A192F]">
              {activeCategory === 'All' ? 'Recent Publications' : `${activeCategory} Articles`}
            </h3>
            <span className="text-xs text-slate-500">
              Showing {filteredArticles.length} article{filteredArticles.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-16/9 bg-slate-100 overflow-hidden relative">
                    <img
                      src={getImageSrc(article.imageKey)}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A192F]/90 backdrop-blur-xs text-[#C5A059] text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    {/* Unboxed Metadata (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span>{article.publishedDate}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                      <span>·</span>
                      <span className="truncate">{article.author}</span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-[#0A192F] group-hover:text-[#C5A059] transition-colors line-clamp-2">
                      <Link to={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h4>

                    {article.subtitle && (
                      <p className="text-[11px] text-slate-500 font-medium line-clamp-1 italic">
                        {article.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A192F]">
                  <Link
                    to={`/insights/${article.slug}`}
                    className="group-hover:text-[#C5A059] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Complete Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-slate-800">
                No matching articles found
              </h4>
              <p className="text-xs text-slate-500">
                Try searching for a different keyword or resetting category filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-4 py-2 bg-[#0A192F] text-white text-xs font-semibold rounded-md"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
