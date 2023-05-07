import React from 'react'
import { useState } from 'react';
import useMediaQuery from '../useMediaQuery';

const Sidebar = ({ notes, setActiveNote, activeNote, setEditMode, toggleBar, setToggleBar }) => {
    const matches = useMediaQuery("(max-width: 740px)");


    const sordeNotes = notes.sort((a, b) => b.lastModified - a.lastModified)
    const onClickNote = (id) =>{
        setActiveNote(id)
        setEditMode(false)
        matches && setToggleBar(true)
    }

    return (
        <div className={`app-sidebar ${ toggleBar ? 'sidebar--isHidden' : '' }`}>
            <div className="app-sidebar-notes">
                {sordeNotes.map((note) => (
                    <div key={note.id} 
                        className={`app-sidebar-note ${!matches && note.id === activeNote ? 'active' : ''}`} 
                        onClick={() => onClickNote(note.id) }>
                        
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                        </div>

                        <p>{note.body && note.body.substr(0, 70) + '...'}</p>
                        
                        <small className='note-meta'>
                            Last modified {new Date(note.lastModified).toLocaleDateString('en-GB', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </small>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
