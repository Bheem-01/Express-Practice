/*(Amazon Search)
Route: /products
Visit: localhost:3000/products?category=mobile&brand=Samsung
Expected Response: Showing Samsung mobiles*/

// -------------------------------------------------------------------------------------
// Import Express
const express = require("express");

// Create an Express application
const app = express();

// Create an Express application
const PORT = 3000;


app.get("/products", (req, res) =>{


    // URL:
    // /products?category=mobile&brand=Samsung
    //
    // req.query becomes:
    // {
    //     category: "mobile",
    //     brand: "Samsung"
    // }
    // / Send the response using the query parameters
    res.send(`Showing ${req.query.brand} ${req.query.category}`);
});


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});

/*Correct URL

The first query parameter always starts with ?.

http://localhost:3000/products?category=mobile&brand=Samsung

Easy Trick to Never Forget

Think of the URL as a sentence:

Route ? First Query & Second Query & Third Query

Always remember this pattern:

/route?key1=value1&key2=value2&key3=value3*/ 