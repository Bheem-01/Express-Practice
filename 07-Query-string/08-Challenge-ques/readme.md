# Express.js Challenge 1 - Search Keyword

## Objective

Learn how to use **Query Parameters** in Express.js.

The application checks whether the user has entered a search keyword in the URL.

---

# Project Structure

```
project-folder
│
├── app.js
├── package.json
└── README.md
```

---

# Install Express

Open Terminal inside the project folder and run:

```bash
npm install express
```

---

# Run the Project

Start the server using:

```bash
node app.js
```

If everything is correct, the terminal displays:

```
Server running on http://localhost:3000
```

---

# Route

```
GET /search
```

---

# Understanding Query Parameters

A URL has two parts:

```
http://localhost:3000/search?keyword=express
```

Breakdown:

```
http://localhost:3000
        │
        │
     Server Address

/search
   │
   │
 Route

?keyword=express
        │
        │
   Query Parameter
```

The question mark (`?`) starts the query string.

Each query parameter has:

```
key=value
```

Example:

```
keyword=express
```

Here,

```
key   = keyword
value = express
```

Express automatically stores all query parameters inside:

```javascript
req.query
```

So,

```
req.query
```

becomes

```javascript
{
    keyword: "express"
}
```

---

# How the Program Works

### Step 1

The user visits:

```
http://localhost:3000/search
```

There is no query parameter.

Therefore,

```javascript
req.query.keyword
```

is

```javascript
undefined
```

Since it doesn't exist, the program executes:

```javascript
res.send("Please provide a keyword");
```

Output:

```
Please provide a keyword
```

---

### Step 2

The user visits:

```
http://localhost:3000/search?keyword=express
```

Express creates:

```javascript
req.query = {
    keyword: "express"
}
```

Now,

```javascript
req.query.keyword
```

contains

```
express
```

The condition

```javascript
if(req.query.keyword)
```

becomes

```javascript
if("express")
```

Since non-empty strings are **truthy**, the condition becomes true.

The program executes:

```javascript
res.send(`Searching for ${req.query.keyword}`);
```

Output:

```
Searching for express
```

---

# Test Cases

### Test 1

Visit:

```
http://localhost:3000/search
```

Output:

```
Please provide a keyword
```

---

### Test 2

Visit:

```
http://localhost:3000/search?keyword=express
```

Output:

```
Searching for express
```

---

### Test 3

Visit:

```
http://localhost:3000/search?keyword=nodejs
```

Output:

```
Searching for nodejs
```

---

# Important Concepts Learned

✅ Express Server

✅ GET Route

✅ Query Parameters

✅ req.query

✅ if...else Statement

✅ Template Literals

✅ Sending Responses using res.send()

---

# Key Takeaway

Whenever a user enters data after the `?` in the URL, Express stores it inside `req.query`.

Example:

```
/search?keyword=express
```

becomes

```javascript
req.query = {
    keyword: "express"
}
```

You can then access the value using:

```javascript
req.query.keyword
```

This concept is commonly used in search bars, filters, product searches, and many real-world web applications.