1. What is EJS?

EJS stands for: Embedded JavaScript Templates

It is a template engine used with Express.js.

EJS allows us to write JavaScript inside HTML files and generate dynamic web pages.

Instead of sending plain text or static HTML, Express can generate HTML dynamically using data.

2. Why do we need EJS?

Without EJS

<h1>Welcome Bheem</h1>

The name is fixed.

If another user visits,

it still shows

Welcome Bheem

Not useful.

Using EJS

<h1>Welcome <%= username %></h1>

Now

User 1

Welcome Bheem

User 2

Welcome Rahul

User 3

Welcome Priya

Same page.

Different output.

This is called

Dynamic HTML Rendering

Configure Express

Import Express

const express = require("express");

Create App

const app = express();

Tell Express to use EJS

app.set("view engine", "ejs");

This line is mandatory.

Without it

res.render()

will not work.

7. The Views Folder

Express always searches inside

views/

for templates.

Suppose

views

↓

home.ejs

Then

res.render("home");

works.

Don't write

res.render("home.ejs")

Express already knows

views/

+

.ejs

res.send() vs res.render()
res.send()

Used to send

✔ String

✔ HTML

✔ Object

✔ Array

Example

res.send("Hello");
res.render()

Used only for

EJS Templates

Example

res.render("home");

It renders

views/home.ejs
10. Complete Flow of EJS
Browser

↓

GET /

↓

Express Route

↓

app.get("/")

↓

res.render("home")

↓

Express searches

views/home.ejs

↓

Reads template

↓

Executes JavaScript

↓

Creates HTML

↓

Sends HTML

↓

Browser