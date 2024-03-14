// Load environment variables from a .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Create an Express app
const app = express();

// Import routes for handling workouts
const workoutRoutes = require('./routes/workouts');

//Import routes for user routes
const userRoutes = require('./routes/users')

// Middleware: Enable CORS
app.use(cors()); // <-- Add this line

// Middleware: Parse incoming JSON data
app.use(express.json());

// Middleware: Log request path and method
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes: Use the workoutRoutes for requests starting with '/api/workouts'
app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

// Connect to the MongoDB database using the provided URI
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for incoming requests on the specified port
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
