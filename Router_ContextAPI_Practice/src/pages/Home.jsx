import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Welcome to
              <br />
              Bright Future School
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Empowering young minds through quality education, creativity,
              discipline, and innovation.
            </p>

            <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Apply Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
              alt="Students"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Our School?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide a nurturing environment where students grow academically,
            socially, and personally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-2xl font-semibold mb-3">Quality Education</h3>
            <p className="text-gray-600">
              Experienced teachers delivering modern and engaging learning
              experiences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-semibold mb-3">Excellent Results</h3>
            <p className="text-gray-600">
              Consistent academic achievements with holistic student
              development.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">⚽</div>
            <h3 className="text-2xl font-semibold mb-3">Sports & Activities</h3>
            <p className="text-gray-600">
              Encouraging students through sports, arts, music, and
              extracurricular activities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold">1200+</h3>
            <p className="mt-2">Students</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">60+</h3>
            <p className="mt-2">Teachers</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">25+</h3>
            <p className="mt-2">Years of Excellence</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">100%</h3>
            <p className="mt-2">Board Results</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Admissions Open for 2026
          </h2>

          <p className="mt-4 text-gray-600">
            Join our vibrant learning community and help your child achieve
            academic excellence.
          </p>

          <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
            Enroll Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
