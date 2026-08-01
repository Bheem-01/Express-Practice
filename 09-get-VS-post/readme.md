GET vs POST in Express (Understanding URL Behavior)
🎯 Objective:

This project demonstrates the fundamental difference between GET and POST requests in Express.js by observing:

How data is sent
Where the data is stored
How the browser URL changes
How Express accesses the data

Key Takeaways
GET sends data through the URL as query parameters and Express reads it using req.query.
POST sends data in the request body and Express reads it using req.body.
express.urlencoded() is required to parse HTML form data.
express.json() is required to parse JSON request bodies.
GET is ideal for reading data, while POST is preferred for creating or submitting data.
You can send one response per request; calling res.send() twice in the same route results in an error.

What is an HTTP Request?

Whenever a browser communicates with a server, it sends an HTTP Request.

The two most common request methods are:

GET → Request data from the server
POST → Send data to the server

Think of it like this:
 Browser  --------------------->  Server
          HTTP Request
----------------------------------------------------------------------------------------
URL Breakdown
http://localhost:3000/register?user=Bheem&password=12345

| Part           | Meaning                   |
| -------------- | ------------------------- |
| http://        | Protocol                  |
| localhost      | Server                    |
| 3000           | Port                      |
| /register      | Route                     |
| ?              | Start of Query Parameters |
| user=Bheem     | First value               |
| &              | Separator                 |
| password=12345 | Second value              |


Why Does GET Show Data in URL?

Because browsers append all form fields as Query Parameters.

General format

route?key=value&key=value

Example

/search?movie=avatar&year=2022

POST Request:
Notice

There is NO query string.

The URL remains

http://localhost:3000/register

Where Did the Data Go?

Instead of placing the data in the URL, the browser puts it inside the Request Body.

POST /register

Body

user=Bheem
password=12345

Express reads it using

req.body

After middleware

app.use(express.urlencoded({ extended: true }));

Express converts it into

{
   user: "Bheem",
   password: "12345"
}

Access values

req.body.user

req.body.password

Visual Comparison
GET:
Browser

↓

GET /register?user=Bheem&password=12345

↓

Express

↓

req.query

↓

{
   user:"Bheem",
   password:"12345"
}

POST:
Browser

↓

POST /register

↓

Body

user=Bheem

password=12345

↓

Express Middleware

↓

req.body

↓

{
   user:"Bheem",
   password:"12345"
}

Why Doesn't POST Show Data in URL?

Because POST sends data inside the HTTP Request Body, not the URL.

The URL only tells the server where to send the request.

The Body tells the server what data is being sent.
------------------------------------------------------------------------------------------------
Why Doesn't POST Show Data in URL?

Because POST sends data inside the HTTP Request Body, not the URL.

The URL only tells the server where to send the request.

The Body tells the server what data is being sent.

Why is express.urlencoded() Required?

Without middleware

console.log(req.body);

Output

undefined

Because Express cannot automatically read HTML form data.

Adding

app.use(express.urlencoded({ extended: true }));

allows Express to parse

user=Bheem&password=12345

into

{
   user:"Bheem",
   password:"12345"
}
When is express.json() Needed?

If the client sends JSON

{
   "user":"Bheem",
   "password":"12345"
}

Express cannot read it unless

app.use(express.json());

is added.

Then

req.body

becomes

{
   user:"Bheem",
   password:"12345"
}
--------------------------------------------------------------------------------------
| Feature                | GET                       | POST              |
| ---------------------- | ------------------------- | ----------------- |
| Purpose                | Retrieve data             | Send/Create data  |
| Data Location          | URL (Query Parameters)    | Request Body      |
| Express Property       | `req.query`               | `req.body`        |
| URL Changes            | ✅ Yes                     | ❌ No              |
| Browser History        | ✅ Stored                  | ❌ Not Stored      |
| Can Bookmark           | ✅ Yes                     | ❌ No              |
| Data Visible in URL    | ✅ Yes                     | ❌ No              |
| Suitable for Passwords | ❌ No                      | ✅ Better          |
| Maximum Data Size      | Limited by browser/server | Much larger       |
| Refresh Behavior       | Safe to repeat            | May resubmit data |


Which One Should I Use?

Use GET when you want to retrieve or search for information without changing anything on the server.

Examples:

Search products
Filter students
View a profile
Fetch blog posts

Use POST when you want to send new data or perform an action on the server.

Examples:

Register a new user
Log in
Submit a contact form
Upload a file
Create a new record