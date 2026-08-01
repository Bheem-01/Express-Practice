// Import the Express framework
const express = require ("express");

// Create an Express application
const app = express();

// Define the port number on which the server will run
const PORT = 3000;

// Middleware to read data sent from HTML forms using POST
// Without this, req.body will be empty.
app.use(express.urlencoded({ extended: true }));

// ===========================
// GET Route
// ===========================
// Handles GET requests sent to /register
app.get("/register", (req, res)=>{
    // Send a simple response back to the browser
    res.send("Form submitted, This is a GET response");
});

// ===========================
// POST Route
// ===========================
// Handles POST requests sent to /register
app.post("/register", (req,res)=>{
      // Print the complete form data received
    console.log(req.body);
    // Print only the username
    console.log(req.body.user);
    // Print only the password
    console.log(req.body.password);
    // Send a response back to the browser
    res.send(`Welcome ${req.body.user}`);
    // You cannot send two responses for a single request.
    // Once Express executes the first res.send(), the request is finished.

    // Send a response back to the browser
    res.send("Form submitted, This is a POST response");
});

// Start the Express server
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});