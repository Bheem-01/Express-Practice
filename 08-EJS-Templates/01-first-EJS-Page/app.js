/*Question 1: First EJS Page
Objective
Install EJS.
Configure Express to use EJS.
Create a views folder.
Create home.ejs.
Render the page.

Expected Output

Welcome to my first EJS page
-----------------------------------------------------------------*/ 
// Import the Express framework to create a web server.
const express = require("express");

// Create an Express application instance.
const app = express();

// Import Node.js built-in 'path' module.
// It helps create file and folder paths that work on Windows, Linux, and macOS.
const path = require("path");

// Define the port number on which the server will run.
const PORT = 3000;

// Tell Express that EJS will be used as the template engine.
// Now Express automatically knows:
// • View files have the .ejs extension.
// • We can use res.render() to render EJS pages.
app.set("view engine", "ejs");

// Tell Express where all EJS template files are stored.
//
// __dirname → Current project folder
// path.join() → Safely joins folder names together.
//// Express will automatically search inside this folder whenever
// res.render() is called.
app.set("views", path.join(__dirname, "/views"));

// Create the Home Route.
//
// When a user visits:
// http://localhost:3000/
app.get("/", (req, res)=>{

    // Render the home.ejs template.
    //
    // Express automatically:
    // 1. Looks inside the views folder.
    // 2. Finds home.ejs.
    // 3. Converts EJS into HTML.
    // 4. Sends the HTML to the browser.
    //
    // Note:
    // Prefer using "home" instead of "home.ejs"
    // because Express already knows the extension.
    res.render("home");
});
// Start the Express server and begin listening for incoming requests.
app.listen(PORT, ()=>{

    // Print a success message in the terminal after the server starts
    console.log(`Server running on http://localhost:${PORT}`);
});
//--------------------------------------------------------------------------------------- 

/*// Import Node.js's built-in 'path' module.
// It helps create file and folder paths that work correctly
// across different operating systems (Windows, macOS, and Linux).
const path = require("path");

Understanding __dirname

Suppose your project is located at:

C:\Users\Bheem\Desktop\Express-Practice\08-EJS-Templates\01-First-EJS-Page

Then:

console.log(__dirname);

prints:

C:\Users\Bheem\Desktop\Express-Practice\08-EJS-Templates\01-First-EJS-Page

Now:

path.join(__dirname, "views")

becomes:

C:\Users\Bheem\Desktop\Express-Practice\08-EJS-Templates\01-First-EJS-Page\views

This tells Express exactly where to look for your .ejs files.*/ 
