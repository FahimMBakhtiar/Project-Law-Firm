export type LegalCategory =
  | 'Immigration & Asylum'
  | 'Property & Conveyancing'
  | 'Family & Divorce'
  | 'Employment Disputes'
  | 'Personal Injury'
  | 'Civil & Commercial'
  | 'Wills & Probate'
  | 'Business & Corporate'
  | 'Legal Updates'
  | 'Firm News';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface LegalService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullOverview: string;
  iconName: 'Globe' | 'Home' | 'Users' | 'Briefcase' | 'Car' | 'Scale' | 'FileText' | 'Building2';
  targetAudience: string;
  commonSituations: string[];
  firmSupportServices: string[];
  statutoryBases?: string[];
  faqs: ServiceFAQ[];
  relatedArticleSlugs: string[];
  turnaroundEstimate?: string;
}

export interface ArticleContentSection {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  quote?: {
    text: string;
    citation: string;
  };
  calloutBox?: {
    title: string;
    content: string;
    type: 'statute' | 'tip' | 'warning';
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: LegalCategory;
  author: string;
  authorRole: string;
  authorVerified: boolean;
  publishedDate: string;
  readTime: string;
  excerpt: string;
  featured: boolean;
  status: 'published' | 'draft';
  imageKey?: 'immigrationDocs' | 'propertyHomes' | 'lawBooksScales' | 'solicitorPortrait' | 'heroSkyline';
  statutoryReferences: string[];
  sections: ArticleContentSection[];
  tags: string[];
  relatedServiceSlug?: string;
  updatedAt?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  verifiedTitle: boolean;
  credentials: string;
  specialties: string[];
  phone?: string;
  email?: string;
  bio: string;
  imageKey?: 'solicitorPortrait';
  gender?: 'male' | 'female';
}

export interface ConsultationEnquiry {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  urgency: 'routine' | 'urgent' | 'time-sensitive';
  preferredContact: 'phone' | 'email' | 'whatsapp';
  message: string;
  consentAgreed: boolean;
  submittedAt: string;
  status: 'pending' | 'reviewed';
}
