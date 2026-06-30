import React from "react";

// Sample mock data for your featured products
const FEATURED_PRODUCTS = [
  {
    id: "p1",
    name: "Minimalist Leather Watch",
    price: "$189.00",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "Wireless Noise-Canceling Headphones",
    price: "$299.00",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Ceramic Essential Oil Diffuser",
    price: "$45.00",
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "Ergonomic Desk Organiser",
    price: "$65.00",
    tag: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16 bg-zinc-950 text-zinc-100 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-zinc-900 border border-zinc-800/80 text-white rounded-2xl overflow-hidden py-24 px-8 md:px-16 flex flex-col items-start justify-center min-h-[450px] shadow-2xl">
        {/* Decorative background radial gradient mask for that cyber-luxe glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-zinc-900/20 z-0" />

        <div className="relative z-10 max-w-xl space-y-6">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Summer Collection 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight leading-none text-zinc-100">
            Simplicity is the <br />
            <span className="font-semibold text-white bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Ultimate Sophistication.
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            Discover our curated essentials engineered for modern daily life.
            Designed with sustainable materials and an eye for pure utility.
          </p>
          <div className="pt-4">
            <button className="bg-amber-400 text-zinc-950 px-8 py-3 rounded-md text-sm font-semibold hover:bg-amber-300 active:scale-98 transition-all duration-300 shadow-md shadow-amber-500/10">
              Explore Shop
            </button>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS GRID */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800 pb-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
              Featured Pieces
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Handpicked items trending globally this week.
            </p>
          </div>
          <button className="text-sm font-medium text-amber-400 hover:text-amber-300 mt-4 sm:mt-0 underline underline-offset-4 transition-colors">
            View All Products &rarr;
          </button>
        </div>

        {/* Product Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-zinc-900/50 border border-zinc-900 rounded-xl overflow-hidden shadow-xl hover:border-zinc-800 hover:bg-zinc-900 transition-all duration-300"
            >
              {/* Product Image Container */}
              <div className="aspect-square w-full overflow-hidden bg-zinc-950 relative">
                {/* Accent Amber Badge */}
                <span className="absolute top-3 left-3 bg-amber-400/90 text-zinc-950 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md z-10 shadow-sm">
                  {product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out grayscale-[20%] group-hover:grayscale-0"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-zinc-300 group-hover:text-amber-400 transition-colors duration-200">
                    <a
                      href={`#/product/${product.id}`}
                      className="focus:outline-hidden"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-zinc-100">
                    {product.price}
                  </p>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-300 font-medium transition-colors">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROMOTIONAL FEATURE BANNER */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/40 border border-zinc-900 rounded-2xl p-8 md:p-12 items-center">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zinc-100 tracking-tight">
            Uncompromising Quality
          </h3>
          <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-md">
            We partner with independent, family-owned workshops that share our
            commitment to ethical manufacturing and lifetime durability.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-md text-center">
            <p className="text-2xl font-bold text-amber-400">100%</p>
            <p className="text-xs text-zinc-400 mt-1">Organic Cotton</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-md text-center">
            <p className="text-2xl font-bold text-amber-400">Free</p>
            <p className="text-xs text-zinc-400 mt-1">Global Shipping</p>
          </div>
        </div>
      </section>
    </div>
  );
}
