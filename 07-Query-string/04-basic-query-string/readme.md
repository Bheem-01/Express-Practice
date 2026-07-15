# Profile Route Using Query Parameters

## 📌 Objective

Learn how to retrieve **multiple query parameters** from a URL using **Express.js** and the `req.query` object.

---

# What are Query Parameters?

Query parameters are **key-value pairs** that are appended to the end of a URL after a question mark (`?`).

They are used to send additional information from the client to the server without changing the route.

### Example

```text
http://localhost:3000/profile?username=bheem01&city=Delhi&profession=Developer
```

In the above URL:

* **Route:** `/profile`
* **Query Parameters:**

  * `username = bheem01`
  * `city = Delhi`
  * `profession = Developer`

---

# Route Used

```text
GET /profile
```

---

# Example Request

```text
http://localhost:3000/profile?username=bheem01&city=Delhi&profession=Developer
```

---

# Expected Response

```text
Username: bheem01
City: Delhi
Profession: Developer
```

---

# How Express Handles This Request

### Step 1

The browser sends a GET request.

```text
/profile?username=bheem01&city=Delhi&profession=Developer
```

↓

### Step 2

Express looks for a matching route.

```javascript
app.get("/profile", ...)
```

Since the route is `/profile`, Express executes this callback function.

↓

### Step 3

Express reads everything after the `?`.

```text
username=bheem01&city=Delhi&profession=Developer
```

↓

### Step 4

Express automatically converts the query string into a JavaScript object.

```javascript
req.query
```

becomes

```javascript
{
    username: "bheem01",
    city: "Delhi",
    profession: "Developer"
}
```

↓

### Step 5

Each value can be accessed using its key.

```javascript
req.query.username
req.query.city
req.query.profession
```

↓

### Step 6

The values are inserted into the response.

```javascript
res.send(`Username: ${req.query.username}
City: ${req.query.city}
Profession: ${req.query.profession}`);
```

---

# Complete Request Flow

```text
Browser
   │
   ▼
GET /profile?username=bheem01&city=Delhi&profession=Developer
   │
   ▼
Express matches "/profile"
   │
   ▼
Reads Query Parameters
   │
   ▼
req.query
   │
   ▼
{
    username: "bheem01",
    city: "Delhi",
    profession: "Developer"
}
   │
   ▼
Extract Values
   │
   ▼
Send Response
   │
   ▼
Username: bheem01
City: Delhi
Profession: Developer
```

---

# Understanding `req.query`

`req.query` is an object provided by Express that stores **all query parameters** sent in the URL.

Example:

URL

```text
/profile?username=bheem01&city=Delhi&profession=Developer
```

Object

```javascript
req.query
```

Output

```javascript
{
    username: "bheem01",
    city: "Delhi",
    profession: "Developer"
}
```

You can access each property individually.

```javascript
req.query.username
req.query.city
req.query.profession
```

---

# Why Use Query Parameters?

Query parameters are commonly used when the client needs to send **optional information** to the server.

Examples include:

* 🔍 Search functionality
* 🛒 Product filters
* 📚 Book details
* 👤 User profiles
* ✈️ Flight search
* 🍕 Food ordering
* 📄 Pagination
* ↕️ Sorting

---

# Difference Between Route Parameters and Query Parameters

| Route Parameters                     | Query Parameters                                 |
| ------------------------------------ | ------------------------------------------------ |
| Part of the URL path                 | Appear after `?`                                 |
| Access using `req.params`            | Access using `req.query`                         |
| Usually identify a specific resource | Usually filter or provide additional information |

### Route Parameter Example

```text
/student/Bheem
```

```javascript
app.get("/student/:name")
```

```javascript
req.params.name
```

---

### Query Parameter Example

```text
/profile?username=bheem01
```

```javascript
app.get("/profile")
```

```javascript
req.query.username
```

---

# Key Concepts Learned

* Express Routing
* GET Requests
* Query Parameters
* `req.query`
* Dynamic Responses
* Multiple Query Parameters
* Client-Server Communication

---

# Learning Outcome

After completing this practice, I learned how to:

* Create a GET route in Express.
* Send multiple query parameters through the URL.
* Access query parameter values using `req.query`.
* Generate dynamic responses based on user input.
* Understand how Express converts query strings into a JavaScript object.
* Differentiate between **Route Parameters** and **Query Parameters**.

This concept is widely used in real-world web applications for searching, filtering, sorting, booking systems, and user-specific data.
