import React from "react";

const StudentForm = ({
  formData,
  setFormData,
  addStudent,
  editId,
  errors,
  setErrors,
}) => {
  const inputhandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${editId ? "from-amber-500 to-orange-500" : "from-indigo-500 via-purple-500 to-pink-500"}`}
      />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            {editId ? (
              <>
                <span className="text-amber-400">✏️</span> Edit Student Profile
              </>
            ) : (
              <>
                <span className="text-indigo-400">🧑‍🎓</span> Add New Student
              </>
            )}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {editId
              ? "Update existing details in the directory"
              : "Enter student credentials below"}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              className={`w-full bg-slate-800/80 border ${errors.name ? "border-rose-500" : "border-slate-700 focus:border-indigo-500"} rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
              placeholder="e.g. Alex Morgan"
              name="name"
              value={formData.name}
              onChange={inputhandler}
            />
          </div>
          {errors.name && (
            <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <span>⚠️</span> {errors.name}
            </p>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
            Age
          </label>
          <input
            type="number"
            id="age"
            className={`w-full bg-slate-800/80 border ${errors.age ? "border-rose-500" : "border-slate-700 focus:border-indigo-500"} rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
            placeholder="e.g. 21"
            name="age"
            value={formData.age}
            onChange={inputhandler}
          />
          {errors.age && (
            <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <span>⚠️</span> {errors.age}
            </p>
          )}
        </div>

        {/* Course Field */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
            Enrolled Course
          </label>
          <input
            type="text"
            id="course"
            className={`w-full bg-slate-800/80 border ${errors.course ? "border-rose-500" : "border-slate-700 focus:border-indigo-500"} rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
            placeholder="e.g. Computer Science"
            name="course"
            value={formData.course}
            onChange={inputhandler}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addStudent();
              }
            }}
          />
          {errors.course && (
            <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <span>⚠️</span> {errors.course}
            </p>
          )}
        </div>

        <button
          className={`w-full mt-2 font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200 transform active:scale-98 shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
            editId
              ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-amber-500/20"
              : "bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-indigo-500/25"
          }`}
          onClick={addStudent}
        >
          {editId ? (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Update Student Profile
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Save Student Profile
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
