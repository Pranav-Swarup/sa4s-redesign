import fm from 'front-matter';

export interface BlogPostMeta {
  title: string;
  date: string;
  author: string;
  category: string;
  thumbnail: string;
  excerpt?: string;
}

export interface BlogPost {
  metadata: BlogPostMeta;
  content: string;
}

// Eagerly import all markdown files under ../blog as raw strings during build time.
// The key of the record is the relative path like '../blog/poseidon.md'.
const markdownFiles = import.meta.glob('../blog/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
console.log('Loaded markdown files:', Object.keys(markdownFiles));

export const blogPosts: Record<string, BlogPost> = {};

for (const path in markdownFiles) {
  // Derive slug from file path – anything between last slash and .md
  const match = path.match(/([\\/])([^\\/]+?)(?:\.md)?$/);
  if (!match) continue;
  const slug = match[2];

  const raw = markdownFiles[path];
  const { attributes, body } = fm(raw);

  blogPosts[slug] = {
    metadata: attributes as BlogPostMeta,
    content: body,
  };
}

// Convenience list of all posts with slug included, useful for listings.
export const allPosts = Object.entries(blogPosts)
  .map(([slug, post]) => {
    const metadata = (post.metadata as any) || {};
    return {
      slug,
      title: metadata.title || 'Untitled Post',
      excerpt: metadata.excerpt || '',
      date: metadata.date || new Date().toISOString(),
      author: metadata.author || 'Unknown Author',
      category: metadata.category || 'Uncategorized',
      thumbnail: metadata.thumbnail,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
