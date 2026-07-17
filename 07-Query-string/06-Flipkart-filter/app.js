const express = require ("express");
const app = express();

const PORT = 3000;
/*Creates an Express application.

Now app can:

create routes
receive requests
send responses*/ 

app.get("/products", (req, res) =>{
    /*This means:

"When someone visits /products using a GET request, execute this function."*/ 
    res.send(`Category: ${req.query.category}\nMaximum price: ${req.query.price}`);
    /*Getting data from URL (Query String)

Suppose the user visits:

localhost:3000/products?category=laptop&price=60000

The URL has two query parameters:

category = laptop
price = 60000

Express automatically stores them inside:

req.query*/ 
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});