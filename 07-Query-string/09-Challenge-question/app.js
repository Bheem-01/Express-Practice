/*Create a route: /weather
Visit: localhost:3000/weather?city=Delhi
Expected Response: Showing weather for Delhi
If no city is provided: Please provide a city name.
--------------------------------------------------------------------------------------------*/ 

// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Define the port number on which the server will run
const PORT = 3000;

// Create a GET route for "/weather"
app.get("/weather", (req, res) => {

    // Check if the user has provided a "city" query parameter
    if (req.query.city) {

        // If a city is provided, display the weather message
        res.send(`Showing weather for ${req.query.city}`);

    } else {

        // If no city is provided, ask the user to provide one
        res.send("Please provide a city name.");

    }

});

// Start the server on port 3000
app.listen(PORT, () => {

    // Display a message in the terminal after the server starts
    console.log(`Server running on http://localhost:${PORT}`);

});