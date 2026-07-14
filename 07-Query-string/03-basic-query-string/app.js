/*Create a route:/person
Visit:localhost:3000/person?name=Bheem&age=25
Expected Response:
Name: Bheem
Age: 25*/
//=================================================================================

// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Create a GET route for "/person"
app.get("/person", (req, res)=>{

     // Access the query parameters
    // URL:
    // /person?name=Bheem&age=25
    //
    // req.query becomes:
    // {
    //     name: "Bheem",
    //     age: "25"
    // }

       // Send both values in the response
     res.send(`Name: ${req.query.name}\nAge: ${req.query.age}`);
});

// Start the Express server
app.listen(PORT, ()=>{
     console.log(`Server running on http://localhost:${PORT}`);
});