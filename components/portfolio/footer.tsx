import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/lohitkumar1914", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/naram-lohit-kumar",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/Lohit_2k04", label: "Twitter" },
  { icon: Mail, href: "mailto:[EMAIL_ADDRESS]", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1F1F2A] py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">


          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-lg bg-[#111118] border border-[#1F1F2A] flex items-center justify-center text-[#71717A] hover:text-white hover:border-[#f17463]/30 transition-all"
              >
                <social.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          {/* Credits */}
          <p className="flex items-center gap-1 text-xs text-[#71717A]">
            Design & Developed by
            <span className="text-white font-medium">Lohit Kumar</span>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="flex items-center justify-center gap-1 text-xs text-[#52525B]">
            Built with <Heart className="h-3 w-3 text-[#f17463]" /> using
            Next.js
          </p>
          <p className="text-xs text-[#52525B] mt-1">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
