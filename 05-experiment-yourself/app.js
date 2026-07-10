/*Experiment Yourself: Create 5 custom routes related to yourself.
Example ideas:

/name
/city
/favorite-language
/hobby

-------------------------------------------------------------------*/ 

// Import the Express framework.
// Express provides methods for creating web servers and handling HTTP requests.
const express = require("express");

// Create an Express application.
// The 'app' object is used to configure the server and define routes.
const app = express ();

// Define the port number on which the server will run.
const PORT = 3000;

// Start the Express server.
// The callback function executes only once when the server starts successfull
app.listen(PORT, ()=>{
        // Display a success message in the terminal.
    console.log("Server started successfully");
       // Display the URL where the server is running.
    console.log(`Server running at http://localhost:${PORT}`);
});

// Home Route
// URL: http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Welcome to My Personal Express Profile!");
});

// Name Route
// URL: http://localhost:3000/name
app.get("/name", (req, res) => {
    res.send("Hii, my name is Bheem");
});

// City Route
// URL: http://localhost:3000/city
app.get("/city", (req, res) => {
    res.send("My city is New Delhi");
});

// Favorite Language Route
// URL: http://localhost:3000/favorite-language
app.get("/favourite-language", (req, res) => {
    res.send("My favourite language is JavaScript");
});

// Hobby Route
// URL: http://localhost:3000/hobby
app.get("/hobby", (req, res) => {
    res.send("My hobby is solving programming problems and learning new technologies.");
});