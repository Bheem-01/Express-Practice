Now Understand the Flow

Suppose you visit

http://localhost:3000/Bheem

Step 1

Browser sends

GET /Bheem

to Express.

Browser
    │
GET /Bheem
    │
    ▼
Express
Step 2

Express checks every route.

It finds

app.get("/:username")

Question:

What is

:username

?

It is a placeholder.

So Express thinks

The user wrote

/Bheem

↓

Store

Bheem

inside

req.params.username

Now

req.params.username

contains

Bheem
Step 3

Express reaches

res.render("user", {
    username: req.params.username
});

Now ask yourself

What is

req.params.username

It is

Bheem

So JavaScript changes this

{
    username: req.params.username
}

into

{
    username: "Bheem"
}

This object is sent to EJS.

Step 4

EJS receives

username = "Bheem"

Now inside

user.ejs

you can simply write

<h1>Welcome <%= username %></h1>

Output

Welcome Bheem


User types URL
        │
        ▼
Browser sends GET request
        │
        ▼
Express receives request
        │
        ▼
Express creates/fetches data
        │
        ▼
Express passes data using

res.render("page", data)

        │
        ▼
EJS receives data
        │
        ▼
EJS inserts data into HTML
        │
        ▼
Express converts EJS → HTML
        │
        ▼
Browser receives HTML
        │
        ▼
User sees webpage
-----------------------------------------------------------------
Complete Flow (Remember This Forever)
Step 1: User Requests a Page

The user types:

http://localhost:3000/

Browser says:

"Express, give me the Home page."

Browser
   │
GET /
   │
   ▼
Express
Step 2: Express Receives the Request

Express checks its routes.

app.get("/", (req, res) => {

});

Express says:

"Okay, someone requested /."

Browser
   │
GET /
   │
   ▼
Express finds:

app.get("/")
Step 3: Express Thinks

This is the most important part.

Express asks itself:

"What information should I send to this page?"

Suppose:

const username = "Bheem";

Express now has data.

Express

username = "Bheem"
Step 4: Express Gives Data to EJS

This is called passing data.

res.render("user", {
    username: "Bheem"
});

Think of it like handing over a file.

Express

"I have this"

username = Bheem

↓

Give it to

↓

user.ejs
Step 5: EJS Receives the Data

Now inside user.ejs

EJS automatically receives

username = "Bheem"

You do NOT write

let username = ...

EJS already has it.

Think of it like a teacher giving you an answer sheet.

You don't rewrite the question.

You simply use it.

Step 6: EJS Displays It

Now EJS says

"I have the variable."

Display it.

<%= username %>

Output

Welcome Bheem
Step 7: Express Converts Everything into HTML

Originally

<h2>Welcome <%= username %></h2>

becomes

<h2>Welcome Bheem</h2>

Notice

There is no EJS left.

Only HTML.

Step 8: Browser Receives HTML

Browser never understands EJS.

Browser only understands HTML.

So Express sends

<h2>Welcome Bheem</h2>

Browser displays

Welcome Bheem
-------------------------------------------------------------
One Sentence to Remember Forever

Express knows the data. EJS only displays the data.

Express is responsible for:

getting the data
creating the data
passing the data

EJS is responsible for:

taking the data
inserting it into HTML
showing it on the webpage