# Query Parameters in Express

## 📌 Objective

Learn how to use **Query Parameters** in Express.js.

---

# What are Query Parameters?

Query parameters are extra pieces of information added to the URL after a **question mark (?)**.

Example:

```text
http://localhost:3000/search?name=Bheem
```

# 📌 Express Query Parameters

This project demonstrates how to work with **Query Parameters** in Express.js using `req.query`.

Query parameters are commonly used to send additional information from the client to the server through the URL. They are widely used in search functionality, filtering, sorting, pagination, product listings, booking systems, and many real-world web applications.

---

# 📖 What are Query Parameters?

A **Query Parameter** is a key-value pair that appears **after the question mark (`?`)** in a URL.

### Example

```text
http://localhost:3000/search?name=Bheem
```

Breakdown:

```text
/search        → Route (Path)

?              → Starts the Query String

name           → Query Key

Bheem          → Query Value
```

Express automatically converts query parameters into a JavaScript object.

```javascript
req.query
```

becomes

```javascript
{
    name: "Bheem"
}
```

To access the value:

```javascript
req.query.name
```

Output:

```text
Bheem
```

---

# How Query Parameters Work

Suppose the user visits

```text
http://localhost:3000/search?name=Bheem
```

### Step 1

The browser sends an HTTP request.

↓

### Step 2

Express matches the route.

```javascript
app.get("/search")
```

↓

### Step 3

Express reads everything after the `?`

```text
name=Bheem
```

↓

### Step 4

Express stores it inside

```javascript
req.query
```

↓

### Step 5

Your application can now use the values.

```javascript
const name = req.query.name;

res.send(`Hello ${name}`);
```

Response

```text
Hello Bheem
```

---

# Syntax

```javascript
app.get("/search", (req, res) => {

    console.log(req.query);

});
```

---

# Example 1

URL

```text
/search?name=Bheem
```

Object

```javascript
req.query
```

Output

```javascript
{
    name: "Bheem"
}
```

Access

```javascript
req.query.name
```

---

# Example 2

URL

```text
/person?name=Bheem&age=25
```

Object

```javascript
{
    name: "Bheem",
    age: "25"
}
```

Access

```javascript
req.query.name

req.query.age
```

---

# Example 3

URL

```text
/laptop?brand=HP&ram=16GB&ssd=512GB
```

Object

```javascript
{
    brand: "HP",
    ram: "16GB",
    ssd: "512GB"
}
```

---

# Real-World Uses of Query Parameters

Query parameters are used in many popular websites.

## Amazon

```text
/products?category=mobile&brand=Samsung
```

Used for product searching and filtering.

---

## Flipkart

```text
/products?category=laptop&price=60000
```

Used for price filtering.

---

## Google Search

```text
/search?q=expressjs
```

`q` represents the search keyword.

---

## YouTube

```text
/results?search_query=nodejs
```

Used for searching videos.

---

## Flight Booking

```text
/flight?from=Delhi&to=Mumbai&date=2026-07-15
```

---

## Food Delivery

```text
/order?restaurant=Dominos&item=Farmhouse Pizza&quantity=2
```

---

# Difference Between Route Parameters and Query Parameters

| Route Parameters                         | Query Parameters                                         |
| ---------------------------------------- | -------------------------------------------------------- |
| Part of the URL path                     | Appear after `?`                                         |
| Access using `req.params`                | Access using `req.query`                                 |
| Used for identifying a specific resource | Used for filtering, searching, sorting, pagination, etc. |

---

## Route Parameter Example

URL

```text
/student/Bheem
```

Route

```javascript
app.get("/student/:name")
```

Access

```javascript
req.params.name
```

Output

```text
Bheem
```

---

## Query Parameter Example

URL

```text
/search?name=Bheem
```

Route

```javascript
app.get("/search")
```

Access

```javascript
req.query.name
```

Output

```text
Bheem
```

---

# Route Parameters vs Query Parameters

Suppose you have a college website.

### Route Parameter

```text
/student/101
```

Meaning

> Show details of **Student ID 101**.

The resource itself changes.

---

### Query Parameter

```text
/student?branch=CSE
```

Meaning

> Show students whose branch is **CSE**.

The route remains the same, but additional information is provided.

---

# URL Encoding

Some characters cannot be written directly inside a URL.

Example

```text
Atomic Habits
```

becomes

```text
Atomic%20Habits
```

The browser automatically converts `%20` back into a space.

Example

```text
/book?title=Atomic%20Habits
```

Express returns

```text
Atomic Habits
```

---

# Best Practices

✅ Use query parameters for:

* Searching
* Filtering
* Sorting
* Pagination
* Optional information

Examples

```text
/search

/products

/books

/movies

/flights
```

---

# Do NOT Use Query Parameters For

Avoid using query parameters to uniquely identify a resource.

Instead of

```text
/student?id=101
```

Prefer

```text
/student/101
```

because that student is a unique resource.

---

# Key Concepts Learned

* Express Routing
* GET Requests
* Query Parameters
* Query String
* req.query
* Sending Dynamic Responses
* URL Encoding
* Multiple Query Parameters
* Real-world Applications

---

# Folder Contents

This directory contains practice problems covering:

* Single Query Parameter
* Multiple Query Parameters
* Product Search
* User Profiles
* Book Details
* Flight Booking
* Food Ordering
* Product Filtering

---

# Summary

After completing this section, I learned how to:

* Create GET routes in Express.
* Read query parameters using `req.query`.
* Handle multiple query parameters.
* Build dynamic responses based on user input.
* Understand the difference between Route Parameters and Query Parameters.
* Apply query parameters to real-world scenarios like search, filtering, booking, and ordering systems.

This topic forms an essential foundation for building REST APIs and full-stack web applications using Express.js.
