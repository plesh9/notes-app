import React from "react";
import ReactMarkDown from "react-markdown";
import useMediaQuery from "../useMediaQuery";
import Back from "./Back";

const Workspace = ({ activeNote, onUpdateNote, editMode, onEditMode, setToggleBar }) => {

  const matches = useMediaQuery("(max-width: 740px)");

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">
      {matches && <Back setToggleBar={setToggleBar}/>}
      No note selected</div>;

  return (
    <div className="app-main">
            {matches && <Back setToggleBar={setToggleBar}/>}

      {editMode && (
        <div className="app-main-note-edit">
          <input
            type="text"
            id="title"
            value={activeNote.title}
            autoFocus={true}
            onChange={(e) => onEditField("title", e.target.value)}
          />

          <textarea
            id="body"
            value={activeNote.body}
            placeholder="Write your note here..."
            onChange={(e) => onEditField("body", e.target.value)}
          />
          <button onClick={onEditMode} className="btn save-btn">Save</button>
        </div>
      )}

      {!editMode && (
        <div className="app-main-note-preview">
          <h1 onDoubleClick={() => onEditMode()} className="preview-title">
            {activeNote.title}
          </h1>
          <div onDoubleClick={() => onEditMode()}>
            {activeNote.body && (
              <ReactMarkDown className="markdown-preview">
                {activeNote.body}
              </ReactMarkDown>
            )}
            {!activeNote.body && (
              <p className="markdown-preview">Active edit mode for add note</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Workspace;
