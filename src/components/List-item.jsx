import React from "react";
import useMediaQuery from "../useMediaQuery";

const ListItem = ({
  notes,
  setActiveNote,
  activeNote,
  setToggleBar,
}) => {
  const matches = useMediaQuery("(max-width: 900px)");

  const sordeNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const onClickNote = (id) => {
    setActiveNote(id);
    matches && setToggleBar(true);
  };
  return (
    <div className="app-sidebar-notes">

      {sordeNotes.map((note) => (
        <div
          key={note.id}
          className={`app-sidebar-note ${
            !matches && note.id === activeNote ? "active" : ""
          }`}
          onClick={() => onClickNote(note.id)}
        >
          <div className="sidebar-note-title">
            <strong>{note.title}</strong>
          </div>

          <p>{note.body && note.body.substr(0, 70) + "..."}</p>

          <small className="note-meta">
            Last modified{" "}
            {new Date(note.lastModified).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </div>
      ))}
    </div>
  );
};
export default ListItem;
