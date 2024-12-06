import { useState } from "react"
import NoteContext from "./NoteContext"
const NoteState = (props) => {
    const host = "http://localhost:3004"
    const notesIntitals =[]
    const [notes, setNotes] = useState(notesIntitals)

    // Get all notes
    const getNotes = async () => {
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MGI4NDhmODNlMmRhYzM5ZTFmNWU1In0sImlhdCI6MTczMzM5NTE1OX0.rwSEf52uTud1X5m4yYx0KxIJXTuLT7xmW9EDmuaAddc",
            },
        })
        const json = await response.json()
        // console.log(json); 
        setNotes(json);
    }
    //   add a note
    const addNote = async (title, description, tag) => {
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MGI4NDhmODNlMmRhYzM5ZTFmNWU1In0sImlhdCI6MTczMzM5NTE1OX0.rwSEf52uTud1X5m4yYx0KxIJXTuLT7xmW9EDmuaAddc",
            },
            body: JSON.stringify({title,description,tag})
        })
        let json = await response.json();
        // console.log(json);

        // console.log("adding new note");
        const note = json;
        setNotes(notes.concat(note)); // concat returns an array whereas push updates an array
    }
    // edit a note
    const editNote = async (id, title, description, tag) => {
        //TODO: API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MGI4NDhmODNlMmRhYzM5ZTFmNWU1In0sImlhdCI6MTczMzM5NTE1OX0.rwSEf52uTud1X5m4yYx0KxIJXTuLT7xmW9EDmuaAddc",
            },
            body: JSON.stringify({title,description,tag})
        }) 
        const json = response.json();
        // console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let i = 0; i < newNotes.length; i++) {
            let element = newNotes[i]; 
            if (element._id === id) {
                element.title = title
                element.description = description
                element.tag = tag
                break;
            }
        }
        setNotes(newNotes);
    }
    // delete a note
    const deleteNote = async (id) => {
        //TODO: API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MGI4NDhmODNlMmRhYzM5ZTFmNWU1In0sImlhdCI6MTczMzM5NTE1OX0.rwSEf52uTud1X5m4yYx0KxIJXTuLT7xmW9EDmuaAddc",
            },
        })
        const json = response.json();
        console.log(json);

        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;