# Express.js Challenge - Weather Route

## Objective

Learn how to use **Query Parameters** in Express.js by creating a simple weather route.

The application checks whether the user has entered a city name in the URL.

---

# Project Structure

```
weather-project/
│
├── app.js
├── package.json
└── README.md
```

---

# Prerequisites

- Node.js installed
- Express installed

Install Express:

```bash
npm install express
```

---

# Run the Project

Start the server:

```bash
node app.js
```

Terminal Output:

```
Server running on http://localhost:3000
```

---

# Route

```
GET /weather
```

---

# Understanding the URL

Example:

```
http://localhost:3000/weather?city=Delhi
```

Breakdown:

```
http://localhost:3000
        │
        │
    Server Address

/weather
    │
    │
   Route

?city=Delhi
      │
      │
 Query Parameter
```

A query parameter always follows this format:

```
key=value
```

Example:

```
city=Delhi
```

Here,

```
Key   → city
Value → Delhi
```

---

# How Express Reads Query Parameters

Express automatically stores query parameters inside:

```javascript
req.query
```

If the user visits:

```
http://localhost:3000/weather?city=Delhi
```

Express creates:

```javascript
req.query = {
    city: "Delhi"
}
```

Now,

```javascript
req.query.city
```

returns

```
Delhi
```

---

# Program Workflow

## Step 1

User visits:

```
http://localhost:3000/weather
```

No query parameter is present.

So,

```javascript
req.query.city
```

is

```javascript
undefined
```

The condition

```javascript
if(req.query.city)
```

becomes false.

The program executes:

```javascript
res.send("Please provide a city name.");
```

Browser Output:

```
Please provide a city name.
```

---

## Step 2

User visits:

```
http://localhost:3000/weather?city=Delhi
```

Express stores:

```javascript
req.query = {
    city: "Delhi"
}
```

Now,

```javascript
req.query.city
```

contains

```
Delhi
```

The condition becomes true.

The program executes:

```javascript
res.send(`Showing weather for ${req.query.city}`);
```

Browser Output:

```
Showing weather for Delhi
```

---

# Test Cases

## Test 1

Visit:

```
http://localhost:3000/weather
```

Output:

```
Please provide a city name.
```

---

## Test 2

Visit:

```
http://localhost:3000/weather?city=Delhi
```

Output:

```
Showing weather for Delhi
```

---

## Test 3

Visit:

```
http://localhost:3000/weather?city=Mumbai
```

Output:

```
Showing weather for Mumbai
```

---

## Test 4

Visit:

```
http://localhost:3000/weather?city=London
```

Output:

```
Showing weather for London
```

---

# Code Explanation

### Import Express

```javascript
const express = require("express");
```

Imports the Express framework.

---

### Create the Express App

```javascript
const app = express();
```

Creates an Express application.

---

### Define the Port

```javascript
const PORT = 3000;
```

The server will listen on port **3000**.

---

### Create the Route

```javascript
app.get("/weather", (req, res) => {
```

Creates a GET route named **/weather**.

---

### Check for the City

```javascript
if(req.query.city)
```

Checks whether the user has provided a city in the URL.

---

### Send Success Response

```javascript
res.send(`Showing weather for ${req.query.city}`);
```

Displays the city entered by the user.

---

### Send Error Response

```javascript
res.send("Please provide a city name.");
```

Runs when the city parameter is missing.

---

### Start the Server

```javascript
app.listen(PORT, () => {
```

Starts the Express server.

---

# Concepts Practiced

- Express.js
- Creating Routes
- GET Requests
- Query Parameters
- req.query
- if...else
- Template Literals
- res.send()
- Running a Node.js Server

---

# Real-World Example

Many weather websites work in the same way.

Example:

```
https://weatherapp.com/weather?city=Delhi
```

The server receives:

```javascript
req.query = {
    city: "Delhi"
}
```

Then it:

1. Reads the city name.
2. Fetches weather data from a database or weather API.
3. Sends the weather information back to the user.

This project demonstrates the **first step**—reading the city name from the URL using Express query parameters.