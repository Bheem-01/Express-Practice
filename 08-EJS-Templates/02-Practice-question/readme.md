# Multiple EJS Pages in Express

## Objective

This project demonstrates how to render multiple EJS pages using Express.js.

The project includes three routes:

* Home Page
* About Page
* Contact Page

Each route renders a different `.ejs` template stored inside the `views` folder.

---

# Project Structure

```text
01-Multiple-EJS-Pages
│
├── app.js
├── package.json
├── package-lock.json
├── node_modules
│
└── views
      ├── home.ejs
      ├── about.ejs
      └── contact.ejs
```

---

# Required Packages

Install Express

```bash
npm install express
```

Install EJS

```bash
npm install ejs
```

---

# Express Configuration

## 1. Set EJS as the View Engine

```javascript
app.set("view engine", "ejs");
```

This tells Express:

* Use EJS as the template engine.
* Automatically look for `.ejs` files.
* Allow the use of `res.render()`.

---

## 2. Set the Views Folder

```javascript
app.set("views", path.join(__dirname, "views"));
```

This tells Express where all template files are stored.

The `views` folder contains:

* home.ejs
* about.ejs
* contact.ejs

---

# Routes

## Home Route

```javascript
app.get("/", (req, res) => {
    res.render("home");
});
```

URL

```text
http://localhost:3000/
```

Rendered File

```text
views/home.ejs
```

---

## About Route

```javascript
app.get("/about", (req, res) => {
    res.render("about");
});
```

URL

```text
http://localhost:3000/about
```

Rendered File

```text
views/about.ejs
```

---

## Contact Route

```javascript
app.get("/contact", (req, res) => {
    res.render("contact");
});
```

URL

```text
http://localhost:3000/contact
```

Rendered File

```text
views/contact.ejs
```

---

# Complete Request Flow

Suppose the user visits

```text
http://localhost:3000/about
```

The request flows like this:

```text
Browser

↓

GET /about

↓

Express Server

↓

app.get("/about")

↓

res.render("about")

↓

Express searches

views/about.ejs

↓

EJS converts template into HTML

↓

HTML is sent to the browser

↓

Browser displays the About Page
```

---

# How `res.render()` Works

When we write:

```javascript
res.render("about");
```

Express automatically:

1. Looks inside the `views` folder.
2. Finds `about.ejs`.
3. Converts the EJS template into HTML.
4. Sends the generated HTML back to the browser.

We do **not** write:

```javascript
res.render("about.ejs");
```

because Express already knows the template engine is EJS.

---

# Why Use Multiple EJS Files?

Each page of a website usually has different content.

Instead of writing all HTML in one file, we separate pages into different templates.

Example:

* home.ejs → Home Page
* about.ejs → About Page
* contact.ejs → Contact Page

This makes the project easier to organize and maintain.

---

# Folder Responsibilities

## app.js

* Creates the Express server.
* Configures EJS.
* Defines application routes.
* Starts the server.

---

## views Folder

Stores all EJS template files.

Each `.ejs` file represents one web page.

---

# Difference Between `res.send()` and `res.render()`

| res.send()                                          | res.render()                                      |
| --------------------------------------------------- | ------------------------------------------------- |
| Sends plain text, HTML, objects, or arrays directly | Renders an EJS template into HTML                 |
| Does not require a template engine                  | Requires a configured template engine such as EJS |
| Used for APIs and simple responses                  | Used for dynamic web pages                        |

---

# Concepts Learned

* Express Routing
* Multiple Routes
* EJS Template Engine
* Views Folder
* `res.render()`
* Express Configuration
* Project Structure
* Dynamic Page Rendering

---

# Summary

In this project, Express is configured to use EJS as its template engine. Three different routes (`/`, `/about`, and `/contact`) are created, and each route renders a different EJS template from the `views` folder. This demonstrates how Express maps incoming requests to specific templates, converts them into HTML, and returns the rendered pages to the browser.
