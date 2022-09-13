const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Note = db.define("note",{
    note_id:{ 
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    note_title: DataTypes.TEXT,
    note_date: DataTypes.DATE,
    note_content: DataTypes.TEXT,
    is_note_deleted: DataTypes.BOOLEAN
}, {
    timestamps: false
})

module.exports = Note;
