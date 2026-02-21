"use client";

import { Monitor, Terminal, Code2, BookOpen, Film, ChevronRight } from "lucide-react";

interface SetupItem {
  icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
}

const devSetup: SetupItem[] = [
  {
    icon: Monitor,
    title: "Gear / Stack",
    description: "Python, PyTorch, React, Docker, Linux daily.",
    href: "#",
  },
  {
    icon: Code2,
    title: "VSCode / Cursor Setup",
    description: "VSCode / Cursor editor core setup.",
    href: "#",
  },
  {
    icon: Terminal,
    title: "Terminal Setup",
    description: "Terminal setup for macOS & Linux.",
    href: "#",
  },
];

const lifeItems: SetupItem[] = [
  {
    icon: BookOpen,
    title: "Books",
    description: "Books that have influenced my thinking and growth.",
    href: "#",
  },
  {
    icon: Film,
    title: "Movies",
    description: "Movies and shows that have inspired and entertained me.",
    href: "#",
  },
];

export function Setup() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Setup */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#f17463] uppercase tracking-widest">
              Developer
            </span>
            <div className="h-px flex-1 bg-[#1F1F2A]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Setup
          </h2>

          <div className="space-y-3">
            {devSetup.map((item, i) => (
              <a
                key={i}
                href={item.href || "#"}
                className="group flex items-center gap-4 rounded-xl bg-[#111118] border border-[#1F1F2A] p-4 hover:border-[#f17463]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1A1A24] border border-[#1F1F2A] flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-4 w-4 text-[#f17463]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#71717A] mt-0.5 truncate">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-[#71717A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Life */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest">
              Personal
            </span>
            <div className="h-px flex-1 bg-[#1F1F2A]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Life
          </h2>

          <div className="space-y-3">
            {lifeItems.map((item, i) => (
              <a
                key={i}
                href={item.href || "#"}
                className="group flex items-center gap-4 rounded-xl bg-[#111118] border border-[#1F1F2A] p-4 hover:border-[#06B6D4]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1A1A24] border border-[#1F1F2A] flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-4 w-4 text-[#06B6D4]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#71717A] mt-0.5 truncate">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-[#71717A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
