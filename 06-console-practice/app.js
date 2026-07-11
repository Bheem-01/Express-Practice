/*/*=========================================================
                Console Practice (Express)
===========================================================

Objective:
Learn how to use console.log() for debugging and understanding
incoming requests.

Create the following routes and complete the tasks.

-----------------------------------------------------------
1. Route: /
-----------------------------------------------------------

Print:
- Home page visited
- Current Date & Time

Example:
Home page visited
Time: Tue Jul 07 2026 10:30:15 GMT+0530

-----------------------------------------------------------
2. Route: /about
-----------------------------------------------------------

Print:
- About page visited
- Request Method
- Requested URL

Example:
About page visited
Method: GET
URL: /about

-----------------------------------------------------------
3. Route: /contact
-----------------------------------------------------------

Print:
- Contact page visited
- User's IP Address

(Hint: Use req.ip)

-----------------------------------------------------------
4. Route: /student/:name
-----------------------------------------------------------

Print:
- Student page visited
- Student Name

Example URL:
localhost:3000/student/Bheem

Console Output:
Student page visited
Student Name: Bheem

-----------------------------------------------------------
5. Route: /product/:id
-----------------------------------------------------------

Print:
- Product page visited
- Product ID
-----------------------------------------------------------
8. Create a Global Visit Counter (Challenge)
-----------------------------------------------------------

Every time any route is visited,
increase a counter and print:

Total Requests: 1
Total Requests: 2
Total Requests: 3

(Hint: Create a variable outside the routes.)

-----------------------------------------------------------
9. Unknown Route
-----------------------------------------------------------

If the user visits a route that doesn't exist,
print:

404 Route Accessed
=========================================================*/ 
// Import Express framework to create a web server
const express = require ("express");

// Create an Express application object
const app = express();

// Define the port number where our server will run
const PORT = 3000;


/*1. Route: /
-----------------------------------------------------------

Print:
- Home page visited
- Current Date & Time*/

// Create GET route for home page
app.get("/", (req,res) =>{
    res.send("Home Page");
    console.log("Home page visited");
    /*How to Print Current Date & Time
    JavaScript has a built-in object called Date.
    To get the current date and time:
    const currentTime = new Date();*/ 
    const currentTime = new Date();
        // Convert Date object into readable format and print it
    console.log("At: ", currentTime.toString());
});

/* 2. Route: /about
-----------------------------------------------------------

Print:
- About page visited
- Request Method
- Requested URL */


// Create GET route for about page
app.get("/about", (req, res)=>{
      // Send response to browser
    res.send("About page");
    console.log("About page visited");
        // req.method gives the HTTP method used by client
    // Example: GET, POST, PUT, DELETE
    console.log("Request method : ", req.method);
     // req.url gives the requested URL path
    console.log("Request URL: ", req.url);
});


/*3. Route: /contact
-----------------------------------------------------------

Print:
- Contact page visited
- User's IP Address*/

// Create GET route for contact page
app.get("/contact",(req, res) =>{
       // Send response to browser
    res.send("Contact Us");
    // Print route visit message
    console.log("Contact page visited");
    // req.ip gives the IP address of the clien
    console.log(`User's IP Address: ${req.ip}`);
})

/*4. Route: /student/:name
-----------------------------------------------------------
Print:
- Student page visited
- Student Name */

app.get("/student/:name", (req, res)=>{
    // The colon (:) is used only in your Express route definition, not in the browser URL.
    // :name is a route parameter
// Value changes depending on URL
    res.send("Student page");
    console.log("Student page visited");
      // req.params stores dynamic values from URL
    // Example:
    // /student/Bheem
    // req.params.name = Bheem
    console.log(`Student name is: ${req.params.name}`);
});

/*5. Route: /product/:id
Purpose:
- Create dynamic product route
- Extract product ID from URL
-----------------------------------------------------------*/
// :id is a dynamic route parameter
app.get("/product/:id", (req, res)=>{
    res.send("Product page");
    console.log("Product page visited");
        // Extract product id from URL
    console.log(`Product id: ${req.params.id}`);
});
// -------------------------------------------------------------
/*404 Unknown Route Handler

Purpose:
- Handle routes that do not exist
- Send proper 404 response*/
// ---------------------------------------------------------------------

// app.use() catches every request
// that did not match any previous route
app.use((req, res)=>{

    // Send response with HTTP status code 404
    res.status(404).send("Page not found");

    // res.send("Page not found");
    console.log("404 Route accessed, not found");
});

// Start Express server
app.listen(PORT, ()=>{
      // Confirmation message after server starts
    console.log("Server started successfully");
    // Display server URL
    console.log(`Server running at http://localhost:${PORT}`);
});

