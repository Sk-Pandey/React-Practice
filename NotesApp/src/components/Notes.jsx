import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Notes = () => {
  const [text, setText] = useState("");
  const [notesList, setNotesList] = useState([]);

  const addNotes = () => {
    if (text.trim() !== "") {
      setNotesList([
        {
          note: text,
          id: uuidv4(),
        },
        ...notesList,
      ]);
      setText("");
    } else {
      alert("Please Enter valid Note");
    }
  };

  const dltNote = (dltId) => {
    setNotesList(notesList.filter((item) => item.id !== dltId));
  };

  return (
    <div className="min-h-screen w-full px-6 py-10">
      {/* Input Section */}
      <div className="max-w-xl mx-auto">
        <div className="card bg-base-100/80 backdrop-blur-lg shadow-2xl border border-base-300">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center mb-2">📝 Notes</h1>

            <p className="text-center text-base-content/60">
              Capture your thoughts instantly
            </p>

            <div className="badge badge-info badge-outline mx-auto mt-2">
              {notesList.length} Notes
            </div>

            <textarea
              placeholder="What's on your mind?"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="textarea textarea-bordered w-full h-36 mt-4 resize-none text-base"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.ctrlKey) {
                  e.preventDefault();
                  setText((prev) => prev + "\n");
                  return;
                }

                if (e.key === "Enter") {
                  e.preventDefault();
                  addNotes();
                }
              }}
            />
            <p className="text-xs opacity-60">
              Press Enter to add note • Ctrl + Enter for a new line
            </p>

            <button
              className="btn btn-info w-full mt-2 text-white text-lg"
              onClick={addNotes}
            >
              ✨ Add Note
            </button>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="max-w-6xl mx-auto mt-12">
        {notesList.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-7xl mb-4">📭</div>
            <h2 className="text-2xl font-semibold">No Notes Yet</h2>
            <p className="text-base-content/60">
              Add your first note to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {notesList.map((list) => (
              <div
                key={list.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-base-300"
              >
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <h2 className="card-title text-info">📝 Note</h2>

                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => dltNote(list.id)}
                    >
                      Delete
                    </button>
                  </div>

                  <div className="divider my-1"></div>

                  <p className="text-base break-words whitespace-pre-wrap">
                    {list.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
