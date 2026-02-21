"use client";

import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Infosys",
    role: "System Engineer",
    duration: "2025 - Present",
    location: "India",
    current: true,
    description: [
      "Architected and maintained Linux server infrastructure with 99.9% uptime across production environments.",
      "Built comprehensive automation pipelines using Shell scripting and Ansible, reducing manual operations by 60%.",
      "Implemented monitoring solutions and deployment workflows for scalable systems.",
      "Transitioning toward AI engineering with focus on MLOps and intelligent automation.",
    ],
    technologies: ["Linux", "Shell Scripting", "Ansible", "Docker", "Python", "AWS"],
  },
];

const techBadges = [
  "Python", "PyTorch", "TensorFlow", "React", "TypeScript", "Node.js",
  "Figma", "Docker", "PostgreSQL", "Supabase",
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#f17463] uppercase tracking-widest">
            Experience
          </span>
          <div className="h-px flex-1 bg-[#1F1F2A]" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          Work Experience
        </h2>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-[#111118] border border-[#1F1F2A] p-6 md:p-8 "
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A24] border border-[#1F1F2A] flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-[#f17463]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full bg-[#f17463]/10 border border-[#f17463]/20 text-[#f17463] text-xs font-mono">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-[#A1A1AA] text-sm mt-1">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#71717A] font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((desc, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-[#A1A1AA] leading-relaxed"
                  >
                    <ChevronRight className="h-4 w-4 text-[#f17463] flex-shrink-0 mt-0.5" />
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#1A1A24] border border-[#1F1F2A] text-xs text-[#71717A] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies & Tools */}
        <div className="mt-16">
          <h3 className="text-sm font-mono text-[#71717A] uppercase tracking-widest mb-6">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-[#111118] border border-[#1F1F2A] text-sm text-[#A1A1AA] font-mono hover:border-[#f17463]/30 hover:text-white transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
