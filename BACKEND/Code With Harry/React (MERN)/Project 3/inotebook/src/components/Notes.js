import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteCard from './NoteCard';
const Notes = () => {
const context = useContext(NoteContext);
  const { notes, setNotes} = context;
  let i=0;
    return (
        <>
            <div className='row my-3'>
                <h2>Your Notes</h2>
                {
                    notes.map((note) => {
                        return <NoteCard note={note} key={i++}/>
                    }
                    )
                }
            </div>
        </>
    )
}

export default Notes
