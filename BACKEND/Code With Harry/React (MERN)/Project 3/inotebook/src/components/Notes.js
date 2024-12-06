import React, { useContext, useEffect, useRef,useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteCard from './NoteCard';
import AddNote from './AddNote';
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes ,editNote} = context;
    const [note,setNote] = useState({id:"",etitle:"",edescription:"",etag:""})

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line 
    }, [])
    // update note icon
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id, etitle :currentNote.title,edescription: currentNote.description,etag:currentNote.tag})
    }
    let i = 0;
    // creating a ref for modal to open when edit icon is clicked and this ref is used in the modal button names Launch demo modal
    const ref = useRef(null);
    // creating a ref for modal to close once user click update button in the modal
    const closeRef = useRef(null);

    const handleClick = (e)=>{
        // console.log(note);
        editNote(note.id,note.etitle,note.edescription,note.etag);
        closeRef.current.click();
    }


    const onChange = (e)=>{ 
        setNote({...note,[e.target.name]: e.target.value})  
    }
    return (
        <>
            <AddNote />
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"> 
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" placeholder="Enter Title of Note you want to edit" value={note.etitle} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" placeholder='Enter Description of Note you want to edit' value={note.edescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tags</label>
                                    <input type="text" className="form-control" id="etag" name="etag" placeholder='edit Your Tags' value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeRef}>Close</button>
                            <button  disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                <h2>Your Notes</h2>
                <div className="container mx-2">
                {
                    notes.length===0 && "No Notes to Show"
                }
                </div>
                {
                    notes.map((note) => {
                        return <NoteCard note={note} key={i++} updateNote={updateNote} />
                    }
                    )
                }
            </div>
        </>
    )
}

export default Notes
