import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link
            key={post.uuid}
            href={`/blog/${post.uuid}`}
            className="block group"
          >
            <article className="p-6 bg-white dark:bg-gray-800 rounded-2xl transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold group-hover:text-violet-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()} · {post.author.name}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 