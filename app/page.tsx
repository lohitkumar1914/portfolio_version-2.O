import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { About } from "@/components/portfolio/about";
import { GitHubActivity } from "@/components/portfolio/github-activity";
import { Blog } from "@/components/portfolio/blog";
import { Contact } from "@/components/portfolio/contact";
import { Setup } from "@/components/portfolio/setup";
import { Quote } from "@/components/portfolio/quote";
import { Footer } from "@/components/portfolio/footer";

import { getSortedPostsData } from "@/lib/markdown";

import { getGitHubStats } from "@/lib/github";

export default async function Home() {
  const projects = getSortedPostsData('projects');
  const blogs = getSortedPostsData('blogs');
  const githubStats = await getGitHubStats(process.env.GITHUB_USERNAME || '');

  return (
    <div className="relative min-h-screen bg-[#0B0B0F]">
      {/* <Navbar /> */}
      <main>
        <Hero />
        {/* <Experience /> */}
        <Projects projects={projects} />
        <About />
        <Blog posts={blogs} />
        <GitHubActivity stats={githubStats} />
        <Contact />
        {/* <Setup />
        <Quote /> */}
      </main>
      <Footer />
    </div>
  );
}
