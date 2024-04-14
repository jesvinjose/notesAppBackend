// controllers/noteController.js

const noteModel = require("../models/noteModel");

// Function to add a note
const addNote = async (req, res) => {
  console.log("inside addNote controller");
  console.log(req.body, "------hello body");
  const {sentence} = req.body;
  console.log(sentence, "----hello sentence");

  // Check if the 'sentence' property is present in the request body
  if (!sentence) {
    return res.status(400).json({ error: "Sentence is required" });
  }

  try {
    const newNote = await noteModel.createNote(sentence);
    return res
      .status(201)
      .json({ message: "Note added successfully", note: newNote });
  } catch (error) {
    console.error("Error adding note:", error);
    return res.status(500).json({ error: "Error adding note" });
  }
};

// Function to delete a note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  console.log(id,"----------id------------");
  try {
    await noteModel.deleteNote(id);
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    return res.status(500).json({ error: "Error deleting note" });
  }
};

// Function to fetch all notes
const fetchNotes = async (req, res) => {
  try {
    // Fetch all notes from the database using the noteModel
    console.log("reached fetchNotes");
    const notes = await noteModel.getAllNotes();
    return res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    return res.status(500).json({ error: "Error fetching notes" });
  }
};

module.exports={
  addNote,fetchNotes,deleteNote
}
