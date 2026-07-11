<!-- If You Want Both Date and Time (Recommended) -->
const currentTime = new Date();

console.log("Home page visited");
console.log("At:", currentTime.toLocaleString());

<!-- If You Want Only the Time -->
console.log(currentTime.toLocaleTimeString());

Example:

12:00:52 PM
<!-- If You Want Only the Date -->
console.log(currentTime.toLocaleDateString());

Example:

07/07/2026

⭐ One Important Thing to Remember

Many beginners think res.send() stops the function immediately. In Express, it sends the response, but JavaScript continues executing the remaining statements in the callback unless you explicitly return after res.send().
--------------------------------------------------------------
What is the Question Asking?

Print:

About page visited
Request Method
Requested URL

Example output in the terminal:

About page visited
Request Method: GET
Requested URL: /about

Notice that Method and URL come from the request sent by the browser.
Imagine you visit:

http://localhost:3000/about

The browser sends a request to your server.

That request contains lots of information.

Browser
    │
    ▼
GET /about HTTP/1.1

Express receives this request and stores all its information inside req.

req
│
├── method
├── url
├── headers
├── query
├── params
└── body

So think:

req = Everything the client sent to the server.
Problem:

You didn't receive req and res.

So Express has nowhere to store the request information.

Instead write:

app.get("/about", (req, res) => {

});

Now you have access to the request.
How to Print the Request Method

Inside req there is a property called method.

req.method

If the browser used

GET

then

console.log(req.method);

prints

GET
How to Print the URL

The request also contains

req.url

For

http://localhost:3000/about

it prints

/about

What Happens Internally?

Suppose you open

http://localhost:3000/about
Step 1

Browser creates a request.

Method : GET
URL    : /about
Step 2

It sends the request.

Browser
      │
      ▼
Server
Step 3

Express creates

req

Inside it stores

req
│
├── method = GET
├── url = /about
├── headers = ...
├── query = ...
└── ...
Step 4

Your callback executes.

(req, res) => {

}

Now

req.method

becomes

GET

and

req.url

becomes

/about
Step 5

Console Output

About page visited
Request Method: GET
Requested URL: /about

Browser Output

About Page


How to Remember req

Think of the browser as a person delivering a package.

Browser
        │
        │  "Hello Server!"
        │
        ▼
Server

The package contains:

Request
│
├── Method
├── URL
├── Headers
├── Query
├── Body
└── Cookies

Express places that entire package into:

req

So whenever you're inside a route handler, ask yourself:

"What information did the client send me?"

The answer is almost always: look inside req.

req.method → Which HTTP method was used (GET, POST, etc.)?
req.url → Which URL was requested?
Later you'll learn:
req.params → Route parameters
req.query → Query string values
req.body → Data sent in the request body

A simple memory trick is:

req = Request from the client
res = Response back to the client

Everything the client sends comes through req; everything your server sends back goes through res.

Express Receives the Request

Express creates a Request Object (req).

It looks something like this (simplified):

req = {
    method: "GET",
    url: "/about",
    headers: { ... },
    query: { ... },
    params: { ... }
}

This object contains everything the browser sent

Express automatically creates the req and res objects for every incoming request and passes them to your callback function.

So you can immediately use:

req.method
req.url
req.headers
req.query
req.params

without creating them yourself.
Whenever you write:

app.get("/something", (req, res) => {

});

Think:

req (Request) → "What information did the client send to me?"
res (Response) → "What should I send back to the client?"
--------------------------------------------------------------
Route Parameters

Express lets you create a dynamic part of the URL.

Syntax:

/student/:name

The colon (:) means:

"Whatever comes here, save it."

Think of it like a placeholder.
How Express Stores It

Suppose the browser requests:

/student/Bheem

Express matches:

/student/:name

and automatically creates:

req.params = {
    name: "Bheem"
}

If the URL is:

/student/Rahul

then

req.params = {
    name: "Rahul"
}
So the rule to remember is:

Anything after : in the route becomes a property inside req.params with the same name.
--------------------------------------------------------------
Why app.use() and not app.get()?

Because app.get() handles only GET requests.

Example:

app.get("/test", ...)

handles:

GET /test

But a user can send:

POST /abc
PUT /abc
DELETE /abc

A 404 handler should catch everything.

app.use() catches all remaining requests.
Simple Rule to Remember

Normal routes handle known URLs.
app.use() at the end handles unknown URLs.

So whenever a user visits something your application does not know:

/abc
/profile
/random
/test123

your final app.use() catches it.
-------------------------------------------------------------------------------------
404 Error Handling

If the user visits a route that does not exist:

Example:

localhost:3000/random

Express executes the final middleware:

app.use()

Response:

Page not found

Terminal:

404 Route Accessed, not found
Important Express Concepts Learned
app.get()

Used to create GET routes.

Example:

app.get("/about",(req,res)=>{

});
req Object

req contains information sent by the client.

Examples:

req.method
req.url
req.ip
req.params
res Object

res is used to send a response back to the client.

Example:

res.send("Hello");
Route Parameters

Dynamic values in URL.

Example:

/student/:name

Access:

req.params.name
404 Handler

Used for unknown routes.

Example:

app.use((req,res)=>{
    res.status(404).send("Not Found");
});
Learning Outcome

After completing this project, I understand:

Creating Express server
Creating GET routes
Handling requests and responses
Using request object
Working with dynamic routes
Extracting route parameters
Creating 404 error handling