import React from "react";
import SearchBox from "./SearchBox ";
import {AiOutlinePlus} from 'react-icons/ai'
import {BsTrashFill} from 'react-icons/bs'
import {RiEditBoxLine} from 'react-icons/ri'
import { useEffect } from "react";
import useMediaQuery from "../useMediaQuery";

const Header = ({ onAddNote, activeNote, onDeleteNote, onEditMode, notes ,setActiveNote, activeSearch, setActiveSearch, toggleBar }) => {

  const matches = useMediaQuery("(max-width: 740px)");
  return (
    <div className="header">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        {!matches && 
        <div className="header-btns">
          <button onClick={() => onDeleteNote(activeNote)} className={`header-btn-remove btn-2 ${!activeNote && 'btn-no-active'}`}><BsTrashFill /></button>
          <button onClick={() => onEditMode()} className={`header-btn-change btn-2 ${!activeNote && 'btn-no-active'}`} ><RiEditBoxLine /></button>
          <button onClick={() => onAddNote()} className='header-btn-add btn-2'><AiOutlinePlus /></button>
        </div>}
      </div>
      <div className="header-container">
      {matches && !activeSearch &&
        <div className="header-btns">
          <button onClick={() => onDeleteNote(activeNote)} className={`header-btn-remove btn-2 ${!activeNote && 'btn-no-active'} ${matches && !toggleBar && 'btn-no-active'}`}><BsTrashFill /></button>
          <button onClick={() => onEditMode()} className={`header-btn-change btn-2 ${!activeNote && 'btn-no-active'} ${matches && !toggleBar && 'btn-no-active'}`} ><RiEditBoxLine /></button>
          <button onClick={() => onAddNote()} className='header-btn-add btn-2'><AiOutlinePlus /></button>
        </div>}
        <SearchBox notes={notes} activeNote={activeNote} setActiveNote={setActiveNote}  activeSearch={activeSearch}
        setActiveSearch={setActiveSearch} />
        
      </div>
    </div>
  );
};
export default Header;
