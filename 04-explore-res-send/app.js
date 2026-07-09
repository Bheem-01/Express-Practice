/*Explore res.send()
Objective:
Learn how the res.send() method can send different types
of responses such as strings, HTML, and JavaScript objects.*/ 
// ----------------------------------------------------------------

// Import the Express framework.
// Express helps us build web servers and handle HTTP requests.
const express = require("express");

// Create an Express application.
// The 'app' object is used to configure the server and define routes.
const app = express();

// Define the port number on which the server will run.
let PORT = 3000;

// Start the Express server.
// The callback function executes once the server starts successfully.
app.listen(PORT, ()=>{
       // Display a success message in the terminal.
    console.log("Server started successfully");
    // Display the server URL.
    console.log(`Server running at http://localhost:${PORT}`);
});


// Route 1: Send a String
// URL: http://localhost:3000/
app.get("/string", (req, res)=>{
    res.send("This is a string");
});

// Route 2: Send HTML
// URL: http://localhost:3000/html
app.get("/html", (req, res)=>{
    res.send("<p>This is an html response</p>");
});

// Route 3: Send an Object
// URL: http://localhost:3000/object
app.get("/object", (req, res)=>{
    res.send({
        name: "Bheem",
        course : "Express"
    });
});

// Route: Send an Array
// URL: http://localhost:3000/array
app.get("/array", (req, res) => {

    // Send an array.
    // Express automatically converts the array into JSON.
    res.send(["HTML", "CSS", "JavaScript", "Express"]);
});