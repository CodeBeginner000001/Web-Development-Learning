const express = require("express")
const router = express.Router();
const fetchUser = require("../middleware/fetchUser")
const Note = require("../models/Note")
const { body, validationResult } = require("express-validator")

// Route1: Get all the notes using GET "/api/notes/fetchallnotes". Logged in
router.get("/fetchallnotes", fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.send(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Internal Server Error" });
    }
})

// Route2: add the notes using POST "/api/notes/addnote". Logged in
router.post("/addnote", fetchUser, [
    body('title', "Enter a valid title").isLength({ min: 3 }),
    body('description', "Description must be atleast 5 character").isLength({ min: 5 })
], async (req, res) => {
    try {
        // destructure kar raha hai
        const { title, description, tag } = req.body
        // If there are errors, return bad request with error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // adding a new note after desturcture karka
        const note = new Note ({
            // isma user ma req.user.id jo vo fetchUser middleware se aaya hai
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.send(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Internal Server Error" });
    }
})

// Route3: Update the existingnotes using PUT "/api/notes/updatenote/:id". Logged In
router.put('/updatenote/:id',fetchUser,async (req,res)=>{
   try {
     // destructuring the object from body
     const {title,description,tag} = req.body;
     // Creating a new note
     const newNote = {}
     if(title){newNote.title = title}
     if(description){newNote.description = description}
     if(tag){newNote.tag = tag}
     // Find the note to be updated and update it
     let note = await Note.findById(req.params.id);
     if(!note){return res.status(404).send("Not Found")}
     // Allow Update if user own this note
     if(note.user.toString() !== req.user.id)
     {
         return res.status(401).send("Not Allowed")
     }
     note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
     res.send(note);
   } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: "Internal Server Error" });
   }
})

// Route4: Delete the existing notes using DELETE "/api/notes/deletenote/:id". Logged In
router.delete('/deletenote/:id',fetchUser,async (req,res)=>{
    try {
        // Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}
    // Allow deletion if user own this note
    if(note.user.toString() !== req.user.id)
    {
        return res.status(401).send("Not Allowed")
    }
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({note,"success":"Successfully Deleted the note"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Internal Server Error" });
    }
})
module.exports = router