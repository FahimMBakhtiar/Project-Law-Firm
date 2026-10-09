import { INITIAL_ARTICLES } from '../data/articles';
import { Article, ConsultationEnquiry } from '../types';

const ARTICLES_STORAGE_KEY = 'karkon_legal_articles_v1';
const ENQUIRIES_STORAGE_KEY = 'karkon_legal_enquiries_v1';

export function getStoredArticles(): Article[] {
  try {
    const raw = localStorage.getItem(ARTICLES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(INITIAL_ARTICLES));
      return INITIAL_ARTICLES;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_ARTICLES;
  } catch (err) {
    console.error('Failed to read articles from localStorage:', err);
    return INITIAL_ARTICLES;
  }
}

export function getPublishedArticles(): Article[] {
  const articles = getStoredArticles();
  return articles.filter((a) => a.status === 'published');
}

export function getArticleBySlug(slug: string, allowDraft = false): Article | undefined {
  const articles = getStoredArticles();
  return articles.find((a) => a.slug === slug && (allowDraft || a.status === 'published'));
}

export function saveArticle(article: Article): void {
  const current = getStoredArticles();
  const index = current.findIndex((a) => a.id === article.id || a.slug === article.slug);
  let updated: Article[];

  const stamp = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const articleToSave: Article = {
    ...article,
    updatedAt: stamp,
  };

  if (index >= 0) {
    updated = [...current];
    updated[index] = articleToSave;
  } else {
    updated = [articleToSave, ...current];
  }

  localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(updated));
}

export function deleteArticle(id: string): void {
  const current = getStoredArticles();
  const updated = current.filter((a) => a.id !== id);
  localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(updated));
}

export function resetArticlesToDefault(): Article[] {
  localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(INITIAL_ARTICLES));
  return INITIAL_ARTICLES;
}

export function exportArticlesAsJSON(): string {
  const articles = getStoredArticles();
  return JSON.stringify(articles, null, 2);
}

export function importArticlesFromJSON(jsonText: string): { success: boolean; count: number; error?: string } {
  try {
    const parsed = JSON.parse(jsonText);
    if (!Array.isArray(parsed)) {
      return { success: false, count: 0, error: 'Import payload must be an array of articles.' };
    }

    // Basic schema check
    const valid = parsed.every(
      (item) => typeof item.id === 'string' && typeof item.title === 'string' && typeof item.slug === 'string'
    );

    if (!valid) {
      return { success: false, count: 0, error: 'Invalid article format. Missing required fields (id, title, slug).' };
    }

    localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(parsed));
    return { success: true, count: parsed.length };
  } catch (err) {
    return { success: false, count: 0, error: (err as Error).message || 'Invalid JSON syntax.' };
  }
}

// Enquiry storage helpers
export function saveConsultationEnquiry(enquiry: ConsultationEnquiry): void {
  try {
    const raw = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
    const list: ConsultationEnquiry[] = raw ? JSON.parse(raw) : [];
    list.unshift(enquiry);
    localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.error('Failed to save consultation enquiry:', err);
  }
}

export function getStoredConsultationEnquiries(): ConsultationEnquiry[] {
  try {
    const raw = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to read consultation enquiries:', err);
    return [];
  }
}
