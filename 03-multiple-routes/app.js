/* Create the following routes.

Route    	Response
/about  	About Us
/contact 	Contact Us
/services	Our Services
/help   	Help Center */
// ------------------------------------------------------------

// Import the Express framework.
const express = require("express");

// Create an Express application.
// The 'app' object is used to configure the server and define routes.
const app = express();

// Define the port number on which the server will run.
const PORT = 3000;

// Start the Express server.
// The callback function executes once the server starts
//  successfully.
app.listen(PORT, ()=>{
    console.log("Server started successfully");
    console.log(`Server running at http://localhost:${PORT}`);
});

// Home Route
// Executes when the client visits http://localhost:3000/
app.get("/", (req, res) =>{
        // Send a response back to the browser.
    res.send("Welcome to my first express application");
});

// Contact Route
// Executes when the client visits http://localhost:3000/contact
app.get("/contact", (req,res)=>{
    res.send("Contact us");
}); 

// Services Route
// Executes when the client visits http://localhost:3000/services
app.get("/services", (req,res)=>{
    res.send("Our services");
});

// Help Route
// Executes when the client visits http://localhost:3000/help
app.get("/help", (req,res)=>{
    res.send("Help center");
});