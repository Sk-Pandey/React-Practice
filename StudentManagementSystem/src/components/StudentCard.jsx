import React from "react";

const StudentCard = ({ student, deleteStudent, editFn }) => {
  // Get initials for avatar
  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "ST";
  };

  return (
    <div className="group bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-5 shadow-lg transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-500/5 relative overflow-hidden">
      <div>
        {/* Header with Avatar & Actions */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center space-x-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-bold text-sm shadow-inner">
              {getInitials(student.name)}
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-1">
                {student.name}
              </h3>
              <span className="inline-block px-2 py-0.5 mt-0.5 text-[11px] font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-md">
                {student.course}
              </span>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-800/60 mb-4 grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-slate-500 block">Age</span>
            <span className="font-medium text-slate-200">{student.age} Years</span>
          </div>
          <div>
            <span className="text-slate-500 block">Status</span>
            <span className="font-medium text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-2 pt-2 border-t border-slate-800/80">
        <button
          className="flex-1 bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-300 text-slate-300 font-medium text-xs py-2 px-3 rounded-lg border border-slate-700/80 hover:border-indigo-500/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          onClick={() => editFn(student.id)}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>

        <button
          className="bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 font-medium text-xs py-2 px-3 rounded-lg border border-slate-700/80 hover:border-rose-500/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          onClick={() => deleteStudent(student.id)}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;