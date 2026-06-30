import React, { useState } from "react";

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "How long does shipping take?",
      a: "Standard shipping takes 3–5 business days. Express shipping takes 1–2 business days. International timelines vary depending on destinations.",
    },
    {
      q: "What is your return policy?",
      a: "We offer complete, hassle-free 30-day returns on all unused items packaged in their original conditions.",
    },
    {
      q: "Do you offer warranty protections?",
      a: "Yes, every curated essential carries a comprehensive 2-year warranty protecting against any manufacturer craftsmanship defects.",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message recorded!");
  };

  return (
    <div className="space-y-16 pb-16 bg-zinc-950 text-zinc-100 min-h-screen">
      {/* 1. HEADER HERO */}
      <section className="text-center max-w-xl mx-auto space-y-4 pt-8">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
          Get In Touch
        </span>
        <h1 className="text-3xl md:text-5xl font-extralight tracking-tight text-zinc-100">
          We’re Here to{" "}
          <span className="font-semibold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Heed Your Needs.
          </span>
        </h1>
        <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
          Have an inquiry about an order, our materials, or partnership
          alignments? Fill out the form or skim our immediate answers below.
        </p>
      </section>

      {/* 2. SPLIT INTERACTIVE LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Premium Input Form */}
        <section className="lg:col-span-7 bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Himesh"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-hidden focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Bharadwaj"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-hidden focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-hidden focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block">
                Your Message
              </label>
              <textarea
                rows="5"
                required
                placeholder="Tell us details about your request..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-hidden focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 text-zinc-950 font-semibold text-sm py-3 rounded-md hover:bg-amber-300 active:scale-99 transition-all duration-200 shadow-md shadow-amber-500/5"
            >
              Send Secure Message
            </button>
          </form>
        </section>

        {/* RIGHT COLUMN: Minimalist FAQ Accordions */}
        <section className="lg:col-span-5 space-y-6">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-lg font-semibold text-zinc-100 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-zinc-900 rounded-xl bg-zinc-900/40 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left font-medium text-zinc-300 hover:text-amber-400 text-sm focus:outline-hidden"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`text-zinc-600 transform transition-transform duration-200 ${isOpen ? "rotate-45 text-amber-400" : ""}`}
                    >
                      ＋
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-zinc-800/80 bg-zinc-900/20" : "max-h-0"}`}
                  >
                    <p className="p-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
