import React from "react";
import useMediaQuery from "../useMediaQuery";
import Back from "./Back";
import TextareaAutosize from "react-textarea-autosize";

const Workspace = ({ activeNote, onUpdateNote, setToggleBar }) => {
  const matches = useMediaQuery("(max-width: 900px)");

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return (
      <div className="no-active-note">
        {matches && <Back setToggleBar={setToggleBar} />}
        No note selected
      </div>
    );

  return (
    <div className="app-main">
      {matches && <Back setToggleBar={setToggleBar} />}

      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          onClick={(e) => e.stopPropagation()}
          onFocus={(e) => {
            e.target.value === "Untitle Note" && e.currentTarget.select();
          }}
        />

        <TextareaAutosize
          id="body"
          value={activeNote.body}
          placeholder="Write your note here..."
          onChange={(e) => onEditField("body", e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default Workspace;
