import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="search"
        placeholder="Search by name, course, or age..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 shadow-inner transition-all"
      />
      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-slate-200"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
