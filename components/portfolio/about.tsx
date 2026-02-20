import Image from "next/image";
import { Mail, Globe, Phone, Github, Linkedin } from "lucide-react";

const softwareSkills = [
  { abbr: "Py", name: "Python", desc: "AI/ML, Scripting", color: "#3776AB" },
  { abbr: "PT", name: "PyTorch", desc: "Deep Learning", color: "#EE4C2C" },
  { abbr: "TS", name: "TypeScript", desc: "Full Stack Dev", color: "#3178C6" },
  { abbr: "Re", name: "React", desc: "UI Development", color: "#61DAFB" },
];

const softSkills = [
  "Problem Solving",
  "System Thinking",
  "Fast Learner",
  "Team Collaboration",
  "Open Source Mindset",
];

const experiences = [
  { year: "2024 - Present", role: "System Engineer", company: "Infosys" }

];

const education = {
  years: "20201- 2025",
  university: "Anil Neerukonda Institute Of Technology & Sciences",
  degree: "B.Tech in Electronic and Communication Engineering",
};

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Telugu", level: "Native" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#7C3AED] uppercase tracking-widest">
            About
          </span>
          <div className="h-px flex-1 bg-[#1F1F2A]" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Me</h2>

        {/* Resume Card */}
        <div className="rounded-3xl border border-[#1F1F2A] bg-[#111118] overflow-hidden">
          {/* Top Section: Photo + Intro + Contact */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] max-w-[220px] rounded-2xl overflow-hidden border-2 border-[#1F1F2A]">
                <Image
                  src="/images/avatar.jpg"
                  alt="Lohit Kumar"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Intro */}
              <div className="flex flex-col gap-5">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                  HELLO<span className="text-[#7C3AED]">!</span>
                </h3>

                <div className="space-y-3 text-[#A1A1AA] text-sm leading-relaxed max-w-lg">
                  <p>
                    My name is <span className="text-white font-semibold">Lohit Kumar</span>. I am an{" "}
                    <span className="text-white font-semibold">AI Engineer</span> and{" "}
                    <span className="text-white font-semibold">Full Stack Developer</span>. I have been building
                    AI-powered applications and contributing to open source for the past few years.
                    I love working on Generative AI, LLMs, and intelligent automation systems.
                  </p>
                  <p>
                    I am passionate about pushing the boundaries of what AI can do and turning research into
                    production-ready systems that solve real problems.
                  </p>
                </div>

                {/* Contact pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href="mailto:lohitkumar1914@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0B0F] border border-[#1F1F2A] text-xs text-[#A1A1AA] hover:border-[#7C3AED]/40 hover:text-white transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    lohitkumar1914@gmail.com
                  </a>
                  <a
                    href="https://github.com/lohitkumar1914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0B0F] border border-[#1F1F2A] text-xs text-[#A1A1AA] hover:border-[#7C3AED]/40 hover:text-white transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    github.com/lohitkumar1914
                  </a>
                  <a
                    href="https://linkedin.com/in/naram-lohit-kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-xs text-[#7C3AED] hover:bg-[#7C3AED]/20 transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    @lohitkumar
                  </a>
                  <a
                    href="https://lohit.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0B0F] border border-[#1F1F2A] text-xs text-[#A1A1AA] hover:border-[#7C3AED]/40 hover:text-white transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    lohit.dev
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#1F1F2A] mx-6 md:mx-10" />

          {/* Bento Grid: Education, Experience, Skills, Software, Languages */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Education */}
              <div className="rounded-2xl bg-[#0B0B0F] border border-[#1F1F2A] p-5 flex flex-col gap-3">
                <h4 className="text-base font-bold text-white">Education</h4>
                <div>
                  <p className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
                    {education.years}
                  </p>
                  <p className="text-sm font-semibold text-white mt-1">
                    {education.university}
                  </p>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    {education.degree}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="rounded-2xl bg-[#0B0B0F] border border-[#1F1F2A] p-5 flex flex-col gap-3">
                <h4 className="text-base font-bold text-white">Experience</h4>
                <div className="flex flex-col gap-4">
                  {experiences.map((exp) => (
                    <div key={exp.year} className="flex gap-3 items-start">
                      <div className="flex flex-col items-center mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                        <div className="w-px h-full bg-[#1F1F2A] min-h-[16px]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
                          {exp.year}
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {exp.role}
                        </p>
                        <p className="text-xs text-[#71717A]">{exp.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="rounded-2xl bg-[#0B0B0F] border border-[#1F1F2A] p-5 flex flex-col gap-3">
                <h4 className="text-base font-bold text-white">Skills</h4>
                <ul className="flex flex-col gap-1.5">
                  {softSkills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-[#A1A1AA] flex items-center gap-2"
                    >
                      <span className="text-[#7C3AED]">-</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Software Skills */}
              <div className="md:col-span-2 rounded-2xl bg-[#0B0B0F] border border-[#1F1F2A] p-5 flex flex-col gap-4">
                <h4 className="text-base font-bold text-white">
                  Software Skills
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {softwareSkills.map((sw) => (
                    <div key={sw.name} className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                        style={{
                          backgroundColor: `${sw.color}20`,
                          color: sw.color,
                        }}
                      >
                        {sw.abbr}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {sw.name}
                        </p>
                        <p className="text-[10px] text-[#71717A]">{sw.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="rounded-2xl bg-[#0B0B0F] border border-[#1F1F2A] p-5 flex flex-col gap-3">
                <h4 className="text-base font-bold text-white">Language</h4>
                <div className="flex flex-col gap-2">
                  {languages.map((lang) => (
                    <p key={lang.name} className="text-sm text-white">
                      {lang.name}{" "}
                      <span className="text-[10px] text-[#71717A]">
                        ({lang.level})
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
