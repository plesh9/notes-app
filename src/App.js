import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { notesAPI } from "./api/api";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";
import useMediaQuery from "./useMediaQuery";
import useLocalStorage from 'use-local-storage'


import nextId from "react-id-generator";
import { useId } from "react-id-generator";
import { setPrefix } from "react-id-generator";



function App() {
  const matches = useMediaQuery("(max-width: 900px)");

  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);
  const [toggleBar, setToggleBar] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme')

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }
  useEffect(() =>{
    setTheme(localStorage.theme ? JSON.parse(localStorage.theme) : 'dark')
  }, [])
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: `Untitle Note`,
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    matches && setActiveNote(newNote.id);
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


  return (
    <div className="App" data-theme={theme}>
      <Header
        onAddNote={onAddNote}
        activeNote={activeNote}
        onDeleteNote={onDeleteNote}
        setActiveNote={setActiveNote}
        notes={notes}
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        toggleBar={toggleBar}
        setToggleBar={setToggleBar}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        theme={theme}
        switchTheme={switchTheme}
      />
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        toggleBar={toggleBar}
        setToggleBar={setToggleBar}
      />
      <Workspace
        activeNote={getActiveMode()}
        onUpdateNote={onUpdateNote}
        setToggleBar={setToggleBar}
      />
    </div>
  );
}

export default App;
