"use client";

import { Phone, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-2xl bg-[#111118] border border-[#1F1F2A] p-10 md:p-16 text-center overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#f17463]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#06B6D4]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            <p className="text-[#71717A] text-sm mb-4 font-mono">
              {"Hey, you scrolled this far, let's talk."}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-balance">
              {"Let's build something meaningful."}
            </h2>

            <p className="text-[#71717A] text-base max-w-md mx-auto mb-8">
              {"I'm always open to discussing new projects, ideas, or opportunities to be part of your vision."}
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f17463] text-white text-sm font-medium hover:bg-[#e05a4a] transition-colors glow-violet-strong"
            >
              <Phone className="h-4 w-4" />
              Book a Free Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
