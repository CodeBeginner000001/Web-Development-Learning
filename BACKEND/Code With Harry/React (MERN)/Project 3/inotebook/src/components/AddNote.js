import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note,setNote] = useState({title:"",description:"",tag:"default"})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const onChange = (e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
    return (
        <>
            <div className='container my-3'>
                <h1>Add a Notes</h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title of Note you want to add" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" placeholder='Enter Description of Note you want to add' onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote
