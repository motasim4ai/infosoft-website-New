import { Link } from "@/navigation";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    slug: "zatca-phase-2-compliance",
    title: "ZATCA Phase 2: What Your Business Needs to Know",
    excerpt: "Complete guide to ZATCA e-invoicing Phase 2 implementation and compliance requirements.",
    category: "Compliance",
    author: "Infosoft Team",
    date: "2025-01-15",
    image: "📄",
  },
  {
    id: "2",
    slug: "inventory-management-tips",
    title: "5 Inventory Management Tips for Retail Success",
    excerpt: "Proven strategies to optimize your inventory management and reduce costs.",
    category: "Business Tips",
    author: "Infosoft Team",
    date: "2025-01-10",
    image: "📦",
  },
  {
    id: "3",
    slug: "cloud-migration-guide",
    title: "The Complete Guide to Cloud Migration",
    excerpt: "Everything you need to know about moving your business to the cloud.",
    category: "Technology",
    author: "Infosoft Team",
    date: "2025-01-05",
    image: "☁️",
  },
  {
    id: "4",
    slug: "restaurant-pos-features",
    title: "Must-Have Features in Modern Restaurant POS",
    excerpt: "Essential features every restaurant needs in their point of sale system.",
    category: "Industry Insights",
    author: "Infosoft Team",
    date: "2024-12-28",
    image: "🍽️",
  },
  {
    id: "5",
    slug: "erp-benefits",
    title: "How ERP Systems Transform Business Operations",
    excerpt: "Discover the key benefits of implementing an ERP system in your organization.",
    category: "ERP",
    author: "Infosoft Team",
    date: "2024-12-20",
    image: "💼",
  },
  {
    id: "6",
    slug: "gold-business-software",
    title: "Digital Transformation for Gold & Jewelry Businesses",
    excerpt: "How technology is revolutionizing the gold and jewelry industry in Saudi Arabia.",
    category: "Industry Insights",
    author: "Infosoft Team",
    date: "2024-12-15",
    image: "💎",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-mesh-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-text-secondary">
              Insights and updates from Infosoft
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Post */}
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="glass-card p-8 md:p-12 mb-12 card-hover">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center text-9xl">
                    {blogPosts[0].image}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      {blogPosts[0].category}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                    <p className="text-text-secondary mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="glass-card p-6 card-hover h-full flex flex-col">
                    <div className="text-6xl mb-4">{post.image}</div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-text-secondary mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-text-secondary pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
