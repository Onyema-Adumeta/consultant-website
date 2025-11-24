// Article data structure
export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  content: React.ReactNode;
}

// Import article content
import { SpreadsheetsOutgrownContent } from '../articles/spreadsheets-outgrown';
import { CostOfBadDataContent } from '../articles/cost-of-bad-data';
import { DataPipelinesDemystifiedContent } from '../articles/data-pipelines-demystified';
import { GutFeelToDataDrivenContent } from '../articles/gut-feel-to-data-driven';
import { ROIDataInfrastructureContent } from '../articles/roi-data-infrastructure';
import { BookkeepingMistakesContent } from '../articles/bookkeeping-mistakes-smbs';
import { FinancialMetricsContent } from '../articles/financial-metrics-smbs';
import { AutomateBookkeepingContent } from '../articles/automate-bookkeeping';

// All articles with full content
const articles: Article[] = [
  {
    id: 'spreadsheets-outgrown',
    slug: 'spreadsheets-outgrown',
    title: '5 Signs Your Business Has Outgrown Spreadsheets',
    category: 'Data Engineering',
    date: 'April 2025',
    readTime: '8 min read',
    excerpt: 'Excel is powerful, but there comes a point when it becomes your biggest bottleneck. Learn the warning signs that it\'s time to upgrade to a proper data pipeline.',
    author: 'Onyema Davidson Adumeta',
    content: SpreadsheetsOutgrownContent
  },
  {
    id: 'cost-of-bad-data',
    slug: 'cost-of-bad-data',
    title: 'The Real Cost of Bad Data: Why Quality Matters More Than Volume',
    category: 'Business Intelligence',
    date: 'June 2025',
    readTime: '9 min read',
    excerpt: 'More data doesn\'t always mean better decisions. Discover how poor data quality is silently costing your business and what you can do about it.',
    author: 'Onyema Davidson Adumeta',
    content: CostOfBadDataContent
  },
  {
    id: 'data-pipelines-demystified',
    slug: 'data-pipelines-demystified',
    title: 'Data Pipelines Demystified: A Non-Technical Guide for Business Leaders',
    category: 'Data Engineering',
    date: 'August 2025',
    readTime: '7 min read',
    excerpt: 'You don\'t need to be a data engineer to understand the value of automated data pipelines. Here\'s what every executive should know.',
    author: 'Onyema Davidson Adumeta',
    content: DataPipelinesDemystifiedContent
  },
  {
    id: 'gut-feel-to-data-driven',
    slug: 'gut-feel-to-data-driven',
    title: 'From Gut Feel to Data-Driven: Making the Cultural Shift',
    category: 'Business Analysis',
    date: 'September 2025',
    readTime: '10 min read',
    excerpt: 'Technology is only half the battle. Learn how to build a data-driven culture that actually uses the insights you\'re generating.',
    author: 'Onyema Davidson Adumeta',
    content: GutFeelToDataDrivenContent
  },
  {
    id: 'roi-of-data-infrastructure',
    slug: 'roi-of-data-infrastructure',
    title: 'ROI of Data Infrastructure: How to Calculate the Value of Your Investment',
    category: 'Business Consulting',
    date: 'November 2025',
    readTime: '11 min read',
    excerpt: 'Building the business case for data infrastructure can be challenging. Here\'s a framework to quantify the benefits and justify the investment.',
    author: 'Onyema Davidson Adumeta',
    content: ROIDataInfrastructureContent
  },
  {
    id: 'bookkeeping-mistakes-smbs',
    slug: 'bookkeeping-mistakes-smbs',
    title: '7 Bookkeeping Mistakes That Cost Small Businesses Thousands',
    category: 'Accounting & Finance',
    date: 'Jun 2025',
    readTime: '9 min read',
    excerpt: 'From mixing personal and business expenses to ignoring reconciliations—discover the costly mistakes most SMBs make and how to avoid them.',
    author: 'Onyema Davidson Adumeta',
    content: BookkeepingMistakesContent
  },
  {
    id: 'financial-metrics-smbs',
    slug: 'financial-metrics-smbs',
    title: 'The 8 Financial Metrics Every Small Business Owner Must Track',
    category: 'Accounting & Finance',
    date: 'January 2025',
    readTime: '10 min read',
    excerpt: 'Revenue isn\'t everything. Learn which financial metrics actually predict success—and how to track them without hiring a CFO.',
    author: 'Onyema Davidson Adumeta',
    content: FinancialMetricsContent
  },
  {
    id: 'automate-bookkeeping',
    slug: 'automate-bookkeeping',
    title: 'How to Automate Your Bookkeeping (Without Losing Control)',
    category: 'Accounting & Finance',
    date: 'May 2025',
    readTime: '8 min read',
    excerpt: 'Automation can save 10+ hours per month—but only if you set it up right. A practical guide to tools, workflows, and what to automate first.',
    author: 'Onyema Davidson Adumeta',
    content: AutomateBookkeepingContent
  }
];

// Get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

// Get all article slugs (for static generation)
export function getAllArticleSlugs(): string[] {
  return articles.map(article => article.slug);
}

// Get all articles
export function getAllArticles(): Article[] {
  return articles;
}

// Get related articles (same category, excluding current)
export function getRelatedArticles(slug: string, limit: number = 3): Article[] {
  const currentArticle = getArticleBySlug(slug);
  if (!currentArticle) return [];
  
  return articles
    .filter(article => 
      article.category === currentArticle.category && 
      article.slug !== slug
    )
    .slice(0, limit);
}