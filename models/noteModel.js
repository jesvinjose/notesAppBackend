// noteModel.js

const { pool } = require('../database');

// Function to create a new note
exports.createNote = async (sentence) => {
  try {
    const result = await pool.query('INSERT INTO notes (sentence, createdAt) VALUES (?, CURRENT_TIMESTAMP())', [sentence]);
    return { sentence, createdAt: new Date() };
  } catch (error) {
    console.error('Error creating note:', error);
    throw error; // Propagate the error to the caller
  }
};

// Function to delete a note by ID
exports.deleteNote = async (id) => {
  try {
    await pool.query('DELETE FROM notes WHERE id = ?', [id]);
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error; // Propagate the error to the caller
  }
};

// Function to fetch all notes
exports.getAllNotes = async () => {
  try {
    const notes = await pool.query('SELECT * FROM notes');
    return notes;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error; // Propagate the error to the caller
  }
};
