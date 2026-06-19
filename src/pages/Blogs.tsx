
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { allPosts } from '@/lib/posts';
import { publicUrl } from '@/lib/utils';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  author: string;
  category: string;
  thumbnail: string;
}

/* const blogPosts: BlogPost[] = [
  {
    id: 'poseidon',
    title: 'POSEIDON: A New Direction in Managing MEC Networks',
    excerpt: 'Exploring how POSEIDON combines Deep RL with traditional optimization for efficient MEC network management.',
    date: '2024-10-23',
    author: 'Research Team',
    category: 'Network Systems',
    thumbnail: '/images/blogpic/poseidon_networks.png'
  },
  {
    id: '1',
    title: 'Adaptive Systems in Cloud Computing',
    excerpt: 'Exploring how self-adaptive systems can revolutionize cloud infrastructure management through intelligent resource allocation and automated scaling.',
    date: '2024-03-15',
    author: 'Dr. Rajesh Kumar',
    category: 'Cloud Computing',
    thumbnail: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Energy-Efficient Machine Learning',
    excerpt: 'Recent breakthroughs in reducing energy consumption for ML workloads while maintaining performance benchmarks.',
    date: '2024-03-10',
    author: 'Priya Sharma',
    category: 'Green Computing',
    thumbnail: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'Context-Aware Task Scheduling',
    excerpt: 'How contextual information can improve task scheduling algorithms in distributed computing environments.',
    date: '2024-03-05',
    author: 'Dr. Sarah Chen',
    category: 'Distributed Systems',
    thumbnail: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Self-Healing Network Architectures',
    excerpt: 'Implementation strategies for networks that automatically detect and recover from failures using ML techniques.',
    date: '2024-02-28',
    author: 'Vikram Singh',
    category: 'Network Systems',
    thumbnail: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'Sustainable Computing Practices',
    excerpt: 'Best practices for developing environmentally conscious software systems that minimize carbon footprint.',
    date: '2024-02-20',
    author: 'Dr. Michael Brown',
    category: 'Green Computing',
    thumbnail: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'AI-Driven System Optimization',
    excerpt: 'Leveraging artificial intelligence to optimize system performance and resource utilization in real-time.',
    date: '2024-02-15',
    author: 'Lisa Zhang',
    category: 'AI Systems',
    thumbnail: '/placeholder.svg'
  }
];

*/
const categories = ['All', ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)))] as string[];

const BlogCardImage = ({ src, alt }: { src: string; alt: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <div className="w-full aspect-[4/3] bg-gray-100">
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = allPosts.filter(post => {
    const postTitle = post.title || '';
    const postExcerpt = post.excerpt || '';
    const postCategory = post.category || '';

    const matchesSearch = postTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         postExcerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || postCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sa4s-teal-50 to-sa4s-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blogs
          </h1>
          <p className="text-xl text-gray-600">
            Insights, updates, and discoveries from our research community.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                Filter by category: {selectedCategory}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Masonry Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentPosts.map((post) => (
            post && post.slug && (
            <div
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {post.thumbnail && <BlogCardImage src={post.thumbnail} alt={post.title || 'Blog post thumbnail'} />}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title || 'Untitled Post'}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt || 'No excerpt available.'}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">
                    {post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Date not available'}
                  </span>
                  <User size={16} className="mr-1" />
                  <span>{post.author || 'Unknown Author'}</span>
                </div>
                <Button asChild className="w-full bg-sa4s-teal-600 hover:bg-sa4s-teal-700">
                  <Link to={`/blogs/${post.slug}`}>
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            )
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
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
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
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
