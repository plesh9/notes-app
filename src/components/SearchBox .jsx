import React, { useEffect } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useMediaQuery from "../useMediaQuery";

const SearchBox = ({
  notes,
  activeNote,
  setActiveNote,
  activeSearch,
  setActiveSearch,
}) => {
  const matches = useMediaQuery("(max-width: 740px)");
  const focusInput = React.createRef()

  const [text, setText] = useState("");
  const [filterNotes, setFilterNotes] = useState("notes");

  const heandleSearch = () => {
    setFilterNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(heandleSearch, [text]);
  useEffect(heandleSearch, [notes]);

  const removeClass = (e) => {
    if (!e.target.closest(".search-box")) {
      setActiveSearch(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", removeClass);
    return () => document.body.removeEventListener("click", removeClass);
  });
  const onClickSearch = (e) =>{
    setActiveSearch((prevState) => !prevState);
    // e.currentTarget.children[0].focus()
    !activeSearch && focusInput.current.focus()
  }
  return (
    <div
      className={`search-box ${activeSearch && "search-box-active"}`}
      onClick={
        !matches ? onClickSearch : null
      }
    >
      <input
        autoFocus={matches} 
        ref={focusInput}
        className={`${matches && activeSearch ? "search-input-active" : ''}`}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          heandleSearch();
        }}
        placeholder="Search"
      />
      <button
        onClick={
          matches ? onClickSearch : null
        }
        className="search-box-btn btn"
      >
        <CiSearch />
      </button>
      {activeSearch && (
        <ul className="search-items">
          {filterNotes.map((note) => {
            return (
              <li
              key={note.id}
                onClick={() => {
                  setActiveNote(note.id);
                  matches && setActiveSearch(false);
                }}
                className="search-item"
              >
                {note.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
