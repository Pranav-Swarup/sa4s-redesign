import fm from 'front-matter';
import { isValid, parse, parseISO } from 'date-fns';

export interface NewsItem {
  date: string;
  headline: string;
  description?: string;
  sourceUrl?: string;
}

interface NewsFrontMatter {
  date: string;
  headline: string;
  sourceUrl?: string;
}

const newsFiles = import.meta.glob('./news/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;

// Load news from markdown files
export async function loadNewsFromMarkdown(): Promise<NewsItem[]> {
  const loadedItems = await Promise.all(
    Object.values(newsFiles).map(async (loadContent) => parseMarkdownNews(await loadContent()))
  );

  return sortNewsItems(loadedItems.filter((item): item is NewsItem => item !== null));
}

export async function loadLatestNewsFromMarkdown(limit: number): Promise<NewsItem[]> {
  const latestPaths = Object.keys(newsFiles).sort().reverse().slice(0, limit);

  const loadedItems = await Promise.all(
    latestPaths.map(async (path) => parseMarkdownNews(await newsFiles[path]()))
  );

  return sortNewsItems(loadedItems.filter((item): item is NewsItem => item !== null));
}

function parseMarkdownNews(content: string): NewsItem | null {
  try {
    const parsed = fm<NewsFrontMatter>(content);
    
    if (!parsed.attributes.date || !parsed.attributes.headline) {
      return null;
    }
    
    const description = parsed.body.trim() || undefined;
    
    return {
      date: parsed.attributes.date,
      headline: parsed.attributes.headline,
      description,
      sourceUrl: parsed.attributes.sourceUrl,
    };
  } catch (error) {
    console.error('Error parsing markdown news:', error);
    return null;
  }
}

function parseNewsDate(dateStr: string): Date {
  const input = dateStr.trim();

  // Handles ranges like "7 and 8 May 2025" by picking the first day.
  const rangeMatch = input.match(/^(\d{1,2})\s+and\s+\d{1,2}\s+([A-Za-z]+)\s+(\d{4})$/);
  if (rangeMatch) {
    const [, firstDay, month, year] = rangeMatch;
    const ranged = parse(`${firstDay} ${month} ${year}`, 'd MMMM yyyy', new Date());
    if (isValid(ranged)) return ranged;
  }

  // Remove ordinal suffixes such as "4th", "1st".
  const normalized = input.replace(/\b(\d{1,2})(st|nd|rd|th)\b/gi, '$1');

  const dayMonthYear = parse(normalized, 'd MMMM yyyy', new Date());
  if (isValid(dayMonthYear)) return dayMonthYear;

  const monthYear = parse(normalized, 'MMMM yyyy', new Date());
  if (isValid(monthYear)) return monthYear;

  const iso = parseISO(normalized);
  if (isValid(iso)) return iso;

  const fallbackNative = new Date(normalized);
  if (!Number.isNaN(fallbackNative.getTime())) return fallbackNative;

  // Keep unknown dates stable and sorted at the end.
  console.warn(`Could not parse date: ${dateStr}`);
  return new Date(0);
}

function sortNewsItems(newsItems: NewsItem[]): NewsItem[] {
  return newsItems.sort((a, b) => {
    const dateA = parseNewsDate(a.date);
    const dateB = parseNewsDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

// Cache for loaded news items
let cachedNewsItems: NewsItem[] | null = null;
const latestNewsCache = new Map<number, NewsItem[]>();

// Get all news items (with caching)
export async function getAllNewsItems(): Promise<NewsItem[]> {
  if (cachedNewsItems === null) {
    cachedNewsItems = await loadNewsFromMarkdown();
  }
  return cachedNewsItems;
}

export async function getLatestNewsItems(limit: number): Promise<NewsItem[]> {
  if (!latestNewsCache.has(limit)) {
    latestNewsCache.set(limit, await loadLatestNewsFromMarkdown(limit));
  }

  return latestNewsCache.get(limit) ?? [];
}

// Clear cache (useful for development)
export function clearNewsCache(): void {
  cachedNewsItems = null;
  latestNewsCache.clear();
}

// For backward compatibility, export the static data as well
export const allNewsItems: NewsItem[] = [];
