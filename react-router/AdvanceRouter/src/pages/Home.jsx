import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 lg:px-8 pt-24 pb-32 sm:pt-32 sm:pb-40">
        {/* Decorative background glow */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-6">
            Introducing Next-Gen Routing
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 sm:text-6xl">
            Build beautiful interfaces seamlessly
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400 max-w-xl mx-auto">
            Welcome to your new React Router application. Crafted with Tailwind CSS for high performance, modern aesthetics, and fluid user experiences.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-500/40 transition-all duration-200">
              Get Started
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors duration-200">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}