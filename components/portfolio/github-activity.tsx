import { Github, GitCommit, GitPullRequest, Star, FolderGit2 } from "lucide-react";
import { ActivityCalendar } from "react-activity-calendar";
import { GitHubStats } from "@/lib/github";
import Link from "next/link";
// import "react-activity-calendar/dist/style.css"; // Some versions might need this, but usually not v2+

interface GitHubActivityProps {
  stats: GitHubStats | null;
}

export function GitHubActivity({ stats }: GitHubActivityProps) {
  if (!stats) return null;

  const displayStats = [
    { label: "Total Contributions", value: stats.totalContributions.toLocaleString(), icon: GitCommit },
    { label: "Public Repositories", value: stats.repos.toLocaleString(), icon: FolderGit2 },
    { label: "Stars Earned", value: stats.stars.toLocaleString(), icon: Star },
  ];

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest">
            Open Source
          </span>
          <div className="h-px flex-1 bg-[#1F1F2A]" />
        </div>

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            GitHub Activity
          </h2>
          <a
            href={`https://github.com/${stats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#71717A] hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">View Profile</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {displayStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-[#111118] border border-[#1F1F2A] p-4 md:p-6 text-center"
            >
              <stat.icon className="h-5 w-5 text-[#7C3AED] mx-auto mb-2" />
              <p className="text-xl md:text-2xl font-bold text-white font-mono">
                {stat.value}
              </p>
              <p className="text-xs text-[#71717A] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contribution graph */}
        <div className="rounded-2xl bg-[#111118] border border-[#1F1F2A] p-4 md:p-6 overflow-x-auto flex justify-center">
          <ActivityCalendar
            data={stats.contributions}
            theme={{
              light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            labels={{
              totalCount: `{{count}} contributions in the last year`,
            }}
            colorScheme="dark"
            maxLevel={4}
          />
        </div>
      </div>
    </section>
  );
}
