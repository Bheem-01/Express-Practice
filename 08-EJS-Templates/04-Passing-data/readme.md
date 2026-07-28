⭐ The One Rule You Should Always Remember

Whenever you write:

res.render("page", {
    name: "Tony Stark",
    age: 44,
    city: "New York"
});

think of it as saying:

"Express is sending three variables (name, age, and city) to the info.ejs page."

Then, inside info.ejs, you can access those variables directly:

<%= name %>
<%= age %>
<%= city %>

You don't declare them again in the EJS file—they're already available because Express passed them when calling res.render(). This "Express prepares the data → EJS displays the data" mental model is the key to understanding how templating works.
-------------------------------------------------------------------------------------------------------------------
Run app.js
        │
        ▼
Express Server Starts
        │
        ▼
User visits

http://localhost:3000/
        │
        ▼
Browser sends

GET /
        │
        ▼
Express matches

app.get("/")
        │
        ▼
Express creates

{
name,
age,
city
}
        │
        ▼
Express calls

res.render("info", object)
        │
        ▼
info.ejs receives

name

age

city
        │
        ▼
EJS replaces

<%= name %>

↓

Tony Stark
        │
        ▼
HTML is generated
        │
        ▼
Express sends HTML
        │
        ▼
Browser displays webpage
------------------------------------------------------------------------------------------------------------
(Complete Flow)

Let's understand the complete journey.

Step 1: Start the Program

When you run

nodemon app.js

Node.js starts executing your file from top to bottom.

Step 2: Express is Imported
const express = require("express");

Think of this as:

"I want to use Express in my project."

Without this line,

express()

would not exist.

Step 3: Create the Server
const app = express();

This creates your Express application.

Think of it as:

Empty Server

↓

Ready to accept routes

Now app becomes your server.

Step 4: Import Path
const path = require("path");

Path helps build folder paths safely.

Instead of writing

views/

you let Node determine the correct location.

Step 5: Tell Express About EJS
app.set("view engine", "ejs");

This tells Express

"Whenever I use res.render(), use EJS."

Without this line,

res.render("info")

would fail because Express wouldn't know which template engine to use.

Step 6: Tell Express Where Templates Are
app.set("views", path.join(__dirname, "views"));

Express asks:

"Where are all your EJS files?"

You answer:

Inside the views folder.

Suppose your project is

04-Passing-data
│
├── app.js
│
└── views
      └── info.ejs

path.join() creates the full path automatically.

Step 7: User Visits the Website

Suppose the user types

http://localhost:3000/

Browser sends

GET /

to Express.

Step 8: Express Finds the Route

Express checks all routes.

It finds

app.get("/")

So this function executes.

(req, res) => {

}
Step 9: Express Creates Data

Inside

res.render("info", {

    name: "Tony Stark",

    age: 44,

    city: "New York"

});

Express creates an object.

{
    name: "Tony Stark",
    age: 44,
    city: "New York"
}

Think of it like a parcel.

📦

name

age

city
Step 10: Express Passes the Parcel

Express says

"Hey info.ejs, here is some data."

res.render("info", object)

This sends the object to EJS.

Step 11: EJS Receives It

Inside

info.ejs

these variables now exist automatically.

name

age

city

You simply display them.

<h2>Name: <%= name %></h2>

<h2>Age: <%= age %></h2>

<h2>City: <%= city %></h2>
Step 12: EJS Creates HTML

Originally

<h2>Name: <%= name %></h2>

becomes

<h2>Name: Tony Stark</h2>

Similarly,

<%= age %>

↓

44
Step 13: Browser Receives HTML

Express sends

<h2>Name: Tony Stark</h2>

<h2>Age: 44</h2>

<h2>City: New York</h2>

Browser displays

Name: Tony Stark

Age: 44

City: New York