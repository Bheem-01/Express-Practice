/*Create a route:/profile
Visit:localhost:3000/profile?username=bheem01&city=Delhi&profession=Developer
Display all three values.*/ 

// ===========================================================================================

// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Create a GET route for "/profile"
app.get("/profile", (req,res) =>{

    // / req.query becomes:
    // {
    //     username: "bheem01",
    //     city: "Delhi",
    //     profession: "Developer"
    // }

    // Send all three query parameter values
    res.send(`Username: ${req.query.username}\nCity: ${req.query.city}\nProfession: ${req.query.profession}`);
});

// Start the server
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
