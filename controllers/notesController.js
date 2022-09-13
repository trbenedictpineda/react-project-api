const db = require("../config/database")

const Note = require("../models/Note")


const viewNotes = async (req, res) => {
    try {
       const notes = await Note.findAll()
       console.log(notes)
       res.sendStatus(200)
    } catch (error) {
        console.error(error)
    }
 
}

const addNote = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
    }
}

const updateNote = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
    }
}

const deleteNote = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = { viewNotes, addNote, updateNote, deleteNote }