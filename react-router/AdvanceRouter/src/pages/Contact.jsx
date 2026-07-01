import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Info Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Let's connect</h2>
          <p className="mt-4 text-lg text-slate-400">
            Have an idea or just want to chat about React Router possibilities? Drop us a line. We typically respond within a few hours.
          </p>
          
          <div className="mt-8 space-y-4 text-slate-300">
            <div className="flex items-center gap-x-4">
              <span className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400">📧</span>
              <span>hello@yourdomain.com</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400">📍</span>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-md shadow-2xl">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
              <input 
                type="text" 
                id="name" 
                className="mt-2 block w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email address</label>
              <input 
                type="email" 
                id="email" 
                className="mt-2 block w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="mt-2 block w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button 
              type="submit" 
              className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}