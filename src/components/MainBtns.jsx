import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import useMediaQuery from "../useMediaQuery";




export function MainBtns({onAddNote, setActiveModal, activeNote}) {
  return (
    <div className="header-btns">
      <button
        onClick={() => setActiveModal(true)}
        className={`header-btn-remove btn-2 ${!activeNote && "btn-no-active"}`}
      >
        <BsTrashFill />
      </button>
      <button onClick={() => onAddNote()} className="header-btn-add btn-2">
        <AiOutlinePlus />
      </button>
    </div>
  );
}


export function MobileMainBtns({onAddNote, setActiveModal, activeNote, toggleBar}) {
    const matches = useMediaQuery("(max-width: 900px)");
    return (
        <div className="header-btns">
        <button
          onClick={() => setActiveModal(true)}
          className={`header-btn-remove btn-2 ${
            !activeNote && "btn-no-active"
          } ${matches && !toggleBar && "btn-no-active"}`}
        >
          <BsTrashFill />
        </button>
        <button
          onClick={() => onAddNote()}
          className={`header-btn-add btn-2 ${toggleBar && "btn-no-active"}`}
        >
          <AiOutlinePlus />
        </button>
      </div>
    );
  }

