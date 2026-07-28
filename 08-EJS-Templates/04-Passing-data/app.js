/*Student Details

Pass: {
    name: "Tony",
    age: 22,
    course: "MCA"
}
Display:
Name: Rahul
Age: 22
Course: MCA
------------------------------------------------------------------------------------------------------------------*/
// Import the Express framework.
// Express helps us create a web server and define routes.
const express = require("express");

// Create an Express application.
const app = express();

// Import Node.js built-in Path module.
// It helps create file paths that work correctly on every operating system.
const path = require("path");

// Define the port number on which the server will run.
const PORT = 3000;

// Tell Express to use EJS as the template engine.
// Now Express knows that all template files have the ".ejs" extension.
app.set("view engine", "ejs");

// Tell Express where all EJS template files are stored.
// __dirname = Current project folder
// path.join() safely creates the absolute path to the "views" folder.
app.set("views", path.join(__dirname, "views"));

// Create a route for the Home Page.
// Whenever a user visits "/", this callback function executes.
app.get("/", (req, res)=>{

       // Render the "info.ejs" file.
    // Along with rendering, pass an object containing data.
    // The variables name, age, and city become available inside info.ejs.
    res.render("info", {

           // Variable passed to EJS.
        name: "Tony stark",
        age: 45,
        city: "New York"
    });
});

// Start the Express server and listen for incoming requests.
app.listen(PORT, ()=>{
    // Print a message after the server starts successfully.
    console.log(`Server running on http://localhost:${PORT}`);
});