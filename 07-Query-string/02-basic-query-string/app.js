/*Question 2: Create a route: /student
Visit: localhost:3000/student?rollNo=101
Expected Response: Student Roll Number: 101*/ 
// =============================================================================

// Import the Express framework
const express = require("express");

// Create an Express application object
const app = express();

// Define the port number
const PORT = 3000;

// Create a GET route for "/student"
app.get("/student", (req, res)=>{

    // Access the query parameter "rollNo"
    // Example:
    // /student?rollNo=101
    //
    // req.query becomes:
    // {
    //     rollNo: "101"
    // }
        // Send the roll number back to the client
    res.send(`Student roll number: ${req.query.rollNo}`);
});

// Start the server
app.listen(PORT, ()=>{
     console.log(`Server running on http://localhost:${PORT}`);
});