/*Welcome User
Pass a variable:
username = "Bheem"
Display: Welcome Bheem
---------------------------------------------------------------------------------*/
// Import the Express framework to build the web server.
const express = require("express");

//  Import Node.js built-in 'path' module to work with file paths.
const path = require("path");

// Create an Express application.
const app = express();

// Define the port number on which the server will run.
const PORT = 3000;

// Tell Express to use EJS as the template engine.
// Now Express knows that all template files have the .ejs extension.
app.set("view engine", "ejs");

// Tell Express where all the EJS template files are stored.
// __dirname = Current project folder
// path.join() creates the correct absolute path to the "views" folder.
app.set("views", path.join(__dirname, "views"));

// Create a dynamic route using a Route Parameter.
//
// :username is a placeholder.
//
// Examples:
// localhost:3000/Bheem
// localhost:3000/Rahul
// localhost:3000/Priya
//
// Whatever comes after "/" is stored inside req.params.username.
app.get("/:username", (req,res)=>{

    // / Render the user.ejs template.
    //
    // Pass an object to EJS.
    //
    // Left Side  : username  → Variable name available inside EJS
    // Right Side : req.params.username → Value received from the URL
    //
    // Example:
    // URL = /Bheem
    //
    // req.params.username = "Bheem"
    //
    // So EJS receives:
    //
    // username = "Bheem"
    res.render("user", {username : req.params.username

    });
});

// Start the Express server.
app.listen(PORT, ()=>{

        // Print a success message after the server starts.

    console.log(`Server running on http://localhost:${PORT}`);
});

/*How do we pass data?

res.render() accepts two arguments.

res.render(view, data)

First:

Which page?

Second:

What data?

Example:

res.render("user", {
    username: "Bheem"
});

Now Express says

Take this page

AND

Take this variable.*/ 
