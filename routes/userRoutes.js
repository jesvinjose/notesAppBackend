//userRoutes.js
const express=require('express');
const noteController=require('../controllers/noteController') 

const userRoute=express.Router();

// Route for fetching notes
userRoute.get('/notes', noteController.fetchNotes); // Assuming you have a function named fetchNotes in your controller

// Route for adding a note
userRoute.post('/notes', noteController.addNote);

// Route for deleting a note
userRoute.delete('/notes/:id', noteController.deleteNote);

module.exports = userRoute;