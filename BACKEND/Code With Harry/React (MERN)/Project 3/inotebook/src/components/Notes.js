import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteCard from './NoteCard';
import AddNote from './AddNote';
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes} = context;
    useEffect(()=>{
        getNotes();
    },[])
    let i = 0;
    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <h2>Your Notes</h2>
                {
                    notes.map((note) => {
                        return <NoteCard note={note} key={i++} />
                    }
                    )
                }
            </div>
        </>
    )
}

export default Notes
  