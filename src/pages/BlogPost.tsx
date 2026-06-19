import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { blogPosts } from '@/lib/posts';
import { useEffect, useState } from 'react';
import { publicUrl } from '@/lib/utils';


      
/*
      <p class="mb-6">Using the Proximal Policy Optimization (PPO) algorithm, POSEIDON's Deep RL model learns from past experiences, figuring out which function placements work well in different situations. The model can then quickly make decisions about where to place functions, responding to dynamic workloads in real time. This is particularly useful in fast-changing environments like MEC networks, where rapid adaptation is key.</p>
      
      <p class="mb-6">Once the function placement is decided by the Deep RL model, POSEIDON applies MILP to determine the most efficient routing policy, ensuring that overloaded nodes can offload tasks to other nodes in the network.</p>
      
      <p class="mb-8">This combination of Deep RL and MILP provides a more scalable and responsive system compared to traditional approaches like NEPTUNE.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">POSEIDON vs. NEPTUNE: Key Differences</h2>
      
      <p class="mb-4">While both POSEIDON and NEPTUNE address the same core challenges in MEC network management, POSEIDON's use of Deep RL offers several potential advantages:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Faster Decision-Making:</strong> POSEIDON's Deep RL model can make decisions about function placement in constant time, significantly reducing the time it takes to respond to changing network conditions. This makes it well-suited for real-time applications.</li>
        <li><strong>Scalability:</strong> As the number of nodes and applications grows, NEPTUNE's performance declines due to the increasing complexity of MILP-based optimization. POSEIDON's hybrid approach maintains consistent performance, even as the network scales.</li>
        <li><strong>Comparable Performance:</strong> Initial tests show that POSEIDON delivers results similar to NEPTUNE in terms of network efficiency and workload distribution. However, POSEIDON achieves this with much faster processing times.</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">A Step Forward, but More Research Ahead</h2>
      
      <p class="mb-4">While POSEIDON offers promising improvements in MEC network management, it's still a developing area of research. The integration of Deep RL with traditional optimization methods is relatively new, and more work is needed to fully explore its potential. For example, understanding the trade-offs between decision speed and accuracy in different types of networks will be important as POSEIDON continues to evolve.</p>
      
      <p class="mb-6">However, the early results are encouraging. POSEIDON has demonstrated the ability to scale more effectively than NEPTUNE, making it an interesting direction for future research in MEC networks.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking Ahead</h2>
      
      <p class="mb-6">As IoT and 5G technologies continue to expand, MEC networks will play an increasingly important role in providing real-time services for smart cities, autonomous vehicles, and other data-driven applications. Managing these networks efficiently is critical, and frameworks like POSEIDON offer new tools for tackling the growing complexity of edge computing.</p>
      
      <p class="mb-6">Researchers and developers interested in exploring this area further can access POSEIDON's source code on <a href="https://github.com/example/poseidon" class="text-sa4s-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> and read the <a href="#" class="text-sa4s-teal-600 hover:underline">research paper</a>. Although it's still early days, POSEIDON offers a glimpse into how AI-driven methods could enhance the future of network management.</p>
      
      <p class="mb-8">POSEIDON represents a step toward more flexible and scalable solutions for managing MEC networks, providing a foundation for future developments in this rapidly evolving field.</p>
    `,
    date: '2024-10-23',
    author: 'Research Team',
    category: 'Network Systems',
    thumbnail: '/images/blogpic/poseidon_networks.png'
  }
*/
export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<{
    slug: string;
    title: string;
    excerpt?: string;
    date: string;
    author: string;
    category: string;
    thumbnail: string;
    content: string;
  } | null>(null);
  
  useEffect(() => {
    if (id && blogPosts[id]) {
      setPost({
        ...blogPosts[id].metadata,
        slug: id,
        content: blogPosts[id].content
      });
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link to="/blogs" className="text-sa4s-teal-600 hover:underline">
            Back to all posts
          </Link>
        </div>
      </div>
);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-sa4s-teal-50 to-sa4s-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              asChild 
              variant="ghost" 
              className="mb-6 text-sa4s-teal-600 hover:bg-sa4s-teal-50"
            >
              <Link to="/blogs" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to all posts
              </Link>
            </Button>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-sa4s-teal-600">
                <span className="bg-sa4s-teal-100 px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <User size={14} className="mr-1" />
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-li:my-1 prose-strong:text-gray-900 prose-a:text-sa4s-teal-600 hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md">
          {post && (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-6" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="mb-2" {...props} />,
                a: ({node, ...props}) => <a className="text-sa4s-teal-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                img: ({node, ...props}) => {
                  const src = props.src ? publicUrl(props.src) : '';
                  return (
                    <div className="my-6">
                      <img
                        src={src}
                        alt={props.alt || ''} 
                        className="rounded-lg shadow-md w-full" 
                      />
                      {props.alt && (
                        <p className="text-center text-sm text-gray-500 mt-2">{props.alt}</p>
                      )}
                    </div>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}
