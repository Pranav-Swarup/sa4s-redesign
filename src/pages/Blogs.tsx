
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { allPosts } from '@/lib/posts';
import { publicUrl } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const categories = ['All', ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)))] as string[];

const BlogCardImage = ({ src, alt }: { src: string; alt: string }) => {
  const [hasError, setHasError] = useState(false);
  if (hasError) return null;
  return (
    <div className="w-full aspect-[4/3] bg-[#EAE4D6]">
      <img
        src={publicUrl(src)}
        alt={alt}
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

const Blogs = () => {
  const [searchTerm, setSearchTerm]           = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage]         = useState(1);
  const postsPerPage = 6;

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch   = (post.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (post.excerpt || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages  = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex  = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-[#0C2118] border-b border-[#1C4030] py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs text-[#52B788] tracking-[0.25em] uppercase font-semibold mb-3">Writing</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#EDE8DF]">Blogs</h1>
          <p className="mt-3 text-[#8DB8A2]">Insights, updates, and discoveries from our research community.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">

        {/* Search & filter */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6455]" size={16} />
            <input
              type="text"
              placeholder="Search posts…"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F0EBE1] border border-[#D8D2C4] rounded-lg text-[#1A1710] placeholder:text-[#6B6455] focus:outline-none focus:border-[#2D6A4F] transition-colors duration-150"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 text-sm bg-[#F0EBE1] border border-[#D8D2C4] rounded-lg text-[#6B6455] hover:border-[#2D6A4F]/40 hover:text-[#1A1710] transition-colors duration-150 whitespace-nowrap">
                Category: {selectedCategory}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F0EBE1] border-[#D8D2C4]">
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
                  className="text-sm text-[#1A1710] hover:bg-[#EAE4D6] cursor-pointer"
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {currentPosts.map((post) =>
            post && post.slug ? (
              <div
                key={post.slug}
                className="bg-[#F0EBE1] border border-[#D8D2C4] hover:border-[#2D6A4F]/40 rounded-xl overflow-hidden hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                {post.thumbnail && <BlogCardImage src={post.thumbnail} alt={post.title || 'Blog post thumbnail'} />}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-sm font-bold text-[#1A1710] mb-2 leading-snug">
                    {post.title || 'Untitled Post'}
                  </h2>
                  <p className="text-sm text-[#6B6455] mb-4 line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt || 'No excerpt available.'}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B6455] mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '—'}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={11} />
                      {post.author || 'SA4S'}
                    </span>
                  </div>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2D6A4F] hover:text-[#1A1710] transition-colors duration-150 mt-auto group"
                  >
                    Read more
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-40' : 'cursor-pointer'}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-40' : 'cursor-pointer'}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Blogs;
