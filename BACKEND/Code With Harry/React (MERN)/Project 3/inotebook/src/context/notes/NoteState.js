import { useState } from "react"
import NoteContext from "./NoteContext"
 const NoteState = (props)=>{
    const notesIntitals = [
        {
          "_id": "6751993252550f26526003ad",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My Route",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-12-05T12:14:42.627Z",
          "__v": 0
        },
        {
          "_id": "675199b752550f26526003af",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My Route",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-12-05T12:16:55.997Z",
          "__v": 0
        },
        {
          "_id": "675199b852550f26526003b1",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My Route",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-12-05T12:16:56.572Z",
          "__v": 0
        },
        {
          "_id": "6751a5e48dbed0786bb49b2a",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My youtube",
          "description": "Please access the harry playlist",
          "tag": "learning",
          "date": "2024-12-05T13:08:52.046Z",
          "__v": 0
        },
        {
          "_id": "675199b852550f26526003b1",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My Route",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-12-05T12:16:56.572Z",
          "__v": 0
        },
        {
          "_id": "6751a5e48dbed0786bb49b2a",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My youtube",
          "description": "Please access the harry playlist",
          "tag": "learning",
          "date": "2024-12-05T13:08:52.046Z",
          "__v": 0
        },
        {
          "_id": "6751a5e48dbed0786bb49b2a",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My youtube",
          "description": "Please access the harry playlist",
          "tag": "learning",
          "date": "2024-12-05T13:08:52.046Z",
          "__v": 0
        },
        {
          "_id": "6751a5e48dbed0786bb49b2a",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My youtube",
          "description": "Please access the harry playlist",
          "tag": "learning",
          "date": "2024-12-05T13:08:52.046Z",
          "__v": 0
        },
        {
          "_id": "6751a5e48dbed0786bb49b2a",
          "user": "6750b848f83e2dac39e1f5e5",
          "title": "My youtube",
          "description": "Please access the harry playlist",
          "tag": "learning",
          "date": "2024-12-05T13:08:52.046Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesIntitals)
    //   add a note
    const addNote = (title , description, tag)=>{
        console.log("adding new note");
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
    const editNote = ()=>{

    }
    // delete a note
    const deleteNote = ()=>{

    }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
 }
 export default NoteState;