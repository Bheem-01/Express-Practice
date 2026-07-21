/*Build a Fake Shopping Search API with one route:

/products

Try these URLs: /products?category=mobile
/products?category=laptop&brand=HP
/products?category=shoes&brand=Nike&size=9
/products?category=watch&brand=Titan&price=5000
Read the query values using req.query and display them in the response.
----------------------------------------------------------------------------------------------------*/ 
// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Define the port number where the server will run
const PORT = 3000;

// Create a GET route named "/products"
app.get("/products", (req, res) => {

// Check if category, brand, and size are provided
    if (req.query.category && req.query.brand && req.query.size) {
//  Send all three values in the response

        res.send(`Category: ${req.query.category}
Brand: ${req.query.brand}
Size: ${req.query.size}`);

    }
    // Check if category, brand, and price are provided
    else if (req.query.category && req.query.brand && req.query.price) {

        // Send category, brand, and price in the response
        res.send(`Category: ${req.query.category}
Brand: ${req.query.brand}
Price: ${req.query.price}`);

    }
    // Check if only category and brand are provided
    else if (req.query.category && req.query.brand) {

        // Send category and brand
        res.send(`Category: ${req.query.category}
Brand: ${req.query.brand}`);

    }
      // Check if only category is provided
    else if (req.query.category) {

        res.send(`Category: ${req.query.category}`);

    } // If no query parameters are provided
    else {
  // Inform the user that no filters were entered
        res.send("No filters provided.");

    }

});

app.listen(PORT, () => {
     // Print a message in the terminal after the server starts
    console.log(`Server running on http://localhost:${PORT}`);
});