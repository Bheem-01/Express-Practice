When solving any Express question, ask yourself these questions:

Step 1: What is the route?
/products

↓

app.get("/products")
Step 2: What comes after ?
category=mobile&brand=Samsung

↓

Express creates:

req.query = {
    category: "mobile",
    brand: "Samsung"
}
Step 3: Which values do I need?

The expected output is:

Showing Samsung mobiles

So you need:

req.query.brand

and

req.query.category
Step 4: Send the response

Use:

res.send(...)

Never:

res.get(...)
📌 Quick Revision
Method	Purpose
app.get()	Define a GET route
req.query	Read query parameters from the URL
res.send()	Send a response to the client
res.get()	Read a response header (rarely used by beginners)

Breaking Down the URL

Let's divide the URL into parts.

http://localhost:3000/products?category=mobile&brand=Samsung
Part	Meaning
http://localhost:3000	Server Address
/products	Route
?	Starts Query Parameters
category=mobile	First Query Parameter
&	Separator
brand=Samsung	Second Query Parameter
Who Types What?

This is where most beginners get confused.

Suppose you own Amazon.

You create the route.

app.get("/products", ...)

You decide what information you need.

For example:

category
brand

These names are called keys.

So you decide the keys.

The user only changes the values.

Example:

/products?category=mobile&brand=Samsung

Later another user may search

/products?category=laptop&brand=HP

Another user

/products?category=tv&brand=Sony

Notice something?

The keys never changed.

Only the values changed.

Key vs Value
category = mobile
^^^^^^^^   ^^^^^^
   Key      Value
brand = Samsung
^^^^^   ^^^^^^^
 Key      Value
Developer decides the Keys
category

brand

price

city

username
User provides the Values
mobile

Samsung

50000

Delhi

bheem01
What Happens Inside Express?

User visits

/products?category=mobile&brand=Samsung

↓

Express matches

app.get("/products")

↓

Express automatically creates

req.query

↓

Object becomes

{
    category: "mobile",
    brand: "Samsung"
}

↓

Your code accesses

req.query.category

Output

mobile

and

req.query.brand

Output

Samsung

↓

You send the response

res.send(`Showing ${req.query.brand} ${req.query.category}`);

↓

Browser displays

Showing Samsung mobile
Complete Flow
Developer creates route

/products

↓

Developer decides keys

category
brand

↓

User enters URL

/products?category=mobile&brand=Samsung

↓

Browser sends request

↓

Express receives request

↓

Express creates

req.query

↓

{
    category: "mobile",
    brand: "Samsung"
}

↓

Developer reads

req.query.category

req.query.brand

↓

Developer creates response

↓

Browser shows

Showing Samsung mobile
Real World Example

Imagine Amazon.

You search

Samsung Mobile

Amazon internally creates a URL like

/products?category=mobile&brand=Samsung

Now suppose you search

HP Laptop

The URL changes to

/products?category=laptop&brand=HP

Notice

The route

/products

never changed.

Only the values changed.

Code
app.get("/products", (req, res) => {

    res.send(`Showing ${req.query.brand} ${req.query.category}`);

});