"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Star, ChevronRight } from "lucide-react";
import { PostData } from "@/lib/markdown";

interface ProjectsProps {
  projects: PostData[];
}

export function Projects({ projects }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  // Filter for featured projects if you have a 'featured' field in frontmatter, or just take the first few
  const featuredProjects = projects.filter(p => p.featured !== false); // Default to true if not specified, or adjust logic
  const displayed = showAll ? featuredProjects : featuredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#f17463] uppercase tracking-widest">
            Featured
          </span>
          <div className="h-px flex-1 bg-[#1F1F2A]" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          Projects
        </h2>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayed.map((project, i) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#111118] border border-[#1F1F2A] overflow-hidden  flex flex-col"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1A1A24] text-muted-foreground">
                    <span className="text-4xl font-bold opacity-20">{project.type || 'Project'}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />

                {/* Category badge */}
                {project.category && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#0B0B0F]/80 backdrop-blur-sm border border-[#1F1F2A] text-xs text-[#A1A1AA] font-mono">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Project info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#71717A]">
                    {project.stars && (
                      <span className="flex items-center gap-1 text-xs font-mono">
                        <Star className="h-3 w-3" />
                        {project.stars}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#71717A] leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tech_stack?.slice(0, 4).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs bg-[#1A1A24] border border-[#1F1F2A] text-[#71717A] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"

                      className="flex items-center gap-CC1.5 text-sm text-[#ffffff] hover:text-[#f49385] transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-1.5 text-sm text-[#A1A1AA] hover:text-white hover:underline transition-colors  ml-auto"
                  >
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show all toggle */}
        {!showAll && projects.length > 4 && (
          <div className="flex justify-center mt-10">
            <Link href="/projects">
              <button
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#111118] border border-[#1F1F2A] text-sm text-[#A1A1AA] font-medium hover:text-white hover:border-[#f17463]/30 transition-all"
              >
                View all projects
                <ExternalLink className="h-4 w-4" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
