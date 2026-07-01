import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Our Mission</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We are redefining digital experiences.
          </p>
        </div>

        {/* Content Split */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-start">
          <div>
            <p className="text-lg leading-8 text-slate-300">
              Our team believes that clean code and exceptional design go hand-in-hand. By leveraging cutting-edge frameworks like React and utility-first styling with Tailwind CSS, we create interfaces that don't just look spectacular, but feel completely intuitive.
            </p>
            <p className="mt-6 text-base leading-7 text-slate-400">
              Whether you are building a lightning-fast single-page application or a robust data-driven dashboard, our architectural choices guarantee scalability, speed, and absolute delight for the end-user.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { label: 'Active Users', value: '120k+' },
              { label: 'Global Servers', value: '40+' },
              { label: 'Uptime SLA', value: '99.99%' },
              { label: 'Developer Stars', value: '15k+' },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}