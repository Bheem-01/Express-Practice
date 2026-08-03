/*🟢 Question 2 - Student Registration

Fields:

Name
Roll Number
Course
GET Version

Display all values after submission.

POST Version

Display the same values after submission.

Now compare:

Which method is better for registration?
Why?
----------------------------------------------------------------------------*/

// Import the Express framework.
// Express helps us create a web server and handle HTTP requests.
const express = require ("express");

// Create an Express application.
// The 'app' object is used to define routes, middleware, and start the server.
const app = express();

// Define the port number on which the server will run.
const PORT = 3000;

// ----------------------------------------------------------------------
// Middleware
// ----------------------------------------------------------------------

// This middleware parses data coming from HTML forms that use the POST method.
//
// Without this middleware:
// req.body will be undefined.
//
// With this middleware:
// Form data like
// name=Bheem&rollno=101&course=MCA
//
// becomes
//
// {
//   name: "Bheem",
//   rollno: "101",
//   course: "MCA"
// }
//
// and can be accessed using req.body.
app.use(express.urlencoded({ extended: true }));
 
// This middleware tells Express:
// "If the client sends data in JSON format, automatically convert it into a JavaScript object and store it inside req.body."
app.use(express.json());

// ----------------------------------------------------------------------
// GET Route
// ----------------------------------------------------------------------
// This route runs when the browser sends a GET request to:
//
// /registration?name=Bheem&rollno=101&course=MCA
//
// GET form data is stored inside req.query.
app.get("/registration", (req,res)=>{
     // Print the complete query object.
    console.log(req.query);
    console.log("Name :", req.query.name);
    console.log("Roll No :", req.query.rollno);
    console.log("Course :", req.query.course);

      // Send a response back to the browser.
    // Every request must receive one response.
    res.send("GET Form Submitted");
});

// ----------------------------------------------------------------------
// POST Route
// ----------------------------------------------------------------------
// This route runs when the browser sends a POST request.
//
// POST form data is stored inside req.body.
app.post("/registration", (req, res)=>{
    // Print the complete request body object.
    console.log(req.body);
    console.log("Name: ",req.body.name);
    console.log("Rollno: ",req.body.rollno);
    console.log("Name: ",req.body.course);

    // Send a response back to the browser.
    res.send("POST Form Submitted");
});

// ----------------------------------------------------------------------
// Start the Server
// ----------------------------------------------------------------------

// Start the Express server and make it listen on port 3000.
//
// Once the server starts successfully,
// the callback function executes and prints the message below.
app.listen(PORT, (req, res)=>{
    console.log(`Server running on http://localhost:${PORT}`);
});