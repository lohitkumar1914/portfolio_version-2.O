"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { PostData } from "@/lib/markdown";

interface BlogProps {
  posts: PostData[];
}

export function Blog({ posts }: BlogProps) {
  // Display only the first 2 posts
  const displayedPosts = posts.slice(0, 2);

  return (
    <section id="blog" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#f17463] uppercase tracking-widest">
            Writing
          </span>
          <div className="h-px flex-1 bg-[#1F1F2A]" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          Blogs
        </h2>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.id}`}
              className="group rounded-2xl bg-[#111118] border border-[#1F1F2A] overflow-hidden card-glow flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-muted">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1A1A24] text-muted-foreground">
                    <span className="text-4xl font-bold opacity-20">Blog</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#f17463] transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-[#71717A] leading-relaxed mb-4 line-clamp-3">
                  {post.summary || post.description}
                </p>

                {/* Tags */}
                {post.category && (
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    <span
                      className="flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-[#1A1A24] border border-[#1F1F2A] text-[#71717A] font-mono"
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {post.category}
                    </span>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-[#71717A] font-mono">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-[#f17463] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show all blogs */}
        <div className="flex justify-center mt-10">
          <Link
            href="/blogs"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#111118] border border-[#1F1F2A] text-sm text-[#A1A1AA] font-medium hover:text-white hover:border-[#f17463]/30 transition-all"
          >
            Show all blogs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
