// Import the Express framework.
const express = require("express");

// Create an Express application
const app = express();

// Start the server.
const port = 3000;
app.listen(port, ()=>{
    console.log("Server started successfully");
    console.log(`Server running at http://localhost:${port}`);});

/*// Import the Express framework.
// Express helps us create web servers and handle HTTP requests easily.
const express = require("express");

// Create an Express application.
// The 'app' object provides methods such as app.listen(), app.get(), app.post(), etc.
const app = express();

// Define the port number on which the server will run.
let port = 3000;

// Start the Express server and listen for incoming client requests.
// The callback function executes once the server starts successfully.
app.listen(port, () => {

    // Print a success message in the terminal.
    console.log("Server started successfully");

    // Display the port number on which the server is running.
    console.log(`Listening on port ${port}`);
});*/ 