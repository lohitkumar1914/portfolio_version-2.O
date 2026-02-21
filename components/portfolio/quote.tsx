export function Quote() {
  return (
    <section className="py-16 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#111118] border border-[#1F1F2A] flex items-center justify-center">
            <span className="text-2xl font-serif text-[#f17463]">{'"'}</span>
          </div>
          <blockquote className="max-w-lg">
            <p className="text-[#A1A1AA] text-sm md:text-base italic leading-relaxed">
              {"As far as belief, do far as is."}
            </p>
          </blockquote>
          <cite className="text-xs text-[#71717A] font-mono not-italic">
            &mdash; Bhagavad Gita
          </cite>
        </div>
      </div>
    </section>
  );
}
