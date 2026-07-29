Passing Product Data to EJS
Objective

Learn how to send multiple pieces of data from an Express route to an EJS template and display them dynamically.

What is Happening?

When a user visits

http://localhost:3000/product

the browser sends an HTTP GET request to the Express server.

Express matches the request with the following route:

app.get("/product", ...)

Once the route is matched, Express creates a JavaScript object containing the product information.

{
    name: "iPhone 16",
    brand: "Apple",
    price: "₹89,999",
    color: "Black"
}

Instead of sending plain text using res.send(), Express renders an EJS template.

res.render("productInfo", object)

The first argument (productInfo) tells Express which EJS file to render.

views/
    productInfo.ejs

The second argument is an object containing all the data that should be available inside the EJS file.

How EJS Receives Data

When Express executes:

res.render("productInfo", {
    name: "iPhone 16",
    brand: "Apple",
    price: "₹89,999",
    color: "Black"
});

EJS automatically receives four variables:

name

brand

price

color

Inside productInfo.ejs, these variables can be displayed using EJS output tags.

<%= name %>

<%= brand %>

<%= price %>

<%= color %>
Complete Request Flow
User opens browser
        │
        ▼
http://localhost:3000/product
        │
        ▼
Browser sends GET request
        │
        ▼
Express Server
        │
        ▼
Route "/product" matches
        │
        ▼
Express creates product object
        │
        ▼
res.render("productInfo", productObject)
        │
        ▼
EJS receives product data
        │
        ▼
EJS replaces

<%= name %>

↓

iPhone 16
        │
        ▼
HTML page is generated
        │
        ▼
Express sends HTML
        │
        ▼
Browser displays Product Details
Difference Between res.send() and res.render()
res.send()

Sends plain text, HTML, JSON, or other data directly to the browser.

Example:

res.send("Hello World");

Output:

Hello World
res.render()

Renders an EJS template and sends the generated HTML page.

Example:

res.render("productInfo", {
    name: "iPhone 16"
});

Output:

Product Details

Name : iPhone 16
Important Rule

Whatever variables you want to use inside an EJS file must be passed through res.render().

Example:

res.render("page", {
    name: "Tony",
    age: 44
});

Inside page.ejs, you can access:

<%= name %>

<%= age %>

Trying to use a variable that wasn't passed (for example, <%= course %> when you never passed course) will result in a ReferenceError.