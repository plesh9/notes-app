import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Modal({activeModal, setActiveModal, onDeleteNote, activeNote}) {

  const onDeleteClick = () =>{
    setActiveModal(false)
    onDeleteNote(activeNote)
  }

  return (
    <div className={`modal ${activeModal ? 'modal--isActive' : ''}`} onClick={() => setActiveModal(false)}>
      <div className="modal__overlay">
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={() => setActiveModal(false)} ><AiOutlineCloseCircle /></div>
            <p>Are u really wanna delete this note?</p>
           <div className="btns-modal">
              <button className="btn btn-modal" onClick={onDeleteClick}>Delete</button>
              <button className="btn btn-modal" onClick={() => setActiveModal(false)}>Cancel</button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
