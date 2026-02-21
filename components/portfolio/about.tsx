"use client";

import Image from "next/image";
import { Mail, Globe, Phone, Github, Linkedin, Cpu, Braces, Sparkles, Database } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const techStackRow1 = [
  { name: "Python" },
  { name: "PyTorch" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "FastAPI" },
  { name: "PostgreSQL" },
  { name: "Docker" },
];

const techStackRow2 = [
  { name: "TensorFlow" },
  { name: "Scikit-Learn" },
  { name: "OpenAI" },
  { name: "Hugging Face" },
  { name: "Tailwind CSS" },
  { name: "Git" },
  { name: "Supabase" },
  { name: "Node.js" },
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

const coreCompetencies = [
  { name: "AI Orchestration", level: "Expert" },
  { name: "Distributed Systems", level: "Intermediate" },
  { name: "Full Stack Engineering", level: "Expert" },
  { name: "Language Models", level: "Advanced" },
];

export function About() {
  const [status, setStatus] = React.useState({
    online: true,
    message: "Free to Talk",
    time: ""
  });

  React.useEffect(() => {
    // 1. Update Time every minute
    const updateTime = () => {
      const now = new Date();
      setStatus(prev => ({
        ...prev,
        time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      }));
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);

    // 2. Optional: Fetch from Lanyard (Discord Status)
    // Replace 'YOUR_DISCORD_ID' with your actual ID to make this truly real-time
    const DISCORD_ID = "1159885261719740487"; // Generic example or user's ID if known

    fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const isOnline = data.data.discord_status !== "offline";
          setStatus(prev => ({
            ...prev,
            online: isOnline,
            message: isOnline ? "Active Now" : "Busy / Away"
          }));
        }
      })
      .catch(() => {
        // Fallback logic: Assume online if it's between 9 AM and 10 PM local time
        const hour = new Date().getHours();
        const isWorkingHours = hour >= 9 && hour <= 22;
        setStatus(prev => ({
          ...prev,
          online: isWorkingHours,
          message: isWorkingHours ? "Free to Talk" : "Offline / Resting"
        }));
      });

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#f17463] uppercase tracking-widest">
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
                  src="/images/ME.jpeg"
                  alt="Lohit Kumar"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Intro */}
              <div className="flex flex-col gap-5">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                  HELLO<span className="text-[#f17463]">!</span>
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
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0B0F] border border-[#1F1F2A] text-xs text-[#A1A1AA] hover:border-[#f17463]/40 hover:text-white transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    lohitkumar1914@gmail.com
                  </a>
                  <a
                    href="https://github.com/lohitkumar1914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0B0F] border border-[#1F1F2A] text-xs text-[#A1A1AA] hover:border-[#f17463]/40 hover:text-white transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    github.com/lohitkumar1914
                  </a>
                  <a
                    href="https://linkedin.com/in/naram-lohit-kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f17463]/10 border border-[#f17463]/30 text-xs text-[#f17463] hover:bg-[#f17463]/20 transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    @lohitkumar
                  </a>
                  <a
                    href="https://lohit.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0B0F] border border-[#1F1F2A] text-xs text-[#A1A1AA] hover:border-[#f17463]/40 hover:text-white transition-all"
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
                        <div className="w-2 h-2 rounded-full bg-[#f17463]" />
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
                      <span className="text-[#f17463]">-</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Marquee Section */}
              <div className="md:col-span-2 rounded-2xl bg-[#0B0B0F] border border-[#1F1F2A] p-6 flex flex-col gap-6 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Braces className="w-4 h-4 text-[#f17463]" />
                    Tech Stack
                  </h4>
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest">
                    Continuously Evolving
                  </span>
                </div>

                <div className="flex flex-col gap-4 relative">
                  {/* Row 1: Left to Right */}
                  <div className="relative flex overflow-hidden group">
                    <motion.div
                      className="flex gap-4 pr-4 py-1"
                      animate={{
                        x: [0, "-50%"],
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 25,
                          ease: "linear",
                        },
                      }}
                    >
                      {[...techStackRow1, ...techStackRow1].map((tech, i) => (
                        <div
                          key={`row1-${i}`}
                          className="inline-flex items-center rounded-md border border-transparent shadow hover:bg-white/90 text-sm font-medium px-3 py-1 whitespace-nowrap bg-white text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shrink-0 group/tile"
                        >

                          {tech.name}
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Row 2: Right to Left */}
                  <div className="relative flex overflow-hidden group">
                    <motion.div
                      className="flex gap-4 pr-4 py-1"
                      animate={{
                        x: ["-50%", 0],
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 30,
                          ease: "linear",
                        },
                      }}
                    >
                      {[...techStackRow2, ...techStackRow2].map((tech, i) => (
                        <div
                          key={`row2-${i}`}
                          className="inline-flex items-center rounded-md border border-transparent shadow hover:bg-white/90 text-sm font-medium px-3 py-1 whitespace-nowrap bg-white text-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shrink-0 group/tile"
                        >

                          {tech.name}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Philosophy & Pulse Section */}
              <div className="rounded-2xl bg-[#0B0B0F] border border-[#1F1F2A] p-6 flex flex-col justify-between relative overflow-hidden group min-h-[220px]">
                {/* Background Decoration */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#f17463]/10 blur-3xl rounded-full group-hover:bg-[#f17463]/20 transition-colors duration-700" />

                <div className="flex flex-col gap-4 relative z-10">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#f17463]" />
                    Live Pulse
                  </h4>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full ${status.online ? 'bg-green-500' : 'bg-[#f17463]'} animate-pulse`} />
                      <div className={`absolute inset-0 w-3 h-3 rounded-full ${status.online ? 'bg-green-500' : 'bg-[#f17463]'} animate-ping opacity-75`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{status.message}</p>
                      <p className="text-[10px] text-[#71717A] font-mono">Synced via Cloud</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 relative z-10 mt-6">
                  <div className="flex items-center justify-between border-b border-[#1F1F2A] pb-2">
                    <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest">Local Time</span>
                    <span className="text-[10px] text-white font-bold bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {status.time}
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
