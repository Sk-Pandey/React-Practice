import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login here
    console.log("Login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/80 mt-2">Login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-xl px-4 py-3 bg-white/30 text-white placeholder-white/70 border border-white/40 outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl px-4 py-3 bg-white/30 text-white placeholder-white/70 border border-white/40 outline-none focus:ring-2 focus:ring-white transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm text-white">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-indigo-600" />
              Remember me
            </label>

            <button type="button" className="hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-indigo-700 font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
