import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Notes = () => {
  const [text, setText] = useState("");
  const [notesList, setNotesList] = useState([]);
  const addNotes = () => {
    if (text.trim() != "") {
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
    <div className="flex justify-start items-center mt-10  min-h-screen flex-col gap-24">
      {/* input......... */}
      <div className="flex flex-col gap-2 w-70">
        <legend className="fieldset-legend">Write Note</legend>
        <textarea
          placeholder="Enter Text Here...."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea textarea-primary w-full h-1/2 resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addNotes();
            }
          }}
        />

        <button
          className="btn btn-soft btn-info w-full font-serif"
          onClick={addNotes}
        >
          Add Note
        </button>
      </div>

      {/* Card */}

      {notesList.map((list) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm" key={list.id}>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Note</h2>
              <p>{list.note}</p>
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => dltNote(list.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
