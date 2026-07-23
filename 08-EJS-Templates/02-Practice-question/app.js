/*Question 2: About Page
Create another EJS file: about.ejs
Create a route: /about
Expected Output: This is the About Page.

Question 3: Contact Page
Create: contact.ejs
Route: /contact
Output: Contact Us
--------------------------------------------------------------------------------------------*/
// Import the Express framework to create a web server.
const express = require("express");

// Create an Express application instance.
const app = express();

// Define the port number on which the server will run.
const PORT = 3000;

// Import Node.js's built-in Path module.
// It helps create file paths that work on every operating system.
const path = require("path");

// Tell Express to use EJS as the template engine.
// Now Express knows that all view files have the .ejs extension
app.set("view engine", "ejs");

// Tell Express where all EJS template files are stored.
// __dirname = Current project folder
// path.join() creates the correct absolute path to the "views" folder.
app.set("views", path.join(__dirname, "views"));

// ================= HOME ROUTE =================

// Handle requests made to the Home Page ("/").
// When the user visits http://localhost:3000/
// Express renders views/home.ejs.
app.get("/", (req, res)=>{
    res.render("home");
});

// ================= ABOUT ROUTE =================

// Handle requests made to the About Page.
// URL: http://localhost:3000/about
// Express renders views/about.ejs.
app.get("/about", (req, res)=>{
    res.render("about");
});


// ================= CONTACT ROUTE =================

// Handle requests made to the Contact Page.
// URL: http://localhost:3000/contact
// Express renders views/contact.ejs.
app.get("/contact", (req, res) =>{
    res.render("contact");
});

// Start the Express server and listen for incoming requests.
// Once the server starts successfully,
// print the server URL in the terminal.
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});