/*Challenge Questions
Challenge 1: If the user visits: localhost:3000/search
(without any query string)
Return: Please provide a search keyword.
If the user visits: localhost:3000/search?keyword=express
Return: Searching for express...
--------------------------------------------------------------------------------------------*/ 

// Import the Express framework into this file
const express = require("express");

// Create an Express application
const app = express();

// Define the port number on which the server will run
const PORT = 3000;

// Create a GET route for "/search"
app.get("/search", (req, res) =>{
     // Check if the user has provided a "keyword" query parameter
    if(req.query.keyword){

         // If the keyword exists, send a message showing what is being searched
        res.send(`Searching for ${req.query.keyword}`);
    }else{

        // If no keyword is provided, ask the user to provide one
        res.send("Please provide a keyword");
    }
});

// Start the Express server on the specified port
app.listen(PORT, ()=>{

        // Display a message in the terminal indicating the server is running
    console.log(`Server running on http://localhost:${PORT}`);
});
