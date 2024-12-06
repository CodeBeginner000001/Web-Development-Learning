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
        console.log(json);
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
            body: JSON.stringify(title,description,tag)
        })

        // console.log("adding new note");
        let note = {
            "_id": "6751a5e48dbed0786bb49b2a",
            "user": "6750b848f83e2dac39e1f5e5",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-12-05T13:08:52.046Z",
            "__v": 0
        }
        setNotes(notes.concat(note)); // concat returns an array whereas push updates an array
    }
    // edit a note
    const editNote = async (id, title, description, tag) => {
        //TODO: API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1MGI4NDhmODNlMmRhYzM5ZTFmNWU1In0sImlhdCI6MTczMzM5NTE1OX0.rwSEf52uTud1X5m4yYx0KxIJXTuLT7xmW9EDmuaAddc",
            },
            body: JSON.stringify(title,description,tag)
        })

        // Logic to edit in client
        for (let i = 0; i < notes.length(); i++) {
            let element = notes[i];
            if (element._id === id) {
                element.title = title
                element.description = description
                element.tag = tag
            }
        }
    }
    // delete a note
    const deleteNote = (id) => {
        // TODO: API Call
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