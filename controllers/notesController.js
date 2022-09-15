const db = require("../config/database")

const Note = require("../models/Note")


const viewNotes = async (req, res) => {
    try {
        const notes = await Note.findAll({ where: { is_note_deleted: 0 } })
        res.status(200).send(notes)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }

}

const addNote = async (req, res) => {

    const { title, content } = req.body

    try {
        await Note.create({
            note_id: Math.floor(Math.random() * 1000000),
            note_title: title,
            note_content: content,
            note_date: new Date(),
        })
        res.status(200).send({ message: "Successfully added a note." })
    } catch (error) {
        res.status(500).send({ message: "An error occured!" })
        console.error(error)
    }
}

const updateNote = async (req, res) => {

    const { title, content } = req.body

    const { id } = req.params

    try {
        await Note.update({ note_title: title, note_content: content }, {
            where: {
                note_id: id
            }
        })
        res.status(200).send({ message: "Successfully updated this note." })
    } catch (error) {
        res.status(500).send({ message: "An error occured!" })
        console.error(error)
    }
}

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params

        await Note.update({ is_note_deleted: true }, {
            where: {
                note_id: id
            }
        })
        res.status(200).send({ message: "Successfully deleted note." })
    } catch (error) {
        res.status(500).send({ message: "An error occured!" })
        console.error(error)
    }
}

module.exports = { viewNotes, addNote, updateNote, deleteNote }