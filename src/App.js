import { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import uuid from "react-uuid";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";
import useMediaQuery from "./useMediaQuery";


function App() {
  const matches = useMediaQuery("(max-width: 740px)");
  

  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [filterNotes, setFilterNotes] = useState(notes);
  const [toggleBar, setToggleBar] = useState(false)
  const [activeSearch, setActiveSearch] = useState(false)


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    
    const newNote = {
      id: uuid(),
      title: "Untitle Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);

    matches && setActiveNote(newNote.id)

  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
    setActiveNote(false);
  };

  const getActiveMode = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const onEditMode = () => {
    setEditMode((prevState) => !prevState);
  };


  return (
    <div className="App">
      <Header
        onAddNote={onAddNote}
        activeNote={activeNote}
        onDeleteNote={onDeleteNote}
        onEditMode={onEditMode}
        setActiveNote={setActiveNote}
        notes={notes}
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        toggleBar={toggleBar}
      />
      <Sidebar
        filterNotes={filterNotes}
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        setEditMode={setEditMode}
        toggleBar={toggleBar}
        setToggleBar={setToggleBar}
      />
      <Workspace
        activeNote={getActiveMode()}
        onUpdateNote={onUpdateNote}
        editMode={editMode}
        onEditMode={onEditMode}
        setToggleBar={setToggleBar}
      />
    </div>
  );
}

export default App;
