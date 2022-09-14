const express = require("express")
const { viewNotes, addNote, updateNote, deleteNote } = require("../controllers/notesController")
const router = express.Router()

router.get("/", viewNotes)

router.post("/add-note", addNote)

router.put("/update-note/:id", updateNote)

router.delete("/delete-note/:id", deleteNote)

module.exports = router