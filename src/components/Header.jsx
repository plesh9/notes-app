import React from "react";
import SearchBox from "./SearchBox ";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import useMediaQuery from "../useMediaQuery";
import Modal from "./Modal";
import { MainBtns } from "./MainBtns";

const Header = ({
  onAddNote,
  activeNote,
  onDeleteNote,
  notes,
  setActiveNote,
  activeSearch,
  setActiveSearch,
  toggleBar,
  setToggleBar,
  setActiveModal,
  activeModal,
  switchTheme,
  theme,
}) => {
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <div className="header">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        {!matches && (
          <MainBtns
            setActiveModal={setActiveModal}
            onAddNote={onAddNote}
            activeNote={activeNote}
          />
        )}
      </div>
      <div className="header-container">
        {matches && !activeSearch && (
          <MainBtns
            setActiveModal={setActiveModal}
            onAddNote={onAddNote}
            activeNote={activeNote}
            toggleBar={toggleBar}
          />
        )}
        <SearchBox
          notes={notes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          setToggleBar={setToggleBar}
        />
        <button onClick={switchTheme} className={`btn btn-theme`}>
          {theme === "light" && <MdLightMode />}
          {theme === "dark" && <MdDarkMode />}
        </button>
      </div>
      <Modal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveSearch={setActiveSearch}
      />
    </div>
  );
};
export default Header;
