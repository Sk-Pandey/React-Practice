import React from "react";

export default function About() {
  return (
    <div className="space-y-20 pb-16 bg-zinc-950 text-zinc-100 min-h-screen">
      {/* 1. HEADER HERO */}
      <section className="text-center max-w-2xl mx-auto space-y-4 pt-8">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
          Our Story
        </span>
        <h1 className="text-3xl md:text-5xl font-extralight tracking-tight text-zinc-100">
          Believers in{" "}
          <span className="font-semibold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Intentional Living.
          </span>
        </h1>
        <p className="text-zinc-400 font-light leading-relaxed text-base md:text-lg">
          We started with a simple question: Why is it so hard to find everyday
          objects that are beautiful, functional, and built to last?
        </p>
      </section>

      {/* 2. OUR PHILOSOPHY (Alternating Split Layout with Grayscale Transitions) */}
      <section className="space-y-16">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 group/row">
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
              alt="Minimalist design workspace"
              className="w-full h-full object-cover opacity-70 grayscale-[30%] group-hover/row:opacity-100 group-hover/row:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-xs font-bold text-amber-400/80 uppercase tracking-wider">
              01 / Design Ethos
            </span>
            <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">
              Stripped back to the essentials
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base">
              Every curve, seam, and material choice serves a clear purpose. We
              reject temporary fast-fashion trends in favor of timeless designs
              that stay relevant in your home and life for decades.
            </p>
          </div>
        </div>

        {/* Row 2 - Reversed on desktop */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 group/row">
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
              alt="Sustainable workshop manufacturing"
              className="w-full h-full object-cover opacity-70 grayscale-[30%] group-hover/row:opacity-100 group-hover/row:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-xs font-bold text-amber-400/80 uppercase tracking-wider">
              02 / Accountability
            </span>
            <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">
              Radical transparency
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base">
              We know exactly who makes our products, what raw ingredients go
              into them, and the conditions of the facilities. By removing
              traditional retail markups, we deliver luxury craftsmanship
              directly to your door.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="bg-zinc-900 border border-zinc-800/60 text-white rounded-2xl p-8 md:p-16 space-y-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent z-0" />

        <div className="text-center max-w-md mx-auto space-y-2 relative z-10">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
            What guides us
          </h2>
          <p className="text-zinc-500 text-sm font-light">
            Three principles that dictate every single decision we make as a
            brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="space-y-3 p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/40 group hover:border-zinc-700 transition-all">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-semibold group-hover:border-amber-400/50 transition-colors">
              🌱
            </div>
            <h3 className="text-lg font-medium text-zinc-200 group-hover:text-amber-400 transition-colors">
              Sustainability First
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              From organic textiles to fully recyclable cardboard packaging, we
              prioritize minimizing environmental impacts.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/40 group hover:border-zinc-700 transition-all">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-semibold group-hover:border-amber-400/50 transition-colors">
              📐
            </div>
            <h3 className="text-lg font-medium text-zinc-200 group-hover:text-amber-400 transition-colors">
              Uncompromising Utility
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              If an object isn't incredibly satisfying and seamless to use in
              your daily routine, we simply won't build it.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/40 group hover:border-zinc-700 transition-all">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-semibold group-hover:border-amber-400/50 transition-colors">
              🤝
            </div>
            <h3 className="text-lg font-medium text-zinc-200 group-hover:text-amber-400 transition-colors">
              Community Respect
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Fair working wages, healthy artistic environments, and honest
              customer pricing configurations are guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
