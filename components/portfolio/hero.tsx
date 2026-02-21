import Image from "next/image";
import { Github, Linkedin, Mail, Twitter, FileText } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/lohitkumar1914", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/naram-lohit-kumar", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Lohit_2k04", label: "Twitter" },
  { icon: Mail, href: "mailto:lohitkumar1914@gmail.com", label: "Email" },
];

// const tags = ["Python", "PyTorch", "React", "TypeScript", "Next.js", "Supabase"];

export function Hero() {
  return (
    <section className="relative pt-28 pb-12">
      <div className="mx-auto max-w-5xl px-6">
        {/* Top row: avatar + name + socials */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#1F1F2A] shrink-0">
            <Image
              src="/images/Me.jpeg"
              alt="Lohit Kumar"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm">Lohit Kumar</span>
            <span className="text-[#71717A] text-xs font-mono">AI Engineer & Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-md bg-[#1A1A24] border border-[#1F1F2A] flex items-center justify-center text-[#71717A] hover:text-white hover:border-[#f17463]/30 transition-all"
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4 text-balance">
          {"Hi, I'm Lohit"} <span className="text-[#f17463]">&mdash;</span>{" "}
          <span className="text-[#71717A]">A Full Stack web developer.</span>
        </h1>

        {/* Description */}
        <p className="text-[#71717A] text-sm md:text-base leading-relaxed max-w-xl mb-5">
          I build AI powered web apps using{" "}
          <span className="text-[#A1A1AA]">React</span>,{" "}
          <span className="text-[#A1A1AA]">NextJS</span>,{" "}
          <span className="text-[#A1A1AA]"></span> and{" "}
          <span className="text-[#A1A1AA]">TypeScript</span>.
          With a focus on <span className="text-[#A1A1AA]">Generative AI</span>{" "}
          and <span className="text-[#A1A1AA]">LLMs</span>, driven by a keen eye for design.
        </p>

        {/* Tags row */}
        {/* <div className="flex flex-wrap items-center gap-2 mb-5">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-[#1A1A24] border border-[#1F1F2A] text-[11px] text-[#A1A1AA] font-mono"
            >
              {t}
            </span>
          ))}
        </div> */}

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1A24] border border-[#1F1F2A] text-white text-sm hover:border-[#f17463]/30 transition-all"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume / CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffffff] text-black text-sm hover:bg-[#e05a4a] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
