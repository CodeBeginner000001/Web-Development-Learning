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
        res.status(400).send("Failed to add note");
    }
})
module.exports = router