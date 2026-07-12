/*Question 1: 
Create a route: /search
Visit: localhost:3000/search?name=Bheem
Expected Response: Hello Bheem*/ 
// ==========================================================

// Import the Express framework
const express = require("express");

// Create an Express application object
const app = express();

// Define the port number on which the server will run
const PORT = 3000;

// Create a GET route for "/search"
app.get("/search", (req,res)=>{

        // req.query contains all query parameters
    // Example URL:
    // /search?name=Bheem
    //
    // req.query becomes:
    // {
    //     name: "Bheem"
    // }

    // Send a greeting using the query parameter
    res.send(`Hello, ${req.query.name}`);
});

// Start the Express server
app.listen(PORT, () => {

        // Print a success message after server starts
    console.log(`Server running on http://localhost:${PORT}`);
});