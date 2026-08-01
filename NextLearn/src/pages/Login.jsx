import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Login
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Welcome back! Please sign in.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-white mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/30 bg-transparent px-4 py-3 text-white placeholder-gray-300 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-white/30 bg-transparent px-4 py-3 text-white placeholder-gray-300 outline-none focus:border-white"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
