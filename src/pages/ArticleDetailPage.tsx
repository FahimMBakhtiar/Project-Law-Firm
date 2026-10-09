import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getArticleBySlug, getPublishedArticles } from '../utils/storage';
import { IMAGES } from '../assets/images';
import {
  Calendar,
  Clock,
  User,
  Share2,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  Scale,
  ShieldAlert,
  ArrowLeft,
  Briefcase,
  HelpCircle,
} from 'lucide-react';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  // Search including drafts if opened via admin preview
  const article = getArticleBySlug(slug || '', true);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const allArticles = getPublishedArticles();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug && (a.category === article.category || a.relatedServiceSlug === article.relatedServiceSlug))
    .slice(0, 3);

  const getImageSrc = (imageKey?: string) => {
    if (imageKey === 'immigrationDocs') return IMAGES.immigrationDocs;
    if (imageKey === 'propertyHomes') return IMAGES.propertyHomes;
    if (imageKey === 'lawBooksScales') return IMAGES.lawBooksScales;
    if (imageKey === 'solicitorPortrait') return IMAGES.solicitorPortrait;
    return IMAGES.heroSkyline;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Insights', href: '/insights' },
            { label: article.category, href: '/insights' },
            { label: article.title },
          ]}
        />

        {/* Draft Notice if previewing a draft */}
        {article.status === 'draft' && (
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-900 flex items-center justify-between">
            <span className="font-semibold">
              Preview Mode: This article is currently marked as DRAFT and is not visible on the public listing.
            </span>
            <Link to="/admin" className="underline font-bold">
              Return to Admin
            </Link>
          </div>
        )}

        {/* Article Header Card */}
        <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          {/* Featured Image */}
          <div className="aspect-21/9 sm:aspect-16/7 bg-slate-100 overflow-hidden relative">
            <img
              src={getImageSrc(article.imageKey)}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#0A192F]/90 backdrop-blur-xs text-[#C5A059] text-xs font-semibold px-3 py-1 rounded-sm">
              {article.category}
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-6">
            {/* Header Titles */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F] font-bold leading-tight tracking-tight">
                {article.title}
              </h1>

              {article.subtitle && (
                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                  {article.subtitle}
                </p>
              )}
            </div>

            {/* Unboxed Metadata (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{article.author}</span>
                  {article.authorVerified && (
                    <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-normal">
                      Verified Solicitor
                    </span>
                  )}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.publishedDate}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs text-[#0A192F] hover:text-[#C5A059] font-medium transition-colors"
                title="Share this legal article"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            {/* Excerpt Lead Paragraph */}
            <div className="text-base sm:text-lg text-slate-700 font-light leading-relaxed italic bg-[#FAF9F6] p-4 sm:p-5 rounded-lg border-l-4 border-[#C5A059]">
              {article.excerpt}
            </div>

            {/* Article Content Body */}
            <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-800 leading-relaxed pt-2">
              {article.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  {section.heading && (
                    <h2 className="text-2xl font-serif font-bold text-[#0A192F] tracking-tight pt-2 border-b border-slate-100 pb-2">
                      {section.heading}
                    </h2>
                  )}

                  {section.subheading && (
                    <h3 className="text-lg font-serif font-semibold text-[#0A192F]">
                      {section.subheading}
                    </h3>
                  )}

                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {/* Bullet points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2.5 my-3 pl-4 border-l-2 border-[#C5A059]/40 list-none">
                      {section.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Quote block */}
                  {section.quote && (
                    <blockquote className="my-5 p-5 bg-[#FAF9F6] rounded-lg border border-slate-200 space-y-2">
                      <p className="font-serif italic text-sm sm:text-base text-[#0A192F]">
                        “{section.quote.text}”
                      </p>
                      <cite className="block text-xs font-semibold text-slate-500 not-italic">
                        — {section.quote.citation}
                      </cite>
                    </blockquote>
                  )}

                  {/* Statutory Callout Box */}
                  {section.calloutBox && (
                    <div className="my-5 p-5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A192F]">
                        <Scale className="w-4 h-4 text-[#C5A059]" />
                        <span>{section.calloutBox.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {section.calloutBox.content}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Statutory References Footer Strip */}
            {article.statutoryReferences && article.statutoryReferences.length > 0 && (
              <div className="pt-6 border-t border-slate-200 space-y-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Authorities, Statutes &amp; Case Citations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {article.statutoryReferences.map((stat, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-[#FAF9F6] text-slate-700 px-3 py-1 rounded-sm border border-slate-200 font-mono text-[11px]"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Attribution Card */}
            <div className="pt-6 border-t border-slate-200">
              <div className="bg-[#FAF9F6] p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#C5A059] shadow-sm">
                  <img
                    src={IMAGES.solicitorPortrait}
                    alt={article.author}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="font-serif font-bold text-base text-[#0A192F]">
                    {article.author}
                  </h4>
                  <p className="text-xs text-[#C5A059] font-medium">{article.authorRole}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Legal analysis written for general informational guidance. Facing an imminent deadline or tribunal claim? Seek specialist advice immediately.
                  </p>
                </div>
                <Link
                  to="/consultation"
                  className="px-4 py-2 bg-[#0A192F] text-white text-xs font-semibold rounded-md hover:bg-[#112240] transition-colors whitespace-nowrap shrink-0"
                >
                  Book Advice
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="text-2xl font-serif text-[#0A192F] font-bold">
              Related Articles &amp; Further Reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/insights/${rel.slug}`}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#C5A059] transition-all flex flex-col justify-between shadow-xs hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="text-[11px] text-slate-500">
                      <span>{rel.publishedDate}</span> · <span>{rel.readTime}</span>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-[#0A192F] hover:text-[#C5A059] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A192F]">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="pt-4 flex justify-between items-center text-xs">
          <Link
            to="/insights"
            className="text-slate-600 hover:text-[#0A192F] font-medium flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all legal insights</span>
          </Link>

          <Link
            to="/consultation"
            className="text-[#C5A059] hover:underline font-semibold"
          >
            Discuss your case with a solicitor &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
