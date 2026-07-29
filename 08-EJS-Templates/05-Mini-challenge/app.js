/*Create a Fake Product Page.

When the user visits:

/product

Pass:

{
    name: "iPhone 16",
    price: "₹89,999",
    brand: "Apple",
    color: "Black"
}

Display it like:

Product Details

Name : iPhone 16

Brand : Apple

Price : ₹89,999

Color : Black
------------------------------------------------------------------------------------------------*/

// Import the Express framework.
const express = require("express");

// Create an Express application.
const app = express();

// Import Node's Path module.
const path = require("path");

// Define the port number.
const PORT = 3000;

// Set EJS as the template engine.
app.set("view engine", "ejs");

// Tell Express where all EJS files are stored.
app.set("views", path.join(__dirname, "views"));

// Create a Product route.
app.get("/product", (req, res) => {

    // Render productInfo.ejs
    // Pass product details to the template.
    res.render("productInfo", {

        Name: "iPhone 16",

        Brand: "Apple",

        Price: "₹89,999",

        Color: "Black"

    });

});

// Start the server.
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});