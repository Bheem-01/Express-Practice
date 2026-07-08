// Create first route:
// ----------------------------------------------------------


// Import the Express framework into this file.
// Express provides tools to create web servers and handle
//  HTTP requests.
const express = require ("express");

// Create an Express application.
// The 'app' object is used to configure the server, define routes,
// and handle incoming client requests.
const app = express();

// Define the port number on which the server will listen.
// Clients will access the application using http://localhost:3000.
const PORT = 3000;

// Start the Express server and begin listening for incoming requests.
// The callback function runs only once when the server starts successfully.
app.listen(PORT, ()=>{

      // Display a confirmation message in the terminal.
    console.log("Server started successfully");
     // Display the URL where the server can be accessed.
    console.log(`Server running at http://localhost:${PORT}`);
});

// Create the Home Route ('/').
// This route is executed whenever a client visits
// http://localhost:3000/.
app.get("/", (req, res) =>{
        // Send a response back to the client.
    // The browser will display this text.
    res.send("Welcome to my first Express application");
});
